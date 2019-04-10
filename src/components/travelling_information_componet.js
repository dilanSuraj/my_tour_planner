import React, {Component} from 'react';
import image_1 from '../img/image_7.jpg';
import image_2 from '../img/image_8.jpg';
import image_3 from '../img/image_9.jpg';
import image_4 from '../img/image_10.jpg';


var Image_1 = {
    backgroundImage: `url(${image_1})`
};
var Image_2 = {
    backgroundImage: `url(${image_2})`
};
var Image_3 = {
    backgroundImage: `url(${image_3})`
};

var Image_4 = {
    backgroundImage: `url(${image_4})`
};


export default class travelling_information_componet extends Component {
    render() {
        return (
            <div>
                <div className="card-deck">
                    <div className="card">
                        <img className="card-img-top" src={image_1} alt="Image 1"/>
                        <div className="card-body">
                            <h5 className="card-title">Car</h5>
                            <p className="card-text">We are having new and higer standard cars for you.As well as any type og car that you can book according to your usage..</p>
                            <p className="card-text">
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </p>
                        </div>
                    </div>
                    <div className="card">
                        <img className="card-img-top" src={image_2} alt="Image 2"/>
                        <div className="card-body">
                            <h5 className="card-title">Bus</h5>
                            <p className="card-text">Discover Authentic Experiences and Cultures Through Our Carefully Designed Itineraries. Travel Across Popular Destinations With Your Family and Friends At Affordable Prices.</p>
                            <p className="card-text">
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </p>
                        </div>
                    </div>
                    <div className="card">
                        <img className="card-img-top" src={image_3} alt="Image 3"/>
                        <div className="card-body">
                            <h5 className="card-title">Safari Vehicle</h5>
                            <p className="card-text">Thinking of having a magical moment in the wild of Sri Lanka? We offer the best safari options that will give you a memorable experience of Wild in Sri Lanka.Lets book a safari Jeep.</p>
                            <p className="card-text">
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </p>
                        </div>
                    </div>
                </div>

                <br/>
                <br/>


            </div>
        )
    }
}