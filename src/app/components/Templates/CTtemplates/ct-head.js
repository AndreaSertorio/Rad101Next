const ctHead = {
    id: 'ct-head',
    sections: [
        {
            id: 'Parenchima_Cerebrale',
            title: 'PARENCHIMA CEREBRALE',
            description: 'Descrizione dell\'integrità e simmetria della sostanza grigia corticale.',
            rows: [
                {
                    id: 'Corteccia_Cerebrale',
                    title: 'CORTECCIA CEREBRALE',
                    description: 'Descrizione dell\'integrità e simmetria della sostanza grigia corticale.'
                },
                {
                    id: 'Sostanza_Bianca',
                    title: 'SOSTANZA BIANCA',
                    description: 'Descrizione della sostanza bianca, segni di leucodistrofia o lesioni ipodense.'
                },
                {
                    id: 'Volumi_Cerebrali',
                    title: 'VOLUMI CEREBRALI',
                    description: 'Descrizione del volume generale del cervello, eventuali segni di atrofia cerebrale o di un aumento del volume cerebrale.',
                    rows: [
                        {
                            id: 'Volumi_Lobi_Cerebrali',
                            title: 'LOBI CEREBRALI',
                            rows: [
                                {
                                    id: 'Lobi_Frontali',
                                    title: 'Lobi Frontali',
                                    description: 'Descrizione del volume e della simmetria dei lobi frontali, eventuali segni di atrofia o di espansione.',
                                },
                                {
                                    id: 'Lobi_Temporali',
                                    title: 'Lobi Temporali',
                                    description: 'Descrizione del volume e della simmetria dei lobi temporali, eventuali segni di atrofia o di espansione.',
                                },
                                {
                                    id: 'Lobi_Parietali',
                                    title: 'Lobi Parietali',
                                    description: 'Descrizione del volume e della simmetria dei lobi parietali, eventuali segni di atrofia o di espansione.',
                                },
                                {
                                    id: 'Lobi_Occipitali',
                                    title: 'Lobi Occipitali',
                                    description: 'Descrizione del volume e della simmetria dei lobi occipitali, eventuali segni di atrofia o di espansione.',
                                },
                            ],
                        },
                        {
                            id: 'Volumi_Rimanenti_Strutture_Cerebrali',
                            title: 'RIMANENTI STRUTTURE',
                            rows: [
                                {
                                    id: 'Gangli_della_Base',
                                    title: 'Gangli della Base',
                                    description: 'Descrizione del volume dei gangli della base, eventuali segni di atrofia o di espansione.',
                                },
                                {
                                    id: 'Talamo',
                                    title: 'Talamo',
                                    description: 'Descrizione del volume del talamo, eventuali segni di atrofia o di espansione.',
                                },
                                {
                                    id: 'Cervelletto',
                                    title: 'Cervelletto',
                                    description: 'Descrizione del volume del cervelletto, eventuali segni di atrofia o di espansione.',
                                },
                                {
                                    id: 'Tronco_Encefalico',
                                    title: 'Tronco Encefalico',
                                    description: 'Descrizione del volume del tronco encefalico, eventuali segni di atrofia o di espansione.',
                                },
                            ],
                        },
                    ],
                },
                {
                    id: 'Strutture_Mediane',
                    title: 'STRUTTURE MEDIANE',
                    rows: [
                        {
                            id: 'Gangli_della_Base',
                            title: 'Gangli della Base',
                            description: 'Descrizione dei gangli della base, inclusi nucleo caudato, putamen e globo pallido.',
                        },
                        {
                            id: 'Talamo',
                            title: 'Talamo',
                            description: 'Descrizione dei talami, simmetria e densità.',
                        },
                        {
                            id: 'Ippocampi',
                            title: 'Ippocampi',
                            description: 'Descrizione degli ippocampi, segni di atrofia o anomalie della densità.',
                        },
                        {
                            id: 'Fornice_Corpi_Mammillari',
                            title: 'Fornice e Corpi Mammillari',
                            description: 'Descrizione del fornice e dei corpi mammillari.',
                        },
                        {
                            id: 'Corpo_Calloso',
                            title: 'Corpo Calloso',
                            description: 'Descrizione del corpo calloso, eventuali segni di agenesia, disgenesia o lesioni.',
                        },
                    ],
                },
                {
                    id: 'Ischemia_Cerebrale',
                    title: 'ISCHEMIA',
                    rows: [
                        {
                            id: 'Infarto_Acuto',
                            title: 'Infarto Acuto',
                            description: 'Descrizione dell\'infarto acuto, se presente.',
                        },
                        {
                            id: 'Infarto_Cronico',
                            title: 'Infarto Cronico',
                            description: 'Descrizione dell\'infarto cronico, se presente.',
                        },
                        {
                            id: 'Localizzazione',
                            title: 'Localizzazione',
                            description: 'Descrizione della localizzazione dell\'area ischemica.',
                        },
                        {
                            id: 'Estensione',
                            title: 'Estensione',
                            description: 'Descrizione dell\'estensione dell\'area ischemica.',
                        },
                        {
                            id: 'Effetto_Massa',
                            title: 'Effetto Massa',
                            description: 'Descrizione dell\'effetto massa sulla strutture vicine, se presente.',
                        },
                        {
                            id: 'Malattia_Cronica_Piccole_Vie_Vascolari',
                            title: 'Malattia Cronica delle Piccole Vie Vascolari',
                            description: 'Descrizione della presenza di malattia cronica delle piccole vie vascolari.',
                        },
                        {
                            id: 'Microemorragie_Cerebrali',
                            title: 'Microemorragie Cerebrali',
                            description: 'Descrizione della presenza di microemorragie cerebrali.',
                        },
                        {
                            id: 'Commenti_Aggiuntivi',
                            title: 'Commenti Aggiuntivi',
                            description: 'Qualsiasi altra osservazione rilevante sull\'ischemia.',
                        },
                    ],
                },
                {
                    id: 'Massa_Cerebrale',
                    title: 'MASSA',
                    rows: [
                        {
                            id: 'Posizione',
                            title: 'Posizione',
                            description: 'Descrizione della posizione della massa.',
                        },
                        {
                            id: 'Dimensioni',
                            title: 'Dimensioni',
                            description: 'Descrizione delle dimensioni della massa.',
                        },
                        {
                            id: 'Prendita_Contrasto',
                            title: 'Prendita di Contrasto',
                            description: 'Descrizione della capacità della massa di prendere contrasto.',
                        },
                        {
                            id: 'Effetto_Massa',
                            title: 'Effetto Massa',
                            description: 'Descrizione dell\'effetto massa sulla strutture vicine.',
                        },
                        {
                            id: 'Densita_Composizione',
                            title: 'Densità/Composizione',
                            description: 'Descrizione della densità e composizione interna della massa, inclusi eventuali segni di emorragia o altre caratteristiche.',
                        },
                        {
                            id: 'Commenti_Aggiuntivi',
                            title: 'Commenti Aggiuntivi',
                            description: 'Qualsiasi altra osservazione rilevante sulla massa.',
                        },
                    ],
                },
            ]
        },

        {
            id: 'Shift_Linea_Mediana',
            title: 'SHIFT DELLA LINEA MEDIANA',
            rows: [
                {
                    id: 'Identificazione',
                    title: 'Identificazione',
                    description: 'Descrizione dell\'identificazione della linea mediana del cranio.',
                },
                {
                    id: 'Misurazione',
                    title: 'Misurazione',
                    description: 'Descrizione della misurazione della distanza tra la linea mediana del cranio e la linea mediana del terzo ventricolo o del corpo calloso.',
                },
                {
                    id: 'Causa',
                    title: 'Causa',
                    description: 'Descrizione della causa dello spostamento della linea mediana.',
                },
                {
                    id: 'Parenchima_Cerebrale',
                    title: 'Parenchima Cerebrale',
                    description: 'Descrizione del parenchima cerebrale, eventuali segni di ipodensità o iperdensità osservata.',
                },
                {
                    id: 'Strutture_Adiacenti',
                    title: 'Strutture Adiacenti',
                    description: 'Descrizione delle strutture adiacenti, eventuali segni di compressione o spostamento del ventricolo laterale o del terzo ventricolo.',
                },
                {
                    id: 'Fossa Posteriore',
                    title: 'Fossa Posteriore',
                    description: 'Descrizione della fossa posteriore, eventuali segni di edema cerebellare o di ematoma che potrebbe causare un effetto di massa.',
                },
                {
                    id: 'Gravita',
                    title: 'Gravità',
                    description: 'Descrizione dello spostamento della linea mediana osservato.',
                },
            ],
        },
        {
            id: 'Tronco_Encefalico',
            title: 'TRONCO ENCEFALICO',
            rows: [
                {
                    id: 'Mesencefalo',
                    title: 'Mesencefalo (Midbrain)',
                    description: 'Descrizione del mesencefalo, incluse le strutture come i collicoli superiori e inferiori, sostanza nera e acquedotto cerebrale.',
                },
                {
                    id: 'Ponte',
                    title: 'Ponte (Pons)',
                    description: 'Descrizione del ponte, comprese le sue fibre trasversali e longitudiali e il quarto ventricolo.',
                },
                {
                    id: 'Bulbo',
                    title: 'Bulbo (Medulla Oblongata)',
                    description: 'Descrizione del bulbo, incluse le piramidi e l\'oliva, nonché la continuità con il midollo spinale.',
                },
            ],
        },
        {
            id: 'Cervelletto',
            title: 'CERVELLETTO',
            rows: [
                {
                    id: 'Emisferi_Cerebellari',
                    title: 'Emisferi Cerebellari',
                    description: 'Descrizione della simmetria, morfologia e densità dei due emisferi cerebellari.',
                },
                {
                    id: 'Verme_Cerebellare',
                    title: 'Verme Cerebellare',
                    description: 'Descrizione del verme cerebellare, comprese le sue dimensioni e densità.',
                },
                {
                    id: 'Fossa_Posteriore',
                    title: 'Fossa Posteriore',
                    description: 'Descrizione dello spazio della fossa posteriore, eventuali segni di ipertensione intracranica o idrocefalo.',
                },
                {
                    id: 'IV_Ventricolo',
                    title: 'IV VENTRICOLO',
                    description: 'Descrizione del quarto ventricolo, compresa la sua posizione, dimensioni e eventuali segni di dilatazione o compressione.',
                },
            ],
        },
        {
            id: 'Ventricoli_SpaziSubAracnoidei',
            title: 'VENTRICOLI E SPAZI SUBARACNOIDEI',
            rows: [
                {
                    id: 'Ventricoli_Laterali',
                    title: 'Ventricoli Laterali',
                    description: 'Dimensioni, forma e simmetria normali. Nessun segno di dilatazione o asimmetria.',
                },
                {
                    id: 'III_Ventricolo',
                    title: 'III VENTRICOLO',
                    description: 'Normale. Nessun segno di dilatazione.',
                },
                {
                    id: 'IV_Ventricolo',
                    title: 'IV VENTRICOLO',
                    description: 'Normale. Nessun segno di dilatazione.',
                },
                {
                    id: 'Sistema_Seni_Venosi',
                    title: 'SISTEMA DEI SENI VENOSI',
                    description: 'Normale. Nessun segno di anomalie o trombosi.',
                },
                {
                    id: 'Cisterne_Base_SpaziSubaracnoidei',
                    title: 'CISTERNE DELLA BASE E SPAZI SUBARACNOIDEI',
                    description: 'Normali. Nessun segno di sanguinamento o aumento di spazio.',
                },
                {
                    id: 'Spazio_Subdurale_Epidurale',
                    title: 'SPAZIO SUBDURALE E EPIDURALE',
                    description: 'Normale. Nessun segno di raccolta fluida o emorragia.',
                },
            ],
        },
        {
            id: 'Strutture_Extracraniche',
            title: 'STRUTTURE EXTRACRANICHE',
            rows: [
                {
                    id: 'Pelle_Cuoio_Capelluto',
                    title: 'Pelle e Cuoio Capelluto',
                    description: 'Normale',
                },
                {
                    id: 'Muscoli_Cranici',
                    title: 'Muscoli Cranici',
                    description: 'Normale',
                },
                {
                    id: 'Ghiandole_Salivari',
                    title: 'Ghiandole Salivari',
                    description: 'Normale',
                },
                {
                    id: 'Seni_Paranasali',
                    title: 'Seni Paranasali',
                    description: 'Normale',
                },
                {
                    id: 'Regione_Orbitaria',
                    title: 'Regione Orbitaria',
                    description: 'Normale',
                },
            ],
        },
        {
            id: 'Ossa_Craniche',
            title: 'OSSA CRANICHE',
            rows: [
                {
                    id: 'Osso_Frontale',
                    title: 'Osso Frontale',
                    description: 'Normale',
                },
                {
                    id: 'Ossa_Parietali',
                    title: 'Ossa Parietali',
                    description: 'Normale',
                },
                {
                    id: 'Ossa_Temporali',
                    title: 'Ossa Temporali',
                    description: 'Normale',
                },
                {
                    id: 'Osso_Occipitale',
                    title: 'Osso Occipitale',
                    description: 'Normale',
                },
                {
                    id: 'Fossa_Cranica',
                    title: 'Fossa Cranica Anteriore, Media e Posteriore',
                    description: 'Normale',
                },
                {
                    id: 'Base_Cranio',
                    title: 'Base del Cranio',
                    description: 'Normale',
                },
                {
                    id: 'Sutura_Cranica',
                    title: 'Sutura Cranica',
                    description: 'Normale',
                },
                {
                    id: 'Valutazione_Finale_Osseo_Cranico',
                    title: 'Valutazione Finale dell\'Osseo Cranico',
                    description: 'Normale',
                },
            ],
        },
        {
            id: 'AngioTC_Vascolarizzazione',
            title: 'AngioTC - Vascolarizzazione',
            rows: [
                {
                    id: 'Arterie_Carotidi',
                    title: 'Arterie Carotidi',
                    rows: [
                        {
                            id: 'Carotidi_Comuni',
                            title: 'Carotidi Comuni',
                            rows: [
                                {
                                    id: 'Sinistra',
                                    title: 'Sinistra',
                                    description: 'Permeabile.',
                                },
                                {
                                    id: 'Destra',
                                    title: 'Destra',
                                    description: 'Permeabile.',
                                },
                            ],
                        },
                        {
                            id: 'Carotidi_Interne',
                            title: 'Carotidi Interne',
                            rows: [
                                {
                                    id: 'Sinistra',
                                    title: 'Sinistra',
                                    description: 'Permeabile.',
                                },
                                {
                                    id: 'Destra',
                                    title: 'Destra',
                                    description: 'Permeabile.',
                                },
                            ],
                        },
                        {
                            id: 'Carotidi_Esterne',
                            title: 'Carotidi Esterne',
                            rows: [
                                {
                                    id: 'Sinistra',
                                    title: 'Sinistra',
                                    description: 'Permeabile.',
                                },
                                {
                                    id: 'Destra',
                                    title: 'Destra',
                                    description: 'Permeabile.',
                                },
                            ],
                        },
                    ],
                },
                {
                    id: 'Circolo_Willis',
                    title: 'Circolo di Willis',
                    rows: [
                        {
                            id: 'Arteria_Cerebrale_Anteriore',
                            title: 'Arteria cerebrale anteriore',
                            description: 'Permeabile.',
                        },
                        {
                            id: 'Arteria_Comunicante_Anteriore',
                            title: 'Arteria comunicante anteriore',
                            description: 'Permeabile.',
                        },
                        {
                            id: 'Arteria_Cerebrale_Media',
                            title: 'Arteria cerebrale media',
                            description: 'Permeabile.',
                        },
                        {
                            id: 'Arteria_Cerebrale_Posteriore',
                            title: 'Arteria cerebrale posteriore',
                            description: 'Permeabile.',
                        },
                        {
                            id: 'Arteria_Comunicante_Posteriore',
                            title: 'Arteria comunicante posteriore',
                            description: 'Permeabile.',
                        },
                    ],
                },
                {
                    id: 'Circolo_Posteriore',
                    title: 'Circolo Posteriore',
                    rows: [
                        {
                            id: 'Arterie_Vertebrali',
                            title: 'Arterie Vertebrali',
                            rows: [
                   {
                                    id: 'Sinistra',
                                    title: 'Sinistra',
                                    description: 'Permeabile.',
                                },
                                {
                                    id: 'Destra',
                                    title: 'Destra',
                                    description: 'Permeabile.',
                                },
                            ],
                        },
                        {
                            id: 'Arterie_Basilari',
                            title: 'Arterie Basilari',
                            rows: [
                                {
                                    id: 'Basilaris',
                                    title: 'Basilaris',
                                    description: 'Permeabile.',
                                },
                            ],
                        },
                        {
                            id: 'PICA',
                            title: 'PICA',
                            rows: [
                                {
                                    id: 'Sinistra',
                                    title: 'Sinistra',
                                    description: 'Permeabile.',
                                },
                                {
                                    id: 'Destra',
                                    title: 'Destra',
                                    description: 'Permeabile.',
                                },
                            ],
                        },
                        {
                            id: 'AICA',
                            title: 'AICA',
                            rows: [
                                {
                                    id: 'Sinistra',
                                    title: 'Sinistra',
                                    description: 'Permeabile.',
                                },
                                {
                                    id: 'Destra',
                                    title: 'Destra',
                                    description: 'Permeabile.',
                                },
                            ],
                        },
                    ],
                },
                {
                    id: 'Seni_Venosi',
                    title: 'Seni Venosi della Dura Madre',
                    rows: [
                        {
                            id: 'Seni_Sagittale_Superiore',
                            title: 'Seni sagittale superiore',
                            description: 'Permeabile.',
                        },
                        {
                            id: 'Seni_Sagittale_Inferiore',
                            title: 'Seni sagittale inferiore',
                            description: 'Permeabile.',
                        },
                        {
                            id: 'Seni_Trasverso',
                            title: 'Seni trasverso',
                            description: 'Permeabile.',
                        },
                        {
                            id: 'Seni_Sigmoideo',
                            title: 'Seni sigmoideo',
                            description: 'Permeabile.',
                        },
                        {
                            id: 'Seni_Cavernoso',
                            title: 'Seni cavernoso',
                            description: 'Permeabile.',
                        },
                    ],
                },
                {
                    id: 'Vene_Giugulari',
                    title: 'Vene Giugulari',
                    rows: [
                        {
                            id: 'Vene_Giugulari_Interne',
                            title: 'Vene Giugulari interne',
                            description: 'Permeabile.',
                        },
                        {
                            id: 'Vene_Giugulari_Esterne',
                            title: 'Vene Giugulari esterne',
                            description: 'Permeabile.',
                        },
                    ],
                },
            ],
        },
        {
            id: 'Altri_Risultati',
            title: 'ALTRI RISULTATI',
            rows: [
                {
                    id: 'Commenti_Aggiuntivi',
                    title: 'Commenti Aggiuntivi',
                    description: 'Eventuali ulteriori osservazioni',
                },
            ],
        },

    ],
};

export default ctHead;