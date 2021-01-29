import './App.css'
import { useEffect, useState } from 'react'
import { defaults } from 'react-chartjs-2'
import axios from 'axios'
import BarChart from './componenets/barchart/bar'
import PieChart from './componenets/piechart/pie'
import ToggleChartSwitch from './componenets/togglechart/togglechart'

defaults.global.defaultColor = '#22cd59'
defaults.global.defaultFontColor = '#22cd59'
defaults.global.defaultFontFamily = 'Retro'

function App() {
    const [category, setCategory] = useState([])
    const [center, setCenter] = useState([])
    const [showCategoryChart, setCateryChart] = useState(true)
    const [showCenterChart, setCenterChart] = useState(false)

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('/api/metrics')
                // console.log(response.data, response.data.category)
                setCategory(response.data.category)
                setCenter(response.data.center)
            } catch (err) {
                alert(err)
            }
        }

        fetchData()
    }, [])

    const handleCenterClick = () => {
        setCateryChart(false)
        setCenterChart(true)
    }
    const handleCategoryClick = () => {
        setCateryChart(true)
        setCenterChart(false)
    }

    return (
        <div className='App'>
            <header className='container'>
                <ToggleChartSwitch
                    clickedCategory={handleCategoryClick}
                    clickedCenter={handleCenterClick}
                />
                {showCategoryChart && <BarChart data={category} />}
                {showCenterChart && <PieChart data={center} />}
            </header>
        </div>
    )
}

export default App
