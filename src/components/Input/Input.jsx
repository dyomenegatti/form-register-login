import React, { useState } from "react";
import styles from './Input.module.css';
import Icon from '@mdi/react';
import { mdiEye, mdiEyeOff, } from '@mdi/js';

function Input({ 
  type = 'text', 
  disabled = false, 
  placeholder, 
  icon, 
  label, 
  handleChange,
  value,
  options,
  maxLength
}) {
  const [ showPassword, setShowPassword ] = useState(false);

  const inputType = type === 'password' && showPassword ? 'text' : type;

  const inputPlaceholder = placeholder || (type === 'date' ? 'dd/mm/aaaa' : '');

  const renderIcon = () => {
    if (type === 'password') {
      return (
        <span className={styles.icon} onClick={() => setShowPassword(!showPassword)}>
          <Icon path={showPassword ? mdiEyeOff : mdiEye} size={1} />
        </span>
      );
    }
    if (icon) {
      return (
        <span className={styles.icon}>
          <Icon path={icon} size={1} />
        </span>
      );
    }
    return null;
  };

  const isLongText = type === 'longText';

  return (
    <div className={styles.wrapper}>
      {label && <label>{label}</label>}

      <div className={styles.inputContainer}>
        {type === 'longText' ? (
          <textarea
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
            disabled={disabled}
            className={styles.textarea}
            maxLength={maxLength}
          />
        ) : type === 'select' ? (
          <select
            value={value}
            onChange={handleChange}
            disabled={disabled}
            className={styles.select}
          >
            {options?.map((opt, index) => (
              <option key={index} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        ) : (
          <input
            type={inputType}
            placeholder={inputPlaceholder}
            onChange={handleChange}
            disabled={disabled}
            className={styles.input}
          />
        )}

        {renderIcon()}
      </div>

      {isLongText && (
        <span className={styles.counter}>
          {value?.length || 0} / {maxLength}
        </span>
      )}
    </div>
  );
}

export default Input;