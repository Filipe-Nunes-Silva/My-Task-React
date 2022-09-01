import { useState } from 'react';
import styles from './AddArea.module.css';

const AddArea = ({ addTask, clearTask }) => {

  const [inputText, setInputText] = useState('');

  const handleKeyUp = (event) => {
    
    if (event.keyCode === 13 && inputText !== '') {
      addTask(inputText);
      setInputText('');
    };
    return;
  };

  return (
    <div className={styles.container}>

      <div className={styles.areaAdd}>
        <div className={styles.image}>➕</div>
        <input
          autoFocus
          onKeyUp={handleKeyUp}
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder='Adicione uma tarefa...'
        />
      </div>

      <button onClick={clearTask}>
        Apagar todas
      </button>
      
    </div>
  );
};

export default AddArea;