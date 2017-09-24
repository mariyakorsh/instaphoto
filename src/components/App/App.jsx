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

        const userID = 1338420743;
        const clientID = '544aadf7e12a4e338b4639022de74cbb';
        const token = '1338420743.544aadf.87030da2e26a41e9b7ed7e6e65d40d4d';
        const count = 20;
        $.ajax({
            url: 'https://api.instagram.com/v1/users/' + userID + '/media/recent',
            dataType: 'jsonp',
            type: 'GET',
            data: {access_token: token, count: count},
            success: (result) => {
                this.setState({data: result})
            },
            error: function (result) {
                console.log(result);
            }
        });
    }

    render() {
        return (
            <div className="container">
                <div className="header">
                    <button className="button" onClick={this.AddPhotos}>Add Photos</button>
                </div>
                <List data={this.state.data}/>
            </div>
        );
    }
}
