import $ from 'jquery';
import * as React from "react";

import List from "../List/List.jsx";
import "./App.less"

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.AddPhotos = this.AddPhotos.bind(this);
        this.state = {data: []}
    }

    AddPhotos(event) {
        let button = document.getElementsByClassName("button")[0];
        button.disabled = true;
        const userID = 1338420743;
        const clientID = '544aadf7e12a4e338b4639022de74cbb';
        const token = '1338420743.544aadf.87030da2e26a41e9b7ed7e6e65d40d4d';
        const count = 20;
        $.ajax({
            url: 'https://api.instagram.com/v1/users/' + userID + '/media/recent',
            dataType: 'jsonp',
            type: 'GET',
            data: {access_token: token},
            success: (result) => {
                this.setState({data: result});
                console.log(result);
                button.disabled = false;
            },
            error: function (result) {
                console.log(result);
                button.disabled = false;

            }
        });
    }

    render() {
        return (
            <div className="container">
                <div className="header">
                    <button className="button" onClick={this.AddPhotos}>Download</button>
                </div>
                <List data={this.state.data}/>
            </div>
        );
    }
}
