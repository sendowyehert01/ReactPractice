import './App.css'
import RandomPokemon from "./components/RandomPokemon";
import Greeter from './components/Greeter';
import PlaceList from './components/PlacesList';

const User = [
  {id: 1, name: 'Sendo',lastname: 'Galang', present: false},
  {id: 2, name: 'Jeffel',lastname: 'Madula', present: true},
  {id: 3, name: 'Jepoy',lastname: 'Almazora', present: true},
  {id: 4, name: 'Janjan',lastname: 'Almazora', present: false},
  {id: 5, name: 'Kurt',lastname: 'Diestro', present: true}
]

const places = [
  {id: 1, name: 'Tagaytay', price: '2500', rating: 5},
  {id: 1, name: 'Cavite', price: '1200', rating: 2},
  {id: 1, name: 'Laguna', price: '900', rating: 3},
  {id: 1, name: 'Bulacan', price: '1500', rating: 5},
  {id: 1, name: 'Pangasinan', price: '2000', rating: 4},
]
  

function App() {
  return (
    <div className='subcontainer'>
      {/* <RandomPokemon /> */}
      {/* <Greeter person={User} /> */}
      <PlaceList info={places}/>
    </div>
  )
}

export default App
