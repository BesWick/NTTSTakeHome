import { Pie } from 'react-chartjs-2'
import 'chartjs-plugin-labels'
import './pie.css'

function PieChart({ data }) {
    // console.log(data)
    const dataLen = Object.values(data).reduce((a, b) => a + b, 0)
    const chartData = {
        labels: Object.keys(data),
        datasets: [
            {
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
        <div className='piechart'>
            <Pie
                data={chartData}
                options={{
                    maintainAspectRatio: true,
                    title: {
                        display: true,
                        text: 'Number of Patents per NASA Center',
                        fontSize: 30,
                    },
                    tooltips: {
                        callbacks: {
                            title: function (tooltipItem, data) {
                                return (
                                    'NASA Center: ' +
                                    data['labels'][tooltipItem[0]['index']]
                                )
                            },
                            label: function (tooltipItem, data) {
                                var dataset = data['datasets'][0]
                                var percent =
                                    (dataset['data'][tooltipItem['index']] /
                                        dataLen) *
                                    100

                                return (
                                    '# of Patents:' +
                                    data['datasets'][0]['data'][
                                        tooltipItem['index']
                                    ] +
                                    ' (' +
                                    percent.toFixed(2) +
                                    '%)'
                                )
                            },
                        },
                        bodyFontSize: 20,
                        titleFontSize: 18,
                        titleFontColor: '#22cd59',
                        displayColors: false,
                    },
                    legend: {
                        display: false,
                    },
                    plugins: {
                        labels: {
                            render: 'label',
                            fontColor: '#0cf155',
                            fontSize: 22,
                            precision: 1,
                            overlap: false,
                        },
                    },
                }}
            />
        </div>
    )
}

export default PieChart
