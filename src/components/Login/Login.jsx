import React, { useState } from 'react';
import Card from '../Card/Card';
import Button from '../Button/Button';
import styles from './Login.module.css'
import Input from '../Input/Input';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isFormValid = email.trim() !== '' && password.trim() !== '';

  return (
    <div className={styles['login-container']}>
      <Card
          title="Welcome back"
          actions={
            <Button 
              label='Logar' 
              type={isFormValid ? 'primary' : 'disabled'}
              disabled={!isFormValid}
            ></Button>
          }
        >
          <span className={styles['login-message']}>Please enter your email and password.</span>

          <div className={styles['login-content']}>
            <Input 
              label="Email"
              value={email}
              handleChange={e => setEmail(e.target.value)}
            />
            <Input 
              label="Password"
              type='password'
              value={password}
              handleChange={e => setPassword(e.target.value)}
            />
          </div>

          <span className={`${styles['login-message']} ${styles.trouble}`}>
            Having trouble in sign in?
          </span>
        </Card>
    </div>
  );
}

export default Login;