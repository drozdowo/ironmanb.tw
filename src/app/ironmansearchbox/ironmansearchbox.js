import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as actions from './ironmansearchboxactions';

class IronManSearchBox extends Component{
    constructor(props){
        super(props);
        this.onTyped = this.onTyped.bind(this);
    }
    onTyped(event){
        this.props.dispatch(actions.userTyped(event.target.value));
        console.log(this.props.state);
    }
    render(){
        return (
            <input
                type="textbox"
                onChange={this.onTyped}
                />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        state: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch: dispatch
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(IronManSearchBox);