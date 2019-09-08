import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {login} from '../../actions/auth';
import {Redirect} from 'react-router-dom';

import {
    Form,
    Button,
    Header
} from 'semantic-ui-react';

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            isAuth: false
        }
    }

    componentWillMount(){
        if(localStorage.getItem('authToken')){
            this.setState({
                isAuth: true
            })
        }
    }

    render(){

        if(this.state.isAuth || this.props.loginUser.isAuth){
            return (
                <Redirect to='/dashboard'/>
            )
        }

        return(
            <div style={{display: 'flex', alignItems:'center', justifyContent: 'center', height: '100vh'}}>
                <Form style={{
                    width: 500,
                }}>
                    <Header as='h1' textAlign='center'>Login</Header>
                    <Form.Input
                        fluid
                        label='First name'
                        placeholder='User Name'
                        onChange={(e)=>this.setState({userName: e.target.value})}
                    />
                    <Form.Input
                        fluid
                        type='password'
                        label='Last name'
                        placeholder='Password'
                        onChange={(e)=>this.setState({password: e.target.value})}
                    />
                    <Button 
                        content='Login' 
                        loading={this.props.loginUser.isLoading}
                        onClick={()=>this.props._handleLogin(this.state.userName, this.state.password)}
                        primary 
                        fluid
                    />
                </Form>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        loginUser: state.authUser,
    }
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({
        _handleLogin: login
    }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Login);