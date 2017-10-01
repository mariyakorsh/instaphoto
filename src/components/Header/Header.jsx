import * as React from "react";

import "./Header.less";
import Search from "../Search/Search.jsx";
import User from '../User/User.jsx';

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
                    <Search profile={this.state.profile}/>
                    <button className="button" onClick={this.props.addPhoto}>Download</button>
                    <div className='headerProfile'>
                        <User username={this.state.profile.username} picture={this.state.profile.profile_picture}/>
                    </div>
                </div>
            );
    }
}