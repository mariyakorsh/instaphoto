import * as React from "react";

import "./PhotoInfo.less";


export default class PhotoInfo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let milisec = Number(this.props.createdTime);
        let date = new Date(milisec * 1000).toLocaleDateString("ru-RUS");
        let media;
        if (this.props.video) {
            media = <Video video={this.props.video} poster={this.props.photo.url}/>
        } else {
            media = <Photo photo={this.props.photo}/>
        }
        return (
            <div className="photoInfo">
                {media}
                <div className="info">
                    <div className="userInfo">
                        <img className="profilePicture" src={this.props.profilePicture}/>
                        <span>{this.props.username}</span>
                    </div>
                    <hr/>
                    <div className="description"><span>{this.props.username}</span> {this.props.description}</div>
                    <div className="footer">
                        <hr/>
                        <div className="like">
                            <img src="./images/like-icon-png-4178.png"/>
                            <span>{this.props.likes} отметок "Нравится"</span>
                        </div>
                        <div className="date">{date}</div>
                    </div>
                </div>
            </div>
        );
    }
}
let Video = (props) => {
    return (
        <div className="video">
            <video width="550px"
                   height="550px"
                controls
                loop
                   poster={props.poster}
                src={props.video.url}>
            </video>
        </div>
    );
};
let Photo = (props) => {
    return (
        <div className="photo" style={{backgroundImage: 'url(' + props.photo.url + ')'}}>
        </div>
    );
};

