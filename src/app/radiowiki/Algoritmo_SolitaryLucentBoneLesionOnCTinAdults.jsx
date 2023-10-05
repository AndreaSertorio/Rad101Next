import React, { useState } from 'react';
import { Button } from 'antd';
import 'tailwindcss/tailwind.css';
import { YesButton, NoButton, StandardCard, FinalCard, InitialCard } from './componenti_algoritmi';

const Algoritmo_SolitaryLucentBoneLesionOnCTinAdults = () => {
 const [steps, setSteps] = useState([1]);
    const [result, setResult] = useState(null);
const [buttonsHidden, setButtonsHidden] = useState(new Array(steps.length).fill(false));

    
    const handleButtonClick = (stepIndex, responseHandler) => (response) => {
    responseHandler(response);
    const newButtonsHidden = [...buttonsHidden];
    newButtonsHidden[stepIndex] = true;
    setButtonsHidden(newButtonsHidden);
    };

    const addStep = (newStep) => {
    setSteps([...steps, newStep]);
    setButtonsHidden([...buttonsHidden, false]);
    };
const handleAggressiveFeaturesResponse = (response) => {
  if (response) {
    setResult(
      <>
        <p><strong>Bone-RADS 4:</strong> Considerare metastasi, mieloma, granuloma eosinofilo, infezione</p>
      </>
    );
  } else {
    addStep(2);
  }
};

const handleHistoryOfMalignancyResponse = (response) => {
  if (response) {
    setResult(
      <>
        <p><strong>INDETERMINATO (Storia di malignità SENZA caratteristiche aggressive)</strong></p>
        <p><strong>Bone-RADS 3:</strong></p>
        <p>OR</p>
        <p><strong>Bone-RADS 2:</strong> Considerare scansione ossea o PET per cercare ulteriori lesioni e MRI per ulteriori caratterizzazioni</p>
      </>
    );
  } else {
    addStep(3);
  }
};

const handleMeanDensityResponse = (response) => {
  if (response) {
    setResult(
      <>
        <p><strong>Bone-RADS 1:</strong> Considerare lipoma intraosseo.</p>
      </>
    );
  } else {
    addStep(4);
  }
};

const handleConsistencyResponse = (response) => {
  if (response) {
    setResult(
      <>
        <p><strong>Bone-RADS 1</strong></p>
      </>
    );
  } else {
    addStep(5);
  }
};

const handleLesionResponse = (response) => {
  if (response) {
    setResult(
      <>
        <p><strong>Bone-RADS 4</strong></p>
      </>
    );
  } else {
    setResult(
      <>
        <p><strong>Bone-RADS 2 OR 3</strong></p>
      </>
    );
  }
};


    const resetAlgorithm = () => {
    setSteps([1]);
    setResult(null);
    setButtonsHidden(new Array(steps.length).fill(false));
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
            {step === 1 ? (
              <InitialCard>
                <p style={{ fontWeight: 'bold' }}>Ci sono caratteristiche aggressive?</p>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px', lineHeight: '1.5' }}>
                    <li>Dolore attribuibile alla lesione</li>
                    <li>Coinvolgimento corticale</li>
                    <li>Estensione del tessuto molle</li>
                    <li>Frattura patologica</li>
                    <li>Reazione periostale aggressiva</li>
                    </ul>
                {!buttonsHidden[index] && (
                  <div>
                    <YesButton color="green" onClick={() => handleButtonClick(index, handleAggressiveFeaturesResponse)(true)}>Sì</YesButton>
                    <NoButton color="red" onClick={() => handleButtonClick(index, handleAggressiveFeaturesResponse)(false)}>No</NoButton>
                  </div>
                )}
              </InitialCard>
            ) : (
              <StandardCard>
                {step === 2 && (
                  <div>
                    <p>Storia di malignità con propensione alle metastasi ossee?</p>
                    {!buttonsHidden[index] && (
                      <div>
                        <YesButton color="green" onClick={() => handleButtonClick(index, handleHistoryOfMalignancyResponse)(true)}>Sì</YesButton>
                        <NoButton color="red" onClick={() => handleButtonClick(index, handleHistoryOfMalignancyResponse)(false)}>No</NoButton>
                      </div>
                    )}
                  </div>
                )}
                {step === 3 && (
                  <div>
                    <p>Densità media da -120 a -30 HU o grasso visibile?</p>
                    {!buttonsHidden[index] && (
                      <div>
                        <YesButton color="green" onClick={() => handleButtonClick(index, handleMeanDensityResponse)(true)}>Sì</YesButton>
                        <NoButton color="red" onClick={() => handleButtonClick(index, handleMeanDensityResponse)(false)}>No</NoButton>
                      </div>
                    )}
                  </div>
                )}
                {step === 4 && (
                  <div>
                    <p>È completamente coerente con:</p>
                    <ul>
                      <li>displasia fibrosa</li>
                      <li>fibroma non ossificante</li>
                      <li>enchondroma</li>
                      <li>cisti subcondrale</li>
                      <li>emangioma?</li>
                    </ul>
                    {!buttonsHidden[index] && (
                      <div>
                        <YesButton color="green" onClick={() => handleButtonClick(index, handleConsistencyResponse)(true)}>Sì</YesButton>
                        <NoButton color="red" onClick={() => handleButtonClick(index, handleConsistencyResponse)(false)}>No</NoButton>
                      </div>
                    )}
                  </div>
                )}
                {step === 5 && (
                  <div>
                    <p>Per lesione basata corticalmente, è chiaramente coerente con:</p>
                    <ul>
                      <li>osteoma osteoide, osteoblastoma, metastasi corticale</li>
                      <li>Per lesione cistica basata sul midollo, è chiaramente coerente con:</li>
                      <li>cisti ossea aneurismatica, cisti ossea semplice, tumore a cellule giganti, condroblastoma, chondrosarcoma a cellule chiare, mieloma, metastasi</li>
                    </ul>
                    {!buttonsHidden[index] && (
                      <div>
                        <YesButton color="green" onClick={() => handleButtonClick(index, handleLesionResponse)(true)}>Sì</YesButton>
                        <NoButton color="red" onClick={() => handleButtonClick(index, handleLesionResponse)(false)}>No</NoButton>
                      </div>
                    )}
                  </div>
                )}
              </StandardCard>
            )}
          </div>
        ))}
      </div>
      {result && (
        <div>
          <div className="text-4xl">→</div>
        </div>
      )}
      {result && (
        <div className="ml-6 flex flex-col items-center">
          <FinalCard>
            <p>{result}</p>
            {/* Puoi aggiungere qui ulteriori informazioni sul risultato */}
          </FinalCard>
        </div>
      )}
    </div>
  </div>
);
};

export default Algoritmo_SolitaryLucentBoneLesionOnCTinAdults;
