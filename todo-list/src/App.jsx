import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
    const [count, setCount] = useState(0)
  


  

    return (
        <div className="App">

            <div className="Walcomecontainer">


            </div>

            <h2>Yapilacaklar listesi</h2>


            <div className="input-container">

                <form>
                    <h2>Listeye eleman ekleyin</h2>
                    <input className="input" type="text"></input>
                    <button onClick={addbutton} href="#" onSubmit="none" className="addbutton">Ekle</button>

                </form>


                <ul className="List">
                    <li>Liste1 <a className="Deletebutton">-</a><a className="Dbutton">+</a></li>
                  
                </ul>


            </div>

        </div>
  )
}

export default App
