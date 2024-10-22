import { useState } from 'react';
import './App.css';

function App() {
    const [items, setItems] = useState([]);
    const [newItem, setNewItem] = useState("");
    const [editingIndex, setEditingIndex] = useState(null);

    function ogeekle(event) {
        event.preventDefault();
        if (editingIndex !== null) {
            const updatedItems = items.map((item, index) => index === editingIndex ? newItem : item);
            setItems(updatedItems);
            setEditingIndex(null);
        } else if (newItem.trim()) {
            setItems([...items, newItem]);
        }
        setNewItem("");
    }

    function deleteItem(index) {
        const updatedItems = items.filter((item, i) => i !== index);
        setItems(updatedItems);
    }

    function editItem(index) {
        setNewItem(items[index]);
        setEditingIndex(index);
    }

    return (
        <div className="App">
            <div className="Walcomecontainer">
            </div>
            <h2>Yapilacaklar listesi</h2>
            <div className="input-container">
                <form>
                    <h2>Listeye eleman ekleyin</h2>
                    <input
                        value={newItem}
                        onChange={e => setNewItem(e.target.value)}
                        className="input"
                        type="text"
                    />
                    <button onClick={ogeekle} className="addbutton">Ekle</button>
                </form>
                <ul className="List">
                    {items.map((item, index) => (
                        <li key={index}>
                            {item}
                            <a className="Deletebutton" onClick={() => deleteItem(index)}>-</a>
                            <a className="Dbutton" onClick={() => editItem(index)}>+</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default App;