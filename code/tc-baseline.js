let config = {
    pointType: 'mmwr-week', // Default is week
    axes: {
        y: {
            title: 'Random numbers' // Title for the y axis
        }
    },
    baseline: {
        text: 'Baseline', // To show multiline text, pass an array of strings,
        description: 'This is a sample baseline',
        url: 'https://github.com'
    }
}

let timePoints = [...Array(51).keys()].map(w => {
    return { week: w + 1, year: 2016 }
})


// Random sequence generator
function rseq(n) {
    let seq = [Math.random()]
    for (let i = 1; i < n; i++) {
        seq.push(Math.random() * (1 + seq[i - 1]))
    }

    return seq
}

// Predictions look like [{ series: [{ point: 0.5 }, { point: 1.2 } ...] }, ..., null, null]
let predictions = timePoints.map(tp => {
    if (tp.week > 30) {
        // We only predict upto week 30
        return null
    } else {
        // Provide 10 week ahead predictions
        return {
            series: rseq(10).map(r => { return { point: r } })
        }
    }
});

let data = {
    timePoints,
    baseline: 0.3,
    models: [
        {
            id: 'mod',
            meta: {
                name: 'Name',
                description: 'Model description here',
                url: 'http://github.com'
            },
            pinned: false, // Setting true shows the model in top section of the legend
            // In case of absence of `pinned` key (or false), the model
            // goes in the bottom section
            predictions,
            style: { // Optional parameter for applying custom css on svg elements
                color: '#4682b4', // Defaults to values from the internal palette
                point: {
                    // Style for the dots in prediction
                },
                area: {
                    // Style for the confidence area (shaded region around the line)
                },
                line: {
                    // Style for the main line
                }
            }
        }
    ]
}

// 1. Initialize
// Setup the id of div where we are going to plot
// Also pass in config options
let tcBaseline = new d3Foresight.TimeChart('#tc-baseline', config)

// 2. Plot
// Provide the data for the complete year
tcBaseline.plot(data)

// 3. Update
// Move to the given index in the set of timePoints
tcBaseline.update(10)
// Or simply use
// timeChart.moveForward()
// timeChart.moveBackward()

// Lets also save the timechart object in global namespace
window.tcBaseline = tcBaseline

