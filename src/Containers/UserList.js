import React,{Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectUser} from '../actions/index';

class UserList extends Component{
    render(){
        return(
            <ul>
                {
                    this.props.users &&
                    this.props.users.map((user, index)=>{
                        return(
                            <li 
                                key={index+1}
                                onClick={()=>this.props.selectUser(user)}
                            >
                                {index} :  {user.firstName}
                                
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({
        selectUser: selectUser
    }, dispatch)
}

function mapStateToProps(state){
    return{
        users: state.users
    }
}

export default connect (mapStateToProps, matchDispatchToProps)(UserList);