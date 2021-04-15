import React, { Component } from 'react';

let initialState = {
    name: "Siphiwe",
    message: "HOC's are a bit confusing"
}

// type keyword defines a new type always make sure it starts with a capital letter
type State = Readonly<typeof initialState>;

//HOC =  Higher Order Components
let messageHOC = (WrappedComponent: any) =>{
    class HOC extends Component<{}, State>{
        readonly state: State = initialState;
        render(){
            return(
                <WrappedComponent name={this.state.name} message={this.state.message} />
            )
        }
    }
    return HOC;
}

//when you don't put anything as a return type typescript returns any by default

export default messageHOC;

