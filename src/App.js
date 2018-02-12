import React, { Component } from "react";
import Step from "./Step";
import CardForm from './CardForm';
import PersonalForm  from './PersonalForm';
import "./App.css";

class App extends Component{
    state={
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        cardNumber: ''
    }

    componentDidMount(){
        this.setButtonNext();
    }

    componentDidUpdate(){
        this.setButtonNext();
        let state = this.state;
    }
    
    setButtonNext(){        
        let button = document.querySelector('button');
        if(button==null) return;
        if(this.isFormCommitable()){          
            button.removeAttribute('disabled');            
        }else{                      
            button.setAttribute('disabled', true);
        }
    }

    handleClickNextForm = () => {
        this.setState({step: this.state.step + 1});
        console.log('step', this.state.step + 1);

    }

    handleTabClick = step =>{
        console.log('step', step);
        this.setState({step: step});
    }

    handleChangeForm = (name, value) => {
        let state = {};
        state[name] = value;
        this.setState(state);
    }

    isFormCommitable = () =>{

        let state = this.state;
        const {cardNumber} = state;

        if(this.state.step === 1){
            if(state.firstName !== '' && state.lastName !== '' && state.email !== '' && state.email.includes('@'))
                return true;
            if(state.firstName === '' && state.lastName !== '' && state.email !== '' && state.email.includes('@'))
                return false;
            if(state.firstName !== '' && state.lastName === '' && state.email !== '' && state.email.includes('@'))
                return false;
            if(state.firstName !== '' && state.lastName !== '' && state.email === '' && state.email.includes('@'))
                return false;            
        }

        if(this.state.step === 2){
            if(cardNumber.length === 16)
                return true;
        }

        return false;
    }

    renderForm(){
        let state = this.state;

        if(state.step === 1)
            return <PersonalForm firstName={state.firstName} lastName={state.lastName} email={state.email} onChangeForm={this.handleChangeForm} />
        if(state.step === 2)
            return <CardForm cardNumber={state.cardNumber} onChangeForm={this.handleChangeForm} onChangeTimeOver={this.handleChangeTimeOver} />
        if(state.step === 3)
            return 'Поздравляем!'
    }

    render(){
        const {step} = this.state;

        return <div className="container">
                <div className="tab-panel">
                    <Step isSelected={step === 1 && true} number={1} onClick={this.handleTabClick} isClickable={step > 1 && true}>                    
                        Personal information
                    </Step> 
                    <Step isSelected={step === 2 && true} number={2} onClick={this.handleTabClick} isClickable={step > 2 && true}>                    
                        Card information
                    </Step> 
                    <Step isSelected={step === 3 && true} number={3} onClick={this.handleTabClick} isClickable={false}>
                        Finish
                    </Step> 
                </div>
                <div className="form-content">
                    {this.renderForm()}
                </div>
                <div className="button-panel">
                    <button className='button-next' onClick={this.handleClickNextForm} >
                        Next
                    </button>
                </div>
            </div>
        
            
            
    }
}

export default App;