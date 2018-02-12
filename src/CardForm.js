import React, { Component } from "react";
import "./CardForm.css";

class CardForm extends Component{
    state={

    }
    constructor(){
        super();
    }

    componentWillUnmount(){

    } 

    handleChangeForm = event => {
        const {onChangeForm} = this.props;
        const {name} = event.target;
        const {value} = event.target;
        onChangeForm(name, value);
    }

    render(){     
        const {cardNumber} = this.props;   
        return <form  className="card-form">
        <h2>Номер карты</h2>
            <input  name="cardNumber" onChange={this.handleChangeForm} value={cardNumber}/>
        </form >
    }
}

export default CardForm;