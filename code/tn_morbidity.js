let data_morbidity = {
    labels: ['Hypertension(Systemic/Systolic)', 'Diabetes', 'Absence of any factors', 'CAD- coronary Artery Disease', 'Chronic Kidney Conditions', 'Bronchial Asthma', 'Single CoMorbidity Factor', 'No Comorbidity Factor', 'Multiple Comorbidity Factors', 'Unknown Factors',],
    datasets: [{
        label: 'TN_Morbidity',
        borderWidth: 1,
        data: [85.8, 66.1, 16.5, 12.0, 8.0, 2.0, 18.54, 16.50, 62.93, 2.04],
        backgroundColor: [
            "rgb(174, 216, 229)", 
            "rgb(174, 216, 229)", 
            "rgb(174, 216, 229)", 
            "rgb(174, 216, 229)", 
            "rgb(174, 216, 229)", 
            "rgb(174, 216, 229)",
            "rgb(252, 172, 82)",
            "rgb(252, 172, 82)",
            "rgb(252, 172, 82)",
            "rgb(252, 172, 82)",
        ], 
    }]
}

let options_morbidity = {
    elements: {
        rectangle: {
            borderWidth: 2,
        }
    },
    responsive: true,
    legend: {
        position: 'right',
    },
    title: {
        display: true,
        text: 'TN Morbidity'
    }
};
var ctx_morbidity = document.getElementById('myChart_morbidity').getContext('2d');

var myBarChart_morbidity = new Chart(ctx_morbidity, {
    type: 'horizontalBar',
    data: data_morbidity,
    options: options_morbidity
});