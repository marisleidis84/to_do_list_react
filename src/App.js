import './App.css';
import './TodoList';
import TodoList from './TodoList';

function App() {
  return (
    <div className="App container">
      <header>
        <h3>todos</h3>
      </header>
        <TodoList />
    </div>
  );
}

export default App;
