let data = {
    actual:     [380532, 395048, 410451, 425282, 440215, 456183, 472985, 491170, 509445, 529587, 549197, 567536, 585792],
    m1_bestfit: [null, null, null, null, 437044, 451281, 465759, 480474, 495421, 510595, 525990, 541602, 557424, 573449, 589673, 606087, 622686, 639461, 656406, 673513, 690773, 708181, 725726, 743401, 761197, 779106, 797119, 815227, 833422, 851694, 870034, 888433, 906882, 925372, 943894, 962439, 980996, 999558, 1018115, 1036659,],
    m2_bestfit: [null, null, null, 433208, 448394, 460230, 475070, 488383, 501449, 514351, 527709, 552394, 599098, 604989, 620178, 635299, 650490, 665799, 680913, 695857, 710668, 725426, 740194],
    m3_bestfit: [387177, 400237, 413377, 426608, 439935, 453362, 466891, 480522, 494257, 508096, 522040, 536089, 550242, 564500, 578863, 593331, 607905, 622584, 637367, 652257, 667251, 682349, 697553, 712862, 728275, 743793, 759415, 775142, 790972, 806906, 822944, 839085, 855328, 871676, 888125, 904676, 922131,],
    m4_bestfit: [380000, 393120, 406509, 420167, 434092, 448283, 462739, 477459, 492442, 507685, 523188, 538947, 554961, 571228, 587744, 604509, 621518, 638769, 656259, 673985, 691944, 710132, 728545, 747181, 766035, 785103, 804383, 823869, 843557, 863444, 883525, 903795, 924250, 944887, 965699, 986683, 1007833, 1029146, 1050616, 1072238,],
    m5_bestfit: [370312, 383828, 397416, 412201, 426875, 441954, 457920, 471973, 488191, 504845, 521939, 539481, 557474, 575924, 611975, 634894, 658728, 683510, 709272,],
    m6_bestfit: [null, null, null, null, null, null, null, 488563, 505405, 522668, 540346, 558510, 577271, 596650, 616532, 636897, 657703, 678908, 700593, 722787, 745442, 768594, 792244, 816395, 841050, 866213,],
    ewap:       [null, null, null, null, null, null, null, null, 496194, 511373, 526869, 544504, 566078, 581123, 600828, 618503, 636505, 654839, 673468,],
    wabom:      [null, null, null, null, null, null, null, null, 498028, 513499, 529299, 547080, 568477, 584072, 603231, 621160, 639412, 657983, 676851,],
    waboa:      [null, null, null, null, null, null, null, null, 503357, 520081, 537197, 555304, 575026, 593236, 612864, 632502, 652545, 672961, 693801,]
};

function copy(o) {

    var output, v, key;

    output = Array.isArray(o) ? [] : {};

    for (key in o) {

        v = o[key];

        output[key] = (typeof v === "object") ? this.copy(v) : v;
    }
    return output;
}


var ctx = document.getElementById('myChart').getContext('2d');


