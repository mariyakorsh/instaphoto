import * as React from 'react';

import './User.less';

export default class UserList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className='profile'>
                    <div className="userInfo">
                        <img className='profilePicture' src={this.props.picture}/>
                        <span>{this.props.username}</span>
                    </div>
                </div>
            </div>
        )
    }
}