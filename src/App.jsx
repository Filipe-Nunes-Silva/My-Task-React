import { useState,useEffect } from 'react';
import './App.css';
//Components
import ItemTask from './components/ItemTask/ItemTask';
import AddArea from './components/AddArea/AddArea';

function App() {

  const [list, setList] = useState([]);

  useEffect(()=>{
    const newList = localStorage.getItem('tarefas');
    setList(JSON.parse(newList));
  },[]);

  useEffect(()=>{
    const listJson = JSON.stringify(list);
    localStorage.setItem('tarefas',listJson);
  },[list]);

  const handleAddTask = (taskName) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      task: taskName,
      done: false,
    });
    setList(newList);
  };

  const handleDoneTask = (id)=>{
    let newList = [...list];

    newList.map((item)=>{
      if(item.id === id){
        item.done = !item.done;
      };
    });
    setList(newList);
  };

  const handleClearLocalStorage = ()=>{
    localStorage.clear();
    setList([]);
  };

  return (
    <div className="container">
      <div className='area'>

        <h1>Lista de Tarefas</h1>

        <AddArea addTask={handleAddTask} clearTask={handleClearLocalStorage}/>

        {list.map((item, index) => (
          <ItemTask item={item} key={index} doneTask={handleDoneTask} />
        ))}
        
      </div>
    </div>
  );
};

export default App;
