import React, { Component } from "react";
import "./PersonalForm.css";

class PersonalForm extends Component{    

    handleChangeForm = ({targ:{name, value}})  =>{
        const {onChangeForm} = this.props;
        onChangeForm(name, value);
    }

    render(){    
        const {isSelected, firstName, lastName, email} = this.props;        

        return <div className="personal-form" >
            <h2>Персональная информация</h2>
            <input  name="firstName" onChange={this.handleChangeForm} value={firstName}/>
            <input  name="lastName" onChange={this.handleChangeForm} value={lastName}/>
            <input  name="email" onChange={this.handleChangeForm} value={email}/>
        </div >
    }
}

export default PersonalForm;