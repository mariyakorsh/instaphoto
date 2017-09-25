import * as React from "react";

import PhotoInfo from "../PhotoInfo/PhotoInfo.jsx";
import "./List.less"


export default class List extends React.Component{
    constructor(props){
        super(props);
        this.state = {data : []}
    }
    componentWillReceiveProps(nextProps){
        this.setState({array: nextProps.data.data});
    }
    render() {
        if(this.state.array) {
            return (
                <div className="list">
                    {
                        this.state.array.map(function (item, index, arr) {
                            return <PhotoInfo
                                key={index}
                                photo={item.images.standard_resolution}
                                username={item.user.username}
                                profilePicture={item.user.profile_picture}
                                video={item.videos ?item.videos.low_bandwidth : null}
                                description={item.caption ? item.caption.text: ""}
                                likes={item.likes.count}
                                createdTime={item.created_time}
                            />
                        })
                    }
                </div>
            );
        }
        return (<div></div>);
    }
}