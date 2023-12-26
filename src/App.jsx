import { Routes ,Route} from "react-router-dom"

// import './App.css'
import Exchanges from "./Components/Exchanges";
import Coins from "./Components/Coins";
import CoinDetails from './Components/CoinDetails';

function App() {
 

  return (
     <Routes>
      <Route path ='/' element={<Exchanges/>}/>
      <Route path ='/coins' element={<Coins/>}/> 
      <Route path ='/coindetail/:id' elemeont={<CoinDetails/>}/>
     </Routes>

  )
}

export default App
