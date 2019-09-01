import React,{Component} from 'react';
import {connect} from 'react-redux';
//import {activeUser} from '../actions/index';

class UserDetails extends Component{
    render(){
        return(
            this.props.activeUser &&
            <h1>{this.props.activeUser.firstName + ' ' + this.props.activeUser.lastName + ' ' + this.props.activeUser.age}</h1>
        )
    }
}

function mapStateToProps(state){
    return{
        activeUser: state.activeUser
    }
}

export default connect(mapStateToProps)(UserDetails);