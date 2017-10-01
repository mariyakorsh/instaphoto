import $ from 'jquery';
import * as React from "react";

import List from "../List/List.jsx";
import Header from "../Header/Header.jsx";
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
        // const promise = new Promise((success, error)=> {
        //     const request = new XMLHttpRequest();
        //     request.open('GET', 'https://api.instagram.com/v1/users/' + userID + '/media/recent?access_token='+ token);
        //     request.setRequestHeader("Access-Control-Allow-Origin", '*');
        //     request.addEventListener('load', () => {
        //         console.log(request.responseText);
        //         success(request.responseText);
        //     });
        //     request.addEventListener('error', () => {
        //         console.log('Error');
        //         error(new Error('Error'));
        //     });
        //     request.send();
        // });
        // promise.then((result) => {
        //     this.setState({data:result})
        // });
    }

    render() {
        return (
            <div className="container">
                <Header
                    addPhoto={this.AddPhotos}
                    profile={this.state.data}
                    />
                <List data={this.state.data}/>
            </div>
        );
    }
}
