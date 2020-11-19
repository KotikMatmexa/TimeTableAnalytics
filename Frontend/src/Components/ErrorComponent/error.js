import React from 'react'
import './error.css'

class ErrorComponent extends React.Component{


    render(){
        return (
        <div className="error--component">
            <h5>{this.props.data}</h5>
        </div>
        )
    }
}

export default ErrorComponent;