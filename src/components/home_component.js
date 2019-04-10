import React, {Component} from 'react';
import backgroungImage from '../img/background_image.jpg'

var sectionStyle = {
    width: "100%",
    height: "550px",
    backgroundImage: `url(${backgroungImage})`,
    backgroundRepeat: "none",
    backgroundPosition: "center",};

export default class home_component extends Component {
    render() {
        return (
            <div>
                <br/>
                <br/>
                <br/>
                <div style={sectionStyle}>
                    <h1></h1>
                </div>
            </div>
        )
    }
}