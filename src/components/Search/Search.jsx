import * as React from 'react';

import "./Search.less"
import UserList from '../UserList/UserList.jsx'

export default class Search extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <input type='search' placeholder='search users' list='userList'/>
                <datalist id='userList'>
                    <UserList profile={this.props.profile}/>
                </datalist>
            </div>
        );
    }
}