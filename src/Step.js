import React, { Component } from "react";
import "./Step.css";

class Step extends Component{
    

    constructor(props){
         super(props);
      
    }
    
    handleClick = event => {
        const {onClick} = this.props;
        const {isClickable} = this.props; 
        const {number} = this.props;

        if(isClickable) onClick(number);
    }

    componentWillUnmount(){

    } 

    componentDidUpdate(){        
    }

    getClassName({isSelected, isClickable}){
        let className = "step";
        if(isSelected){
            className += " step-selected";
        }
        
        if(isClickable){
            className += " step-clickable";
        }
  
        return className;
    }

    render(){         
        const {number} = this.props;        
        const {children} = this.props;      

        return (<div className={this.getClassName(this.props)} onClick={this.handleClick} >
            <div className="step__number">{number}</div>
            <div className="step__title">{children}</div>            
        </div >)
    }
}

export default Step;