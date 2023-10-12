import './App.css'
import RandomPokemon from "./components/RandomPokemon";
import Greeter from './components/Greeter';

const User = [
  {id: 1, name: 'Sendo',lastname: 'Galang', present: false},
  {id: 2, name: 'Jeffel',lastname: 'Madula', present: true},
  {id: 3, name: 'Jepoy',lastname: 'Almazora', present: true},
  {id: 4, name: 'Janjan',lastname: 'Almazora', present: false},
  {id: 5, name: 'Kurt',lastname: 'Diestro', present: true}
]
  

function App() {
  return (
    <div className='subcontainer'>
      {/* <RandomPokemon /> */}
      <Greeter person={User} />
    </div>
  )
}

export default App
