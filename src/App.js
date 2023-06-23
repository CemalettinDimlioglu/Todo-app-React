import "./App.css";

function App() {
  return <div className="App" >
    <h1>Todo List App</h1>
    <form >
      <input type="text" placeholder="Add an Item" />

    </form>
    <button>Add</button>

    <ul>
      <li>
        <button>X</button>
      </li>
    </ul>
  </div>;
}

export default App;
