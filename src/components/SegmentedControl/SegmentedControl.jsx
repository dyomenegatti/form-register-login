import React, { useState } from "react";
import styles from './SegmentedControl.module.css';

function SegmentedControl() {
  const [activeOption, setActiveOption] = useState('login');

  const handleOptionClick = (option) => {
    setActiveOption(option);
  };

  return (
    <div className={styles['btn-container']}>
      <div 
        className={`${styles['btn-option']} ${activeOption === 'login' ? styles['active'] : ''}`}
        onClick={() => handleOptionClick('login')}
      >
        Login
      </div>
      <div 
        className={`${styles['btn-option']} ${activeOption === 'register' ? styles['active'] : ''}`}
        onClick={() => handleOptionClick('register')}
      >
        Register
      </div>
    </div>
  );
}

export default SegmentedControl;