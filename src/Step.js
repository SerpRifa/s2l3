import React, { Component } from "react";
import "./Step.css";

class Step extends Component{  
    
    handleClick = event => {
        const {onClick, isClickable, number} = this.props;
        if(isClickable) onClick(number);
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
        const {number, children} = this.props;

        return (<div className={this.getClassName(this.props)} onClick={this.handleClick} >
            <div className="step__number">{number}</div>
            <div className="step__title">{children}</div>            
        </div >)
    }
}

export default Step;