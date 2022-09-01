import { useState } from 'react';
import styles from './ItemTask.module.css';

const ItemTask = ({item,doneTask}) => {
  const [checked,setChecked] = useState(item.done);

  const handleChecked = (e)=>{
    setChecked(e.target.checked);
    doneTask(item.id);
  };

  return (
    <div className={styles.container}>  
      <label>

        <input 
          type="checkbox" 
          defaultChecked={checked} 
          onClick={handleChecked}
        />
        <span className={checked ? styles.checked : ''}>
          {item.task}
        </span>

      </label>
    </div>
  );
};

export default ItemTask;