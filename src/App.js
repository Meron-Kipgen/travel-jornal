
import './App.css';
import Navbar from "./components/Navbar"
import Jorney from './components/Jorney'
import data from "./data"


export default function App() {
  const travel = data.map(item => {
    return (
        <Jorney
            key={item.id}
            item={item}
        />
    )
  })       
  
       
  return (
    <div>
        <Navbar />
        <section className="jorney-list">
            {travel}
        </section>
    </div>
  )
}


