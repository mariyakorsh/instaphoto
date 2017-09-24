import * as React from "react";


export default class PhotoInfo extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        let milisec =Number(this.props.createdTime);
        let date = new Date(milisec*1000).toLocaleDateString("ru-RUS");
        return (
            <div>
                <img src={this.props.photo.url}/>
                <div>{this.props.description}</div>
                <div>{this.props.likes}</div>
                <div>{date}</div>
            </div>
        );
    }
}