//stats container

import React, { Component } from 'react'

class Display extends Component {
    constructor(props){
        super(props);
        console.log(props)


    }
    render() {
        return (
            <div>
               <button onClick={this.props.addStrikes}>New Strike</button>
               <button onClick={this.props.addBalls}>New Ball</button>
               <button onClick={this.props.addHits}>New Hit</button> 
            </div>
        )
    }
}

export default Display;