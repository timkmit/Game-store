import { Provider } from 'react-redux';
import store from '../src/redux/store.js';
import NavbarMenu from './components/navbar/Navbar'
import GameStore from './pages/game_store/GameStore.js';
import './App.css'

function App() {

  return (
    <>
     <Provider store={store}>
     <div>
        <NavbarMenu/>
        <GameStore/>
      </div>
     </Provider>
      
    </>
  )
}

export default App
