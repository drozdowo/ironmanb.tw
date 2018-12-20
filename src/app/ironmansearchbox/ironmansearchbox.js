import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as actions from './ironmansearchboxactions';
import './ironmansearch.css'
const axios = require('axios');

class IronManSearchBox extends Component{
    constructor(props){
        super(props);
        this.onTyped = this.onTyped.bind(this);
        this.isSearching = this.isSearching.bind(this);
        this.getIronMan = this.getIronMan.bind(this);
    }
    isSearching(){
        if (this.props.state.isSearching){
            return (
                <div className="searchLoader">
                </div>
            );
        }
    }
    getIronMan(){
        if (    this.props.state.player.playerFound 
            && !this.props.state.isSearching){
            var player = this.props.state.player;

            if (player.ironMan.isUltimateIronMan){
                return (
                    <div>
                        is an ultimate ironman btw
                    </div>
                );
            }

            if (player.ironMan.isHardCoreIronMan){
                return (
                    <div>
                        is a hardcore ironman btw
                    </div>
                );
            }

            if (player.ironMan.isIronMan){
                return (
                    <div>
                        is an ironman btw
                    </div>
                );
            }

            return (
                <div>
                    is a normie
                </div>
            );

        } 
    }
    onTyped(event){
        if (event.key === 'Enter'){
            this.props.dispatch(actions.userSearch());
            var that = this;
            //axios.get('https://cors-escape.herokuapp.com/https://secure.runescape.com/m=hiscore_oldschool_ironman/index_lite.ws?player='+event.target.value)
            axios.get('http://localhost:8080/api/ironmanbtw/getIronMan/'+event.target.value)
            .then(function(response){
                //success
                that.props.dispatch(actions.searchFinished(response.data));
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
            <div className="searchBox-container">
                <input
                className="searchBox"
                type="textbox"
                onKeyUp={this.onTyped}
                maxLength="15"
                />
                <div className="spacer"/>
                {this.isSearching()}
                {this.getIronMan()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        state: state.searchBox
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch: dispatch
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(IronManSearchBox);