const bicycles = [
    {
        name: 'salsa-vaya-2017-55',
        model: 'Vaya',
        year: 2017,
        brand: 'Salsa',
        size: '55cm',
        measures: {
            rimDiameter: 622,
            // 700c x 41mm
            wheelDiameter: 709,
            chainStayLength: 450,
            bbDrop: 75,
            seatTubeLength: 510,
            seatTubeAngle: 73,
            wheelbase: 1038.9,
            headTubeLength: 165,
            headTubeAngle: 71.5,
            forkLength: 405,
            forkOffset: 50,
            topTubeEffectiveLength: 550,
            stack: 609.1,
            reach: 363.8,
            headsetBottomHeight: 12
        }
    }, {
        name: 'salsa-vaya-2017-57',
        model: 'Vaya',
        year: 2017,
        brand: 'Salsa',
        size: '57cm',
        measures: {
            rimDiameter: 622,
            // 700c x 41mm
            wheelDiameter: 709,
            chainStayLength: 450,
            bbDrop: 75,
            seatTubeLength: 530,
            seatTubeAngle: 72.5,
            wheelbase: 1053.5,
            headTubeLength: 185,
            headTubeAngle: 71.5,
            forkLength: 405,
            forkOffset: 50,
            topTubeEffectiveLength: 570,
            stack: 628,
            reach: 372,
            headsetBottomHeight: 12
        }
    }, {
        name: 'specialized-sequoia-2017-56',
        model: 'Sequoia',
        year: 2017,
        brand: 'Specialized',
        size: '56cm',
        measures: {
            rimDiameter: 622,
            // 700c x 42mm
            wheelDiameter: 716,
            chainStayLength: 435.1,
            bbDrop: 66.5,
            bbHeight: 292.5,
            seatTubeLength: 500,
            seatTubeAngle: 73.5,
            wheelbase: 1053,
            headTubeLength: 150,
            headTubeAngle: 71.5,
            forkLength: 400,
            forkOffset: 50,
            forkTrail: 67,
            stack: 584,
            reach: 396.9,
            centerFront: 626,
            topTubeEffectiveLength: 570,
            headsetBottomHeight: 16
        }
    }, {
        name: 'specialized-sequoia-2017-54',
        model: 'Sequoia',
        year: 2017,
        brand: 'Specialized',
        size: '54cm',
        measures: {
            rimDiameter: 622,
            // 700c x 42mm
            wheelDiameter: 716,
            chainStayLength: 435.2,
            bbDrop: 67,
            bbHeight: 292,
            seatTubeLength: 480,
            seatTubeAngle: 74,
            wheelbase: 1037,
            headTubeLength: 130,
            headTubeAngle: 71.5,
            forkLength: 400,
            forkOffset: 50,
            forkTrail: 67,
            stack: 566,
            reach: 387.8,
            centerFront: 611,
            topTubeEffectiveLength: 550,
            headsetBottomHeight: 16
        }
    }, {
        name: 'genesis-croix-de-fer-2017-M',
        model: 'Croix de fer',
        year: 2017,
        brand: 'Genesis',
        size: 'M',
        measures: {
            rimDiameter: 622,
            // 700c x 35mm
            wheelDiameter: 708,
            chainStayLength: 430.0,
            bbDrop: 73,
            seatTubeLength: 530,
            seatTubeAngle: 73.5,
            wheelbase: 1035,
            headTubeLength: 155,
            headTubeAngle: 71.5,
            forkLength: 400,
            forkOffset: 50,
            forkTrail: 66,
            stack: 591,
            reach: 385,
            headsetBottomHeight: 11
        }
    }, {
        name: 'genesis-croix-de-fer-2016-L',
        model: 'Croix de fer',
        year: 2016,
        brand: 'Genesis',
        size: 'L',
        measures: {
            rimDiameter: 622,
            // 700c x 35mm
            wheelDiameter: 708,
            chainStayLength: 430.0,
            bbDrop: 73,
            seatTubeLength: 530,
            seatTubeAngle: 73,
            wheelbase: 1052,
            headTubeLength: 175,
            headTubeAngle: 71.5,
            forkLength: 400,
            forkOffset: 50,
            forkTrail: 66,
            stack: 610,
            reach: 395,
            headsetBottomHeight: 11
        }
    }, {
        name: 'specialized-awol-2017-M',
        model: 'Awol',
        year: 2017,
        brand: 'Specialized',
        size: 'M',
        measures: {
            rimDiameter: 622,
            // 700c x 42mm
            wheelDiameter: 730,
            chainStayLength: 455,
            bbDrop: 70,
            bbHeight: 295.5,
            seatTubeLength: 495,
            seatTubeAngle: 73.5,
            wheelbase: 1072,
            headTubeLength: 185,
            headTubeAngle: 72,
            forkLength: 405,
            forkOffset: 50,
            forkTrail: 66,
            stack: 617,
            reach: 392,
            centerFront: 626,
            topTubeEffectiveLength: 575,
            headsetBottomHeight: 5
        }
    }, {
        name: 'specialized-awol-2017-L',
        model: 'Awol',
        year: 2017,
        brand: 'Specialized',
        size: 'L',
        measures: {
            rimDiameter: 622,
            // 700c x 42mm
            wheelDiameter: 730,
            chainStayLength: 455,
            bbDrop: 70,
            bbHeight: 295.5,
            seatTubeLength: 525,
            seatTubeAngle: 73,
            wheelbase: 1091,
            headTubeLength: 210,
            headTubeAngle: 72,
            forkLength: 405,
            forkOffset: 50,
            forkTrail: 66,
            stack: 640,
            reach: 404,
            centerFront: 646,
            topTubeEffectiveLength: 600,
            headsetBottomHeight: 5
        }
    }, {
        name: 'all-city-space-horse-disc-2017-55',
        model: 'Space Horse Disc',
        year: 2017,
        brand: 'All City',
        size: '55cm',
        measures: {
            rimDiameter: 622,
            // 700c x 42mm
            wheelDiameter: 708,
            chainStayLength: 440,
            bbDrop: 75,
            seatTubeLength: 540,
            seatTubeAngle: 73,
            wheelbase: 1032.8,
            headTubeLength: 150,
            headTubeAngle: 72,
            forkLength: 395,
            forkOffset: 47,
            stack: 589,
            reach: 379,
            topTubeEffectiveLength: 560,
            headsetBottomHeight: 12
        }
    }, {
        name: 'soma-wolverine-2017-56',
        model: 'Wolverine',
        year: 2017,
        brand: 'Soma',
        size: '56cm',
        measures: {
            rimDiameter: 622,
            // 700c x 42mm
            wheelDiameter: 708,
            // 425 to 446
            chainStayLength: 425,
            bbDrop: 70,
            seatTubeLength: 560,
            seatTubeAngle: 73.5,
            wheelbase: 1040,
            headTubeLength: 140,
            headTubeAngle: 72,
            forkLength: 400,
            forkOffset: 50,
            stack: 578,
            reach: 404,
            centerFront: 625,
            topTubeEffectiveLength: 575,
            headsetBottomHeight: 12
        }
    }, {
        name: 'soma-wolverine-2017-54',
        model: 'Wolverine',
        year: 2017,
        brand: 'Soma',
        size: '54cm',
        measures: {
            rimDiameter: 622,
            // 700c x 42mm
            wheelDiameter: 716,
            // 425 to 446
            chainStayLength: 425,
            bbDrop: 70,
            seatTubeLength: 540,
            seatTubeAngle: 73.5,
            wheelbase: 1035,
            headTubeLength: 130,
            headTubeAngle: 71.5,
            forkLength: 400,
            forkOffset: 50,
            stack: 566,
            reach: 395,
            centerFront: 620,
            topTubeEffectiveLength: 565,
            headsetBottomHeight: 12
        }
    }, {
        name: 'colossi-dnjos-rambler-v2-55',
        model: "D'N Jos Rambler",
        year: 2017,
        brand: 'Colossi',
        size: '55cm',
        measures: {
            rimDiameter: 622,
            // 700c x 42mm
            wheelDiameter: 716,
            chainStayLength: 425,
            bbDrop: 65,
            seatTubeLength: 550,
            seatTubeAngle: 73.5,
            wheelbase: 1001.8,
            headTubeLength: 125,
            headTubeAngle: 72,
            forkLength: 400,
            forkOffset: 55,
            centerFront: 585,
            headsetBottomHeight: 12
        }
    }, {
        name: 'surly-straggler-2017-54',
        model: 'Straggler',
        year: 2017,
        brand: 'Surly',
        size: '54cm',
        measures: {
            rimDiameter: 622,
            wheelDiameter: 718,
            chainStayLength: 425,
            bbDrop: 72,
            seatTubeLength: 540,
            seatTubeAngle: 73,
            wheelbase: 1016.5,
            headTubeLength: 107,
            headTubeAngle: 72,
            forkLength: 400,
            forkOffset: 44,
            stack: 549.2,
            reach: 396.3,
            topTubeLength: 563.3,
            topTubeEffectiveLength: 565,
            headsetBottomHeight: 12
        }
    }, {
        name: 'surly-straggler-2017-56',
        model: 'Straggler',
        year: 2017,
        brand: 'Surly',
        size: '56cm',
        measures: {
            rimDiameter: 622,
            wheelDiameter: 718,
            chainStayLength: 430,
            bbDrop: 72,
            seatTubeLength: 560,
            seatTubeAngle: 72.5,
            wheelbase: 1031.9,
            headTubeLength: 121,
            headTubeAngle: 72,
            forkLength: 400,
            forkOffset: 44,
            stack: 567.3,
            reach: 400.7,
            topTubeLength: 579.7,
            topTubeEffectiveLength: 580,
            headsetBottomHeight: 12
        }
    }, {
        name: 'rawland-ravn-2017-56',
        model: 'Ravn',
        year: 2017,
        brand: 'Rawland',
        size: '56cm',
        measures: {
            rimDiameter: 622,
            wheelDiameter: 670,
            chainStayLength: 430,
            bbDrop: 61,
            bbHeight: 272,
            seatTubeLength: 518,
            seatTubeAngle: 73,
            wheelbase: 1039,
            headTubeLength: 150,
            headTubeAngle: 73,
            forkLength: 408,
            forkOffset: 69,
            forkTrail: 30,
            stack: 580,
            reach: 383,
            topTubeEffectiveLength: 560,
            headsetBottomHeight: 12
        }
    }, {
        name: 'rawland-ravn-2017-58',
        model: 'Ravn',
        year: 2017,
        brand: 'Rawland',
        size: '58cm',
        measures: {
            rimDiameter: 622,
            wheelDiameter: 670,
            chainStayLength: 430,
            bbDrop: 61,
            bbHeight: 272,
            seatTubeLength: 562,
            seatTubeAngle: 72.5,
            wheelbase: 1054,
            headTubeLength: 171,
            headTubeAngle: 73,
            forkLength: 408,
            forkOffset: 69,
            forkTrail: 30,
            stack: 600,
            reach: 391,
            topTubeEffectiveLength: 580,
            headsetBottomHeight: 12
        }
    }, {
        name: 'rawland-ulv-2017-58',
        model: 'Ulv',
        year: 2017,
        brand: 'Rawland',
        size: '58cm',
        measures: {
            rimDiameter: 622,
            wheelDiameter: 720,
            chainStayLength: 460,
            bbDrop: 91,
            bbHeight: 277,
            seatTubeLength: 518,
            seatTubeAngle: 73.5,
            wheelbase: 1091,
            headTubeLength: 126,
            headTubeAngle: 73,
            forkLength: 420,
            forkOffset: 79,
            forkTrail: 30,
            stack: 610,
            reach: 399,
            topTubeEffectiveLength: 580,
            headsetBottomHeight: 12
        }
    }, {
        name: 'specialized-source-elite-disc-2014-LG',
        model: 'Source Elite Disc',
        year: 2014,
        brand: 'Specialized',
        size: 'LG',
        measures: {
            rimDiameter: 622,
            wheelDiameter: 705,
            chainStayLength: 445,
            bbDrop: 70,
            seatTubeLength: 530,
            seatTubeAngle: 73,
            wheelbase: 1082,
            headTubeLength: 190,
            headTubeAngle: 72,
            forkLength: 400,
            forkOffset: 51,
            forkTrail: 60,
            topTubeEffectiveLength: 600,
            headsetBottomHeight: 12
        }
    }];

export default bicycles;
