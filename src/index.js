import React from 'react'
import styles from './styles.module.css'

export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}

//İlka Button Component 
export const Button = ({type,onClick,className})=> {
  return <button onClick={onClick} type={type} className={{type} == 'ilka' ? className='ilka' : 'pika'}>Buton</button>
} 