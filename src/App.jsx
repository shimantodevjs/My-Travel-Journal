import Nav from './assets/nav'
import './index.css'
import TravelCharts from './assets/travelCharts'
import data from './assets/data'

function App() {
    
    const travelDescription=data.map(charts=>{
        return (
            <TravelCharts
               key={charts.id}
               {...charts}
            />
        )
    })

     return(
        <div className="box__container">
            <Nav />
            <div className="charts__container">
                {travelDescription}
            </div>
        </div>
     )
}

export default App
