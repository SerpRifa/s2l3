import React, { Component } from "react";
import "./PersonalForm.css";

class PersonalForm extends Component{    

    handleChangeForm = event =>{
        const {onChangeForm} = this.props;
        const {name} = event.target;
        const {value} = event.target;

        onChangeForm(name, value);

    }

    render(){    
        const {isSelected} = this.props;
        const {firstName} = this.props;
        const {lastName} = this.props;
        const {email} = this.props;

        return <div className="personal-form" >
        <h2>Персональная информация</h2>
        <input  name="firstName" onChange={this.handleChangeForm} value={firstName}/>
        <input  name="lastName" onChange={this.handleChangeForm} value={lastName}/>
        <input  name="email" onChange={this.handleChangeForm} value={email}/>
        </div >
    }
}

export default PersonalForm;