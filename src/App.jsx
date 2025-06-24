 import './components/todo/todo.css';
import TodoData from './components/todo/TodoData';
import TodoNew from './components/todo/todonew';
import reactLogo from './assets/react.svg'
const App = () => {
const hoidanit = "Eric ansanal";
const age = 25;
const data = {
  address: "hanoi",
  country: "Vietnam"
}
 
  return (
 <div className="todo-container">
    <div className="todo-title">Todo List</div>
   <TodoNew/>
   <TodoData 
    name={hoidanit}
    age={age}
    data={data}
   />
   <div className='todo-image'>
    <img src={reactLogo}/>
   </div>
   
  </div>  )
}

export default App
  