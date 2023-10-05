import React, { useState } from 'react';
import { Button, Card } from 'antd';
import 'tailwindcss/tailwind.css';


const Bone_RADS_Calculator = () => {
  const [steps, setSteps] = useState([1]);
  const [result, setResult] = useState(null);

  const handleAggressiveFeaturesResponse = (response) => {
    if (response) {
      setResult('Bone-RADS 4: Considerare metastasi, mieloma, granuloma eosinofilo, infezione');
    } else {
      setSteps([...steps, 2]);
    }
  };

  const handleHistoryOfMalignancyResponse = (response) => {
    if (response) {
      setSteps([...steps, 'INDETERMINATO (Storia di malignità SENZA caratteristiche aggressive)', 'Bone-RADS 3: OR Bone-RADS 2: Considerare scansione ossea o PET per cercare ulteriori lesioni e MRI per ulteriori caratterizzazioni']);
    } else {
      setSteps([...steps, 4]);
    }
  };

  const handleMeanDensityResponse = (response) => {
    if (response) {
      setResult('Bone-RADS 1: Considerare lipoma intraosseo.');
    } else {
      setSteps([...steps, 5]);
    }
  };

  const handleConsistencyResponse = (response) => {
    if (response) {
      setResult('Bone-RADS 1');
    } else {
      setSteps([...steps, 6]);
    }
  };

  const handleLesionResponse = (response) => {
    if (response) {
      setResult('Bone-RADS 4');
    } else {
      setResult('Bone-RADS 2 OR 3');
    }
  };

  const resetAlgorithm = () => {
    setSteps([1]);
    setResult(null);
  };

  return (
    <div className="p-10 flex flex-col items-center">
      <h2 className="text-right mb-6">Bone-RADS</h2>
            <Button type="primary" size="large" onClick={resetAlgorithm} className="mt-6">Reset</Button>
      <div className="flex items-center">
        <div className="flex flex-col items-center">
          {steps.map((step, index) => (
            <div key={index} className="mb-4 flex flex-col items-center">
              {index > 0 && <div className="text-center text-4xl">↓</div>}
              <Card className={`p-4 rounded-xl ${step === 1 ? 'bg-blue-300' : step.toString().startsWith('Bone-RADS') ? 'bg-green-100' : 'bg-orange-200'}`} style={{ width: 'fit-content' }}>
                {step === 1 && (
                  <div className="text-center">
                <p>Ci sono caratteristiche aggressive?</p>
                <ul>
                  <li>Dolore attribuibile alla lesione</li>
                  <li>Coinvolgimento corticale</li>
                  <li>Estensione del tessuto molle</li>
                  <li>Frattura patologica</li>
                  <li>Reazione periostale aggressiva</li>
                </ul>
                    <Button className="bg-green-500 mx-1" onClick={() => handleAggressiveFeaturesResponse(true)}>Sì</Button>
                    <Button className="bg-red-500 mx-1" onClick={() => handleAggressiveFeaturesResponse(false)}>No</Button>
                  </div>
            )}
            {step === 2 && (
              <div>
                <p>Storia di malignità con propensione alle metastasi ossee?</p>
                <Button className="bg-green-500" onClick={() => handleHistoryOfMalignancyResponse(true)}>Sì</Button>
                <Button className="bg-red-500" onClick={() => handleHistoryOfMalignancyResponse(false)}>No</Button>
              </div>
            )}
            {step === 3 && (
              <div>
                <p>INDETERMINATO (Storia di malignità SENZA caratteristiche aggressive)</p>
                <p className="bg-green-100 p-2 rounded-xl">Bone-RADS 3: OR Bone-RADS 2: Considerare scansione ossea o PET per cercare ulteriori lesioni e MRI per ulteriori caratterizzazioni</p>
              </div>
            )}
            {step === 4 && (
                <div>
                  <p>Densità media da -120 a -30 HU o grasso visibile?</p>
                  <Button className="bg-green-500 mx-1" onClick={() => handleMeanDensityResponse(true)}>Sì</Button>
                  <Button className="bg-red-500" onClick={() => handleMeanDensityResponse(false)}>No</Button>
                </div>
              )}
              {step === 5 && (
                <div>
                  <p>È completamente coerente con:</p>
                  <ul>
                    <li>displasia fibrosa</li>
                    <li>fibroma non ossificante</li>
                    <li>enchondroma</li>
                    <li>cisti subcondrale</li>
                    <li>emangioma?</li>
                  </ul>
                  <Button className="bg-green-500 mx-1" onClick={() => handleConsistencyResponse(true)}>Sì</Button>
                  <Button className="bg-red-500" onClick={() => handleConsistencyResponse(false)}>No</Button>
                </div>
              )}
              {step === 6 && (
                <div>
                  <p>Per lesione basata corticalmente, è chiaramente coerente con:</p>
                  <ul>
                    <li>osteoma osteoide, osteoblastoma, metastasi corticale</li>
                    <li>Per lesione cistica basata sul midollo, è chiaramente coerente con:</li>
                    <li>cisti ossea aneurismatica, cisti ossea semplice, tumore a cellule giganti, condroblastoma, chondrosarcoma a cellule chiare, mieloma, metastasi</li>
                  </ul>
                  <Button className="bg-green-500 mx-1" onClick={() => handleLesionResponse(true)}>Sì</Button>
                  <Button className="bg-red-500" onClick={() => handleLesionResponse(false)}>No</Button>
                </div>
              )}
              {step.toString().startsWith('Bone-RADS') && <p>{step}</p>}
              </Card>
            </div>
          ))}
        </div>
        <div>
           <div className="text-4xl">→</div>
        </div>
        {result && (
          <div className="ml-6 flex flex-col items-center">
            <Card className="p-4 rounded-xl bg-green-100" style={{ width: 'fit-content', minHeight: '200px' }}>
              <p>{result}</p>
              {/* Puoi aggiungere qui ulteriori informazioni sul risultato */}
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default Bone_RADS_Calculator;