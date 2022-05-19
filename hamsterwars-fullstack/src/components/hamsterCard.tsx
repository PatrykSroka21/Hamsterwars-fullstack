import React, {FunctionComponent} from 'react'
import './App.css'

type CardProps = {
    img: string,
    text: string
}

export const Card: FunctionComponent<CardProps> = ({img, text}) => 
    <> 
    <div id="hamsterCard">
        <img src={img} alt=""/>
        <p>{text}</p>
    </div>
    </>
const el = <Card img="UwU" text="This is a sample text"/>