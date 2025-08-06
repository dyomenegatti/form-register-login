import React, { useState } from "react";
import Card from "../Card/Card";
import Button from "../Button/Button";
import Input from "../Input/Input";
import styles from './Register.module.css';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [city, setCity] = useState('');
  const [bio, setBio] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const isFormValid = name.trim() !== '' &&
                      email.trim() !== '' &&
                      date.trim() !== '' &&
                      city.trim() !== '' &&
                      bio.trim() !== '' &&
                      password.trim() !== '' &&
                      confirmPassword.trim() !== '';
  return (
    <div className={styles['register-container']}>
      <Card
        title='Create your account'
        actions={
          <>
            <Button 
              label='Cancelar' 
              type={isFormValid ? 'secondary' : 'disabled'}
              disabled={!isFormValid}
            ></Button>
            <Button 
              label='Cadastrar' 
              type={isFormValid ? 'primary' : 'disabled'}
              disabled={!isFormValid}
            ></Button>
          </>
        }
      >
        <div className={styles['register-content']}>
          <div className={styles['content-line']}>
            <div className={styles['input-wrapper']}>
               <Input 
                label="Name"
                value={name}
                handleChange={e => setName(e.target.value)}
              />
            </div>
            <div className={styles['input-wrapper']}>
              <Input 
                label="Email"
                value={email}
                handleChange={e => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className={styles['content-line']}>
            <div className={styles['input-wrapper']}>
              <Input 
                label="Data de nascimento"
                type='date'
                value={date}
                handleChange={e => setDate(e.target.value)}
              />
            </div>
            <div className={styles['input-wrapper']}>
              <Input 
                label="Cidade"
                type="select"
                options={[
                  { value: 'escolha', label: 'Escolha' },
                  { value: 'casa branca', label: 'Casa Branca' },
                  { value: 'mococa', label: 'Mococa' },
                ]}
                value={city}
                handleChange={e => setCity(e.target.value)}
              />
            </div>
          </div>

          <div className={styles['content-line']}>
            <div className={styles['input-wrapper']}>
              <Input 
                label="Bio"
                type="longText"
                value={bio}
                handleChange={(e) => setBio(e.target.value)}
                maxLength={80}
              />
            </div>
          </div>

          <div className={styles['content-line']}>
            <div className={styles['input-wrapper']}>
              <Input 
                label="Password"
                type='password'
                value={password}
                handleChange={e => setPassword(e.target.value)}
              />
            </div>
            <div className={styles['input-wrapper']}>
              <Input 
                label="Confirm password"
                type='password'
                value={confirmPassword}
                handleChange={e => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>
        </div>

        <span className={`${styles['register-message']} ${styles.trouble}`}>
          By signing up, you are creating a account, and you agree to all Terms of Use and Privacy Policy.
        </span>
      </Card>
    </div>
  );
}

export default Register;