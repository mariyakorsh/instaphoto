import $ from 'jquery';
import * as React from "react";

export default class App extends React.Component {
    AddPhotos(){
        {
            var userID = 1338420743;
            var clientID = '544aadf7e12a4e338b4639022de74cbb';
            var token = '1338420743.544aadf.87030da2e26a41e9b7ed7e6e65d40d4d'
            var kolichestvo = 4;

                $.ajax({
                    url: 'https://api.instagram.com/v1/users/' + userID + '/media/recent',
                    dataType: 'jsonp',
                    type: 'GET',
                    data: {access_token: token, count: kolichestvo},
                    success: function (result) {
                        console.log(result);
                    },
                    error: function (result) {
                        console.log(result); // пишем в консоль об ошибках
                    }
                });
            }

        }

    render() {
        return (
            <div>
                <button onClick={this.AddPhotos.bind(this)}>Add Photos</button>
                <div>App</div>
            </div>
        );
    }
}
