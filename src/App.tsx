import './App.css'
import Nav from './Components/Nav';
import fetchAll from './assets/fetchAll'

function App() {
  fetchAll("/products");
  fetchAll("/products/1");
  return (
    <div className=''>
      <Nav />
      hoho
    </div>
  )
}

export default App
