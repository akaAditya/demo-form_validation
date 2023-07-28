import React from 'react'
import Cards from './UI/Cards';
import Button from './Button';
import classes from './ErrorModel.module.css'

const ErrorModel = (props) => {
  return (
    <div>
    <div onClick= {props.onConfirm}/>
    <Cards>
        <header class={classes.header}>
            <h2 class = {classes.header.h2}>{props.title}</h2>
        </header>
        <div>
            <p>{props.message}</p>
        </div>
        <footer>
            <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
    </Cards>
    </div>
  )
}

export default ErrorModel;
