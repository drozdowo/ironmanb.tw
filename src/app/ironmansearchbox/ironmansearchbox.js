import React, {Component} from 'react'
import {connect} from 'react-redux'

class IronManSearchBox extends Component{
    render(){
        return (
            <input
                type="textbox"
                onInput={this.props.onTyped}
                />
        );
    }
}

export default connect()(IronManSearchBox);