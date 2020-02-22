import React, { Component } from "react";

class Conditional extends Component {

    state = {
        loading: true
    }

    render() {

        if (this.state.loading) {
            return (
                <div>Loading...</div>
            )

        } else {
            return (
                <>
                    <div>Conditional</div>

                </>
            )
        }

    }

    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                loading:false
            })
        })
    }

}

export default Conditional;