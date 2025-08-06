import React from 'react';
import styles from './Button.module.css';
import Icon from '@mdi/react';

function Button({ type = 'default', disabled = false, icon, label, onClick }) {
  const isIconOnly = icon && !label;

  const classes = [
    styles.btn,
    isIconOnly ? styles['btn-icon-only'] : '',
    !isIconOnly && type === 'primary' ? styles['btn-primary'] : '',
    !isIconOnly && type === 'secondary' ? styles['btn-secondary'] : '',
    disabled ? styles['btn-disabled'] : ''
  ].join(' ');

  return (
    <button className={classes} disabled={disabled} onClick={onClick}>
      { icon && <Icon path={icon} size={1.2} className={isIconOnly ? styles['icon-only'] : ''}/> }
      { label && <span className={styles.label}>{ label }</span> }
    </button>
  );
}

export default Button;
