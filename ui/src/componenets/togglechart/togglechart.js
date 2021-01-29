import { useEffect, useState } from 'react'
import './togglechart.css'

function ToggleChart({ clickedCenter, clickedCategory }) {
    const [showingAlert, setShowingAlert] = useState(true)

    useEffect(() => {
        handleShowAlert()
    }, [])

    const handleShowAlert = () => {
        setTimeout(() => {
            setShowingAlert(false)
        }, 3500)
    }

    return (
        <div className='togglechart'>
            <div className={`${showingAlert ? 'typewriter' : 'hide-welcome'}`}>
                <div className='typewriter-text'>Welcome...</div>
            </div>
            <div
                className={`${showingAlert ? 'hide-welcome' : 'show-welcome'}`}>
                <h2>NASA Patent Portfolio </h2>
                <div className='btnContainer'>
                    <div className='tab'>
                        <input
                            type='radio'
                            id='tab-1'
                            name='tab-group-1'
                            defaultChecked
                            onClick={clickedCategory}
                        />
                        <label htmlFor='tab-1' id='label1'>
                            Category
                        </label>
                    </div>

                    <div className='tab' id='tab2'>
                        <input
                            type='radio'
                            id='tab-2'
                            name='tab-group-1'
                            onClick={clickedCenter}
                        />
                        <label htmlFor='tab-2'>Center</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ToggleChart
