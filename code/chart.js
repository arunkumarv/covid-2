let data = {
    dates:['18/06/20', '19/06/20', '20/06/20', '21/06/20', '22/06/20', '23/06/20', '24/06/20', '25/06/20', '26/06/20', '27/06/20', '28/06/20', '29/06/20', '30/06/20', '01/07/20', '02/07/20', '03/07/20', '04/07/20', '05/07/20', '06/07/20', '07/07/20', '08/07/20', '09/07/20', '10/07/20', '11/07/20', '12/07/20', '13/07/20', '14/07/20', '15/07/20', '16/07/20', '17/07/20', '18/07/20', '19/07/20', '20/07/20', '21/07/20', '22/07/20', '23/07/20', '24/07/20', '25/07/20', '26/07/20', '27/07/20', '28/07/20', '29/07/20', '30/07/20', '31/07/20'],
    actual: ['380532', '395048', '410451', '425282', '440215', '456183', '472985', '491170', '509445', '529587', '549197', '567536', '585792', '605221', '627168', '649886', '673904', '697846', '720346', '743491', '769052', '794842', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    m1: [null, null, null, null, '437044', '451281', '465759', '480474', '495421', '510595', '525990', '541602', '557424', '573449', '613162', '631965', '651092', '670540', '690307', '710386', '730775', '773359', '796172', '819326', '842815', '866636', '890780', '915243', '940017', '965096', '990472', '1016138', null, null, null, null, null, null, null, null, null, null, null, null],
    m2: [null, null, null, '433208', '448394', '460230', '475070', '488383', '501449', '514351', '527709', '552394', '599098', '604989', '620178', '635299', '650490', '665799', '680913', '695857', '710668', '805647', '826852', '848064', '869161', '889452', '909841', '930328', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    m3: ['387177', '400237', '413377', '426608', '439935', '453362', '466891', '480522', '494257', '508096', '522040', '536089', '550242', '564500', '615578', '633367', '651401', '669675', '688192', '706953', '725961', '796433', '823913', '852242', '881444', '911540', '942556', '974513', '1007436', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    m4: ['380000', '393120', '406509', '420167', '434092', '448283', '462739', '477459', '492442', '507685', '523188', '538947', '554961', '571228', '587744', '604509', '621518', '638769', '656259', '673985', '691944', '710132', '807687', '834226', '859545', '885386', '911751', '938644', '966069', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    m5: ['370312', '383828', '397416', '412201', '426875', '441954', '457920', '471973', '488191', '504845', '521939', '539481', '557474', '575924', '611975', '634894', '658728', '683510', '709272', '728128', '750032', '771373', '792715', '817474', '842693', '868381', '894545', '921068', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    m6: [null, null, null, null, null, null, null, '488563', '505405', '522668', '540346', '558510', '577271', '596650', '627811', '649968', '672758', '696155', '720259', '745123', '770718', '797020', '820175', '847670', '875790', '904629', '934329', '964954', '996535', '1029001', null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    //   ewap: [null, null, null, null, null, null, null, null, 496194, 511373, 526869, 544504, 566078, 581123, 600828, 618503, 636505, 654839, 673468,],
    //   wabom: [null, null, null, null, null, null, null, null, 498028, 513499, 529299, 547080, 568477, 584072, 603231, 621160, 639412, 657983, 676851,],
    //   waboa: [null, null, null, null, null, null, null, null, 503357, 520081, 537197, 555304, 575026, 593236, 612864, 632502, 652545, 672961, 693801,]
};


 
let wh_ci = [null, null, null, null, null, null, null, null, '547383', '564109', '581227', '599338', '619065', '637282', '668653', '690008', '711939', '734428', '757541', '781005', '805199', '837190', '862613', '889567', '917051', '945159', '974051', '1003775', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
let wab_ba = [null, null, null, null, null, null, null, null, '503273', '519999', '537117', '555228', '574954', '593172', '624543', '645898', '667828', '690317', '713430', '736895', '761089', '793080', '818503', '845457', '872941', '901049', '929941', '959665', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
let wl_ci = [null, null, null, null, null, null, null, null, '459163', '475889', '493007', '511118', '530844', '549061', '580433', '601787', '623718', '646207', '669320', '692785', '716978', '748969', '774392', '801347', '828830', '856938', '885831', '915554', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];

//let ew_ap = [null, null, null, null, null, null, null, null, '496194', '511373', '526869', '544504', '566078', '581123', '612741', '631667', '650998', '670741', '690867', '710072', '730016', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]; 

let colors = {
    actual: 'rgb(0, 184, 18)',
    actual_bk: 'rgb(0, 184, 18,0.3)',
    m1: 'rgb(220, 122, 92)',
    m2: 'rgb(145, 216, 154)',
    m3: 'rgb(228, 176, 116)',
    m4: 'rgb(188, 209, 194)',
    m5: 'rgb(208, 165, 214)',
    m6: 'rgb(214, 213, 156)',
    wl_ci: 'rgb(173, 160, 158)',
    ew_ap: 'rgb(160, 173, 161)',
    wab_ba: 'rgb(168, 170, 179)',
    wh_ci: 'rgb(173, 166, 172)',
    ew_ap_bk: 'rgb(160, 173, 161, 0.3)',
    wab_ba_bk: 'rgb(168, 170, 179, 0.3)',
    wh_ci_bk: 'rgb(173, 166, 172, 0.6)'
}
function copy(o) {

    var output, v, key;

    output = Array.isArray(o) ? [] : {};

    for (key in o) {

        v = o[key];

        output[key] = (typeof v === "object") ? this.copy(v) : v;
    }
    return output;
}

Chart.defaults.LineWithLine = Chart.defaults.line;
Chart.controllers.LineWithLine = Chart.controllers.line.extend({
    draw: function (ease) {
        Chart.controllers.line.prototype.draw.call(this, ease);

        if (this.chart.tooltip._active && this.chart.tooltip._active.length) {
            var activePoint = this.chart.tooltip._active[0],
                ctx = this.chart.ctx,
                x = activePoint.tooltipPosition().x,
                topY = this.chart.scales['y-axis-0'].top,
                bottomY = this.chart.scales['y-axis-0'].bottom;

            // draw line
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(x, topY);
            ctx.lineTo(x, bottomY);
            ctx.lineWidth = 1;
            ctx.strokeStyle = '#aaa';
            ctx.stroke();
            ctx.restore();
        }
    }
});

var ctx = document.getElementById('myChart').getContext('2d');


var myChart = new Chart(ctx, {
    type: 'LineWithLine',
    data: {
        labels: data.dates,
        //labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: 'Actual',
            backgroundColor: colors.actual_bk,
            borderColor: colors.actual,
            fill: false,
            borderWidth: 3,
            pointRadius: 1,
            pointHoverRadius: 1,
            data: data.actual,
        },
        {
            label: 'M1',
            backgroundColor: 'rgb(220, 122, 92)',
            borderColor: colors.m1,
            fill: false,
            data: [],
            borderWidth: 1,
            pointRadius: 1,
            pointHoverRadius: 1,
        },
        {
            label: 'M2',
            backgroundColor: 'rgb(145, 216, 154)',
            borderColor: colors.m2,
            fill: false,
            data: [],
            borderWidth: 1,
            pointRadius: 1,
            pointHoverRadius: 1,
        },
        {
            label: 'M3',
            backgroundColor: 'rgb(228, 176, 116)',
            borderColor: colors.m3,
            fill: false,
            data: [],
            borderWidth: 1,
            pointRadius: 1,
            pointHoverRadius: 1,
        },
        {
            label: 'M4',
            backgroundColor: 'rgb(188, 209, 194)',
            borderColor: colors.m4,
            fill: false,
            data: [],
            borderWidth: 1,
            pointRadius: 1,
            pointHoverRadius: 1,
        },
        {
            label: 'M5',
            backgroundColor: 'rgb(208, 165, 214)',
            borderColor: colors.m5,
            fill: false,
            data: [],
            borderWidth: 1,
            pointRadius: 1,
            pointHoverRadius: 1,
        },
        {
            label: 'M6',
            backgroundColor: 'rgb(214, 213, 156)',
            borderColor: colors.m6,
            fill: false,
            data: [],
            borderWidth: 1,
            pointRadius: 1,
            pointHoverRadius: 1,
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
            display: false,
            text: ''
        },
        scales: {
            xAxes: [{
                display: true,
            }],
            yAxes: [{
                display: true,
                /*  gridLines: {
                     color: "rgba(0, 0, 0, 0)",
                 }, */
                ticks: {
                    callback: function (label, index, labels) {
                        return label / 1000 + 'k';
                    }
                }
            }]
        },
        tooltips: {
            mode: 'index',
            intersect: false
        },

    }
});

setTimeout(function () {

    let pos = 21;

    let newData = copy(data);

    let c1 = 0, c2 = 0, c3 = 0, c4 = 0, c5 = 0, c6 = 0;

    newData.m1.forEach(function (item, index) {

        if (index == pos + 1) {

            c1 = 6;
        }
        if (c1 != 0) {

            c1--;
        } else {
            newData.m1[index] = null;
        }
    });

    newData.m2.forEach(function (item, index) {
        if (index == pos + 1) {
            c2 = 5;
        }
        if (c2 != 0) {
            c2--;
        } else {
            newData.m2[index] = null;
        }
    });

    newData.m3.forEach(function (item, index) {
        if (index == pos + 1) {
            c3 = 6;
        }
        if (c3 != 0) {

            c3--;
        } else {
            newData.m3[index] = null;
        }
    });

    newData.m4.forEach(function (item, index) {
        if (index == pos + 1) {
            c4 = 6;
        }
        if (c4 != 0) {

            c4--;
        } else {
            newData.m4[index] = null;
        }
    });

    newData.m5.forEach(function (item, index) {
        if (index == pos + 1) {
            c5 = 6;
        }
        if (c5 != 0) {

            c5--;
        } else {
            newData.m5[index] = null;
        }
    });

    newData.m6.forEach(function (item, index) {
        if (index == pos + 1) {
            c6 = 6;
        }
        if (c6 != 0) {

            c6--;
        } else {
            newData.m6[index] = null;
        }
    });

    myChart.data.datasets.forEach((dataset) => {

        if (dataset.label == 'M1') {

            dataset.data = newData.m1;

        } else if (dataset.label == 'M2') {

            dataset.data = newData.m2;

        } else if (dataset.label == 'M3') {

            dataset.data = newData.m3;

        } else if (dataset.label == 'M4') {

            dataset.data = newData.m4;

        } else if (dataset.label == 'M5') {

            dataset.data = newData.m5;

        } else if (dataset.label == 'M6') {

            dataset.data = newData.m6;
        }

    });

    myChart.update();
}, 200);



document.getElementById("myChart").onclick = function (evt) {

    var nArray = myChart.getElementsAtEvent(evt);

    if (nArray.length != 0) {

        if (nArray[0]._datasetIndex == 0) {

            console.log(nArray)

            let pos = nArray[0]._index;

            console.log(pos);

            let newData = copy(data);

            let c1 = 0, c2 = 0, c3 = 0, c4 = 0, c5 = 0, c6 = 0;

            newData.m1.forEach(function (item, index) {

                if (index == pos + 1) {

                    c1 = 4;
                }
                if (c1 != 0) {

                    c1--;
                } else {
                    newData.m1[index] = null;
                }
            });

            newData.m2.forEach(function (item, index) {
                if (index == pos + 1) {
                    c2 = 4;
                }
                if (c2 != 0) {
                    c2--;
                } else {
                    newData.m2[index] = null;
                }
            });

            newData.m3.forEach(function (item, index) {
                if (index == pos + 1) {
                    c3 = 4;
                }
                if (c3 != 0) {

                    c3--;
                } else {
                    newData.m3[index] = null;
                }
            });

            newData.m4.forEach(function (item, index) {
                if (index == pos + 1) {
                    c4 = 4;
                }
                if (c4 != 0) {

                    c4--;
                } else {
                    newData.m4[index] = null;
                }
            });

            newData.m5.forEach(function (item, index) {
                if (index == pos + 1) {
                    c5 = 4;
                }
                if (c5 != 0) {

                    c5--;
                } else {
                    newData.m5[index] = null;
                }
            });

            newData.m6.forEach(function (item, index) {
                if (index == pos + 1) {
                    c6 = 4;
                }
                if (c6 != 0) {

                    c6--;
                } else {
                    newData.m6[index] = null;
                }
            });

            myChart.data.datasets.forEach((dataset) => {

                if (dataset.label == 'M1') {

                    dataset.data = newData.m1;

                } else if (dataset.label == 'M2') {

                    dataset.data = newData.m2;

                } else if (dataset.label == 'M3') {

                    dataset.data = newData.m3;

                } else if (dataset.label == 'M4') {

                    dataset.data = newData.m4;

                } else if (dataset.label == 'M5') {

                    dataset.data = newData.m5;

                } else if (dataset.label == 'M6') {

                    dataset.data = newData.m6;
                }

            });

            myChart.update();
        }
    }
};


var ctx1 = document.getElementById('myChart1').getContext('2d');
var myChart1 = new Chart(ctx1, {
    type: 'LineWithLine',
    data: {
        labels: data.dates,
        //labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: 'Actual',
            backgroundColor: colors.actual_bk,
            borderColor: colors.actual,
            fill: false,
            borderWidth: 2,
            pointRadius: 1,
            pointHoverRadius: 1,
            data: data.actual,
        },
        {
            label: 'Weighted_Low_CI',
            borderColor: colors.wl_ci,
            fill: false,
            pointRadius: 1,
            pointHoverRadius: 1,
            data: wl_ci,
            borderWidth: 1
        },/*
        {
            label: 'Equal Weighted Average -Prediction',
            backgroundColor: colors.ew_ap_bk,
            borderColor: colors.ew_ap,
            fill: '-1',
            pointRadius: 1,
            pointHoverRadius: 1,
            data: ew_ap,
            borderWidth: 1
        }, */
        {
            label: 'Weighted AveragePrediction -Based on AbsError',
            backgroundColor: colors.wab_ba_bk,
            borderColor: colors.wab_ba,
            fill: '-1',
            pointRadius: 1,
            pointHoverRadius: 1,
            data: wab_ba,
            borderWidth: 1
        }, {
            label: 'Weighted_High_CI',
            backgroundColor: colors.wh_ci_bk,
            borderColor: colors.wh_ci,
            fill: '-1',
            pointRadius: 1,
            pointHoverRadius: 1,
            data: wh_ci,
            borderWidth: 1
        }]
    },
    options: {
        maintainAspectRatio: true,
        spanGaps: false,
        elements: {
            line: {
                tension: 0.000001
            }
        },
        plugins: {
            filler: {
                propagate: false
            }
        },

        events: ['click'],
        responsive: true,
        title: {
            display: false,
            text: ''
        },
        scales: {
            xAxes: [{
                display: true,
                ticks: {
                    autoSkip: false
                }
            }],
            yAxes: [{
                display: true,
                ticks: {
                    callback: function (label, index, labels) {
                        return label / 1000 + 'k';
                    }
                }
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


