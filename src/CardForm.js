import React, { Component } from "react";
import "./CardForm.css";

class CardForm extends Component{    

    handleChangeForm = ({target:{name, value}}) => {
        const {onChangeForm} = this.props;        
        onChangeForm(name, value);
    }

    componentWillUnmount(){

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