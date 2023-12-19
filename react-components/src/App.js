import './App.css';
import ToDoItem from './AddItem';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ToDoItem className="completed"></ToDoItem>
      </header>
    </div>
  );
}

export default App;
