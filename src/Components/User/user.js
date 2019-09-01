import React, {Component} from 'react';
import UserList from '../../Containers/UserList';
import UserDetails from '../../Containers/UserDetails';

class User extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    render(){
        return(
            <div>
                <h1>User List:</h1>
                <UserList/>
                <hr/>
                <h1>User Details:</h1>
                <UserDetails/>
            </div>
        )
    }
}
export default User;