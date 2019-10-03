//Button controller

import React, { Component } from 'react'

class Dashboard extends Component {
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
               <button onClick={this.props.addFouls}>New Foul</button>
               <button onClick={this.props.resetHits}>Reset Hits</button>  
            </div>
        )
    }
}

export default Dashboard
