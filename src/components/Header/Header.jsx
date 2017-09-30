import * as React from "react";

import "./Header.less";

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state={profile:'', display: 'none'}
    }
    componentWillReceiveProps(nextProps){
        this.setState({profile:nextProps.profile.data[0].user, display: 'inline-block'});
    }
    render() {
            return (
                <div className="header">
                    <button className="button" onClick={this.props.addPhoto}>Download</button>
                    <div className='profile'>
                        <div className="userInfo">
                            <img className='profilePicture' style={{display: this.state.display}} src={this.state.profile.profile_picture}/>
                            <span>{this.state.profile.username}</span>
                        </div>
                    </div>
                </div>
            );
    }
}