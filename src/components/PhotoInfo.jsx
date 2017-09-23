import * as React from "react";


export default class PhotoInfo extends React.Component{
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                <img src={this.props.photo.url}/>
                <div>{this.props.description}</div>
                <div>{this.props.likes}</div>
                <div>{this.props.createdTime}</div>
            </div>
        );
    }
}