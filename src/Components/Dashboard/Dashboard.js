import React,{Component} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
//import {logOut} from '../../actions/auth';
import {
    Button
} from 'semantic-ui-react';

class Dashboard extends Component{

    constructor(props){
        super(props);
        this.state={

        }
    }

    componentWillMount(){
        if(localStorage.getItem('authToken')===null){
            this.setState({
                isAuth: true
            })
        }
    }

    _handleLogOut(){
        localStorage.clear();
        this.setState({
            isAuth: true
        })
    }

    render(){
        if(this.state.isAuth){
            return (
                <Redirect to='/' />
            )
        }
        return(
            <div>
                <h1>Welcome to Dashboard</h1>
                <Button
                    content='Log Out'
                    onClick={()=>this._handleLogOut()}
                />
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        isAuth: state.authUser.sessionExpired
    }
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({
        //_handleLogOut: logOut
    }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Dashboard);