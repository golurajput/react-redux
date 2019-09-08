import React,{Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectUser} from '../actions/index';
import { 
    Form,
    Button
} from 'semantic-ui-react'

class UserList extends Component{
    render(){
        return(
            // <ul>
            //     {
            //         this.props.users &&
            //         this.props.users.map((user, index)=>{
            //             return(
            //                 <li 
            //                     key={index+1}
            //                     onClick={()=>this.props.selectUser(user)}
            //                 >
            //                     {index} :  {user.firstName}
                                
            //                 </li>
            //             )
            //         })
            //     }
            // </ul>
            <div style={{display: 'flex', alignItems:'center', justifyContent: 'center', height: '100vh'}}>
                <Form style={{
                    width: 500,
                }}>
                    <Form.Input
                        fluid
                        label='First name'
                        placeholder='First name'
                    />
                    <Form.Input
                        fluid
                        label='Last name'
                        placeholder='Last name'
                    />
                    <Button 
                        content='Primary' 
                        primary 
                        fluid
                    />
                </Form>
            </div>
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