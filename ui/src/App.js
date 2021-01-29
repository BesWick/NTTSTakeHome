import './App.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import BarChart from './componenets/barchart/bar'
import PieChart from './componenets/piechart/pie'

function App() {
    const [category, setCategory] = useState([])
    const [center, setCenter] = useState([])

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get('/api/metrics')
            console.log(response.data, response.data.category)
            setCategory(response.data.category)
            setCenter(response.data.center)
        }

        fetchData()
    }, [])

    return (
        <div className='App'>
            <header className='App-header'>
                <BarChart data={category} />
                <PieChart data={center} />
            </header>
        </div>
    )
}

export default App
