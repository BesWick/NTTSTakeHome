import { HorizontalBar } from 'react-chartjs-2'

import './bar.css'
function BarChart({ data }) {
    const chartData = data
        ? {
              labels: Object.keys(data),
              datasets: [
                  {
                      label: '# of Patents',
                      borderColor: '#22cd59',
                      backgroundColor: '#137633',
                      borderWidth: 1,
                      hoverBackgroundColor: '#22cd59',
                      hoverBorderColor: '#22cd59',
                      data: Object.values(data),
                  },
              ],
          }
        : []
    return (
        <div className='barchart'>
            <HorizontalBar
                data={chartData}
                options={{
                    maintainAspectRatio: true,
                    title: {
                        display: true,
                        text: 'Number of Patents per Portfolio Category',
                        fontSize: 30,
                    },
                    tooltips: {
                        bodyFontSize: 20,
                        titleFontSize: 18,
                        displayColors: false,
                        titleFontColor: '#22cd59',
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
