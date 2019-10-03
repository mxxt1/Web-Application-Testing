//stats container

import React, { Component } from 'react'

class Display extends Component {
    constructor(props){
        super(props);
        console.log(props)


    }
    render() {
        return (
            <section>
                <div>
                    <h3>Hits</h3>
                    <h3>{this.props.hits}</h3>
                </div>
                <div>
                    <h3>Strikes</h3>
                    <h3>{this.props.strikes}</h3>
                </div>
                <div>
                    <h3>Balls</h3>
                    <h3>{this.props.balls}</h3>
                </div>
                <div>
                    <h3>Fouls</h3>
                    <h3>{this.props.fouls}</h3>
                </div>
            </section>
        )
    }
}

export default Display;