var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["18/06/20", "19/06/20", "20/06/20", "21/06/20", "22/06/20", "23/06/20", "24/06/20", "25/06/20", "26/06/20", "27/06/20", "28/06/20", "29/06/20", "30/06/20", "01/07/20", "02/07/20", "03/07/20", "04/07/20", "05/07/20", "06/07/20", "07/07/20", "08/07/20", "09/07/20", "10/07/20", "11/07/20", "12/07/20", "13/07/20", "14/07/20", "15/07/20", "16/07/20", "17/07/20", "18/07/20", "19/07/20", "20/07/20", "21/07/20", "22/07/20", "23/07/20", "24/07/20", "25/07/20", "26/07/20", "27/07/20", "28/07/20", "29/07/20", "30/07/20", "31/07/20",],
        //labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: 'Actual',
            backgroundColor: 'rgb(179, 199, 66)',
            borderColor: 'rgb(179, 199, 66)',
            fill: false,
            borderWidth: 2,
            data: data.actual,
        },
        {
            label: 'M1_bestfit',
            backgroundColor: 'rgb(220, 122, 92)',
            borderColor: 'rgb(220, 122, 92)',
            fill: false,
            data: [],
            borderWidth: 1
        },
        {
            label: 'M2_bestfit',
            backgroundColor: 'rgb(145, 216, 154)',
            borderColor: 'rgb(145, 216, 154)',
            fill: false,
            data: [],
            borderWidth: 1
        },
        {
            label: 'M3_bestfit',
            backgroundColor: 'rgb(228, 176, 116)',
            borderColor: 'rgb(228, 176, 116)',
            fill: false,
            data: [],
            borderWidth: 1
        },
        {
            label: 'M4_bestfit',
            backgroundColor: 'rgb(188, 209, 194)',
            borderColor: 'rgb(188, 209, 194)',
            fill: false,
            data: [],
            borderWidth: 1
        },
        {
            label: 'M5_bestfit',
            backgroundColor: 'rgb(208, 165, 214)',
            borderColor: 'rgb(208, 165, 214)',
            fill: false,
            data: [],
            borderWidth: 1
        },
        {
            label: 'M6_bestfit',
            backgroundColor: 'rgb(214, 213, 156)',
            borderColor: 'rgb(214, 213, 156)',
            fill: false,
            data: [],
            borderWidth: 1
        },/*
        {
            label: 'Equal Weighted Average -Prediction',
            backgroundColor: 'rgb(228, 176, 116)',
            borderColor: 'rgb(228, 176, 116)',
            fill: false,
            data: data.ewap,
            borderWidth: 1
        },
        {
            label: 'Weighted AveragePrediction -Based on MAPE=Avg(0.2*M1+0.05*M2+0.12M3+0.12*M4+0.11M5+0.3M6)',
            backgroundColor: 'rgb(228, 176, 116)',
            borderColor: 'rgb(228, 176, 116)',
            fill: false,
            data: data.wabom,
            borderWidth: 1
        },
        {
            label: 'Weighted AveragePrediction -Based on AbsError=Avg(0.05*M1+0.05*M2+0.04*M3+0.03*M4+0.03*M5+0.8*M6)',
            backgroundColor: 'rgb(228, 176, 116)',
            borderColor: 'rgb(228, 176, 116)',
            fill: false,
            data: data.waboa,
            borderWidth: 1
        }*/]
    },
    options: {
        events: ['click'],
        responsive: true,
        title: {
            display: true,
            text: 'Prediction'
        },
        scales: {
            xAxes: [{
                display: true,
            }],
            yAxes: [{
                display: true,
            }]
        },
        tooltips: {
            mode: 'index',
            intersect: false
        },
        hover: {
            mode: 'index',
            intersect: false
        }
    }
});


document.getElementById("myChart").onclick = function (evt) {

    var nArray = myChart.getElementsAtEvent(evt);

    if (nArray.length != 0) {

        if (nArray[0]._datasetIndex == 0) {

            console.log (nArray)

            let pos = nArray[0]._index;

            // console.log(pos);

            let newData = copy(data);

            let c1 = 0, c2 = 0, c3 = 0, c4 = 0, c5 = 0, c6 = 0;

            newData.m1_bestfit.forEach(function(item, index){

                if ( index == pos + 1 ){

                    c1 = 4;
                }
                if ( c1 != 0 ){
                   
                    c1--;
                } else {
                    newData.m1_bestfit[index] = null;
                }
            });

            newData.m2_bestfit.forEach(function(item, index){
                if ( index == pos + 1 ){
                    c2 = 4;
                }
                if ( c2 != 0 ){
                    c2--;
                } else {
                    newData.m2_bestfit[index] = null;
                }
            });

            newData.m3_bestfit.forEach(function(item, index){
                if ( index == pos + 1 ){
                    c3 = 4;
                }
                if ( c3 != 0 ){
                    
                    c3--;
                } else {
                    newData.m3_bestfit[index] = null;
                }
            });

            newData.m4_bestfit.forEach(function(item, index){
                if ( index == pos + 1 ){
                    c4 = 4;
                }
                if ( c4 != 0 ){
                    
                    c4--;
                } else {
                    newData.m4_bestfit[index] = null;
                }
            });

            newData.m5_bestfit.forEach(function(item, index){
                if ( index == pos + 1 ){
                    c5 = 4;
                }
                if ( c5 != 0 ){
                    
                    c5--;
                } else {
                    newData.m5_bestfit[index] = null;
                }
            });

            newData.m6_bestfit.forEach(function(item, index){
                if ( index == pos + 1 ){
                    c6 = 4;
                }
                if ( c6 != 0 ){
                    
                    c6--;
                } else {
                    newData.m6_bestfit[index] = null;
                }
            });

            myChart.data.datasets.forEach((dataset) => {

                if ( dataset.label == 'M1_bestfit') {

                    dataset.data = newData.m1_bestfit;

                } else if ( dataset.label == 'M2_bestfit') {

                    dataset.data = newData.m2_bestfit;

                } else if ( dataset.label == 'M3_bestfit') {

                    dataset.data = newData.m3_bestfit;

                } else if ( dataset.label == 'M4_bestfit') {

                    dataset.data = newData.m4_bestfit;

                } else if ( dataset.label == 'M5_bestfit') {

                    dataset.data = newData.m5_bestfit;

                } else if ( dataset.label == 'M6_bestfit') {

                    dataset.data = newData.m6_bestfit;
                }
                
            });

            myChart.update();
        }
    }
};

