import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as actions from './ironmansearchboxactions';
const axios = require('axios');
import skillData from '../transformdata';

class IronManSearchBox extends Component{
    constructor(props){
        super(props);
        this.onTyped = this.onTyped.bind(this);
        this.isSearching = this.isSearching.bind(this);
    }
    isSearching(){
        if (this.props.state.searchBox.isSearching){
            return (
                <div>
                    searching...
                </div>
            );
        }
    }
    onTyped(event){
        if (event.key === 'Enter'){
            this.props.dispatch(actions.userSearch());
            var that = this;
            axios.get('https://cors-escape.herokuapp.com/https://secure.runescape.com/m=hiscore_oldschool_ironman/index_lite.ws?player='+event.target.value)
            .then(function(response){
                //success
                skillData(response.data);
                that.props.dispatch(actions.searchFinished());
            })
            .catch(function(err){
                console.log(err);
                that.props.dispatch(actions.searchFailed());
            })
        } else {
            this.props.dispatch(actions.userTyped(event.target.value));
        }
    }
    render(){
        return (
            <div>
                <input
                type="textbox"
                onKeyUp={this.onTyped}/>

                {this.isSearching()}
            </div>
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