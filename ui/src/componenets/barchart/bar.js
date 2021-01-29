import { HorizontalBar, defaults } from 'react-chartjs-2'

import './bar.css'

function getRandomColor(n) {
    const res = []
    for (let i = 0; i < n; i++) {
        var letters = '0123456789ABCDEF'.split('')
        var color = '#'
        for (let j = 0; j < 6; j++) {
            color += letters[Math.floor(Math.random() * 16)]
        }
        res.push(color)
    }
    return res
}
defaults.global.defaultColor = '#22cd59'
defaults.global.defaultFontColor = '#22cd59'
defaults.global.defaultFontFamily = 'Retro'
// defaults.global.defaultFontSize = '12'

function BarChart({ data }) {
    console.log(data)
    const color = getRandomColor(18)
    const test = {
        labels: Object.keys(data),
        datasets: [
            {
                label: '# of Patents',
                borderColor: '#22cd59',
                backgroundColor: 'black',
                borderWidth: 1,
                hoverBackgroundColor: '#137633',
                hoverBorderColor: '22cd59',
                data: Object.values(data),
            },
        ],
    }
    return (
        <div className='barchart'>
            <p>Hello</p>
            <HorizontalBar
                data={test}
                options={{
                    maintainAspectRatio: true,
                    tooltips: {
                        bodyFontSize: 20,
                        titleFontSize: 18,
                        displayColors: false,
                    },
                    legend: {
                        display: false,
                    },
                    scales: {
                        xAxes: [
                            {
                                ticks: {
                                    fontSize: 18,
                                },
                            },
                        ],
                        yAxes: [
                            {
                                ticks: {
                                    fontSize: 18,
                                },
                            },
                        ],
                    },
                }}
            />
        </div>
    )
}

export default BarChart
