import * as React from 'react';

import "./UserList.less";
import User from '../User/User.jsx';

export default class UserList extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <User username={this.props.profile.username} picture={this.props.profile.profile_picture}/>
            </div>
        )
    }
}