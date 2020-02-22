import React, { PureComponent } from 'react'

class PureComp extends PureComponent {

    state ={
        name: "Tracy"
    }
    
    // shouldComponentUpdate(nextProps, nextState) {
    //     if(nextState.name === this.state.name){
    //         return false

    //     }
    //     return true
    // }

    render() {
        console.log("render")
        return (
            <div>
                <h4>{this.state.name}</h4>
                <button onClick = {
                    () => this.setState({name:"Stellita"})

                }>Click to Change</button>
            </div>
        )
    }
}

export default PureComp;