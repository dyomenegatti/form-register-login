import React from "react";  
import styles from './Card.module.css';

function Card({ title, children, actions, icon, }) {
  return (
    <div className={styles.card}>
      <div className={styles['card-title']}>
        {title}
      </div>

      <div className={styles['card-content']}>
        {children}
      </div>

      <div className={styles['card-actions']}>
        {actions}
      </div>
    </div>
  );
}

export default Card;