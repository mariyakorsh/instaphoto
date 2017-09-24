import * as React from "react";

import "./PhotoInfo.less";


export default class PhotoInfo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let milisec = Number(this.props.createdTime);
        let date = new Date(milisec * 1000).toLocaleDateString("ru-RUS");
        return (
            <div className="photoInfo">
                <img className="photo" src={this.props.photo.url}/>
                <div className="info">
                    <div className="description">{this.props.description}</div>
                    <div className="footer">
                        <hr/>
                        <div className="like">
                            <img  src="./images/like-icon-png-4178.png"/>
                            <span>{this.props.likes} отметок "Нравится"</span>
                        </div>
                        <div className="date">{date}</div>
                    </div>
                </div>
            </div>
        );
    }
}