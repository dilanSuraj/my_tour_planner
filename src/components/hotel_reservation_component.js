import React, {Component} from 'react';
import image_1 from '../img/image_1.jpg';
import image_2 from '../img/image_2.jpg';
import image_3 from '../img/image_3.jpg';
import image_4 from '../img/image_4.jpg';
import image_5 from '../img/image_5.jpg';
import image_6 from '../img/image_6.jpg';

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
var Image_5 = {
    backgroundImage: `url(${image_5})`
};
var Image_6 = {
    backgroundImage: `url(${image_6})`
};

export default class hotel_reservation_component extends Component {
    render() {
        return (
            <div>
                <div className="card-deck">
                    <div className="card">
                        <img className="card-img-top" src={image_1} alt="Image 1"/>
                            <div className="card-body">
                                <h5 className="card-title">Kingsbury   Hotel</h5>
                                <p className="card-text">Situated in Colombo 01. One of the best hotels in sri Lanka.</p>
                                <p className="card-text">
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </p>
                            </div>
                    </div>
                    <div className="card">
                        <img className="card-img-top" src={image_2} alt="Image 2"/>
                            <div className="card-body">
                                <h5 className="card-title">Queens Hotel</h5>
                                <p className="card-text">The Queen's Hotel is an 80-room British Colonial style three star hotel, located at central hill capital Kandy in Sri Lanka. Located in the center of the city at end of the main street, this former Governor's residence is one of the oldest hotels in Sri Lanka with a history of over 160 years. It is currently managed by the Ceylon Hotels Cooperation</p>
                                <p className="card-text">
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </p>
                            </div>
                    </div>
                    <div className="card">
                        <img className="card-img-top" src={image_3} alt="Image 3"/>
                            <div className="card-body">
                                <h5 className="card-title">BJetwing Hotels</h5>
                                <p className="card-text"> Jetwing Hotels Limited is a Sri Lankan hotel chain. Jetwing was founded in the 1970s by Herbert Cooray when he purchased the Blue Oceanic Hotel in Negombo from its Swedish owner Vingressor and renamed it Jetwing. ... Jetwing Hotels' current chairman, Hiran Cooray, is the son of Herbert Cooray</p>
                                <p className="card-text">
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </p>
                            </div>
                    </div>
                </div>

                <br/>
                <br/>

                <div className="card-deck">
                    <div className="card">
                        <img className="card-img-top" src={image_4} alt="Image 4"/>
                        <div className="card-body">
                            <h5 className="card-title">Weligama Bay Hotel</h5>
                            <p className="card-text">Most entertainment hotel near weligama.</p>
                            <p className="card-text">
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </p>
                        </div>
                    </div>
                    <div className="card">
                        <img className="card-img-top" src={image_5} alt="Image 5"/>
                        <div className="card-body">
                            <h5 className="card-title">Chaya Tranz</h5>
                            <p className="card-text">One of the most famous hotel situated in Hikkaduwa.</p>
                            <p className="card-text">
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </p>
                        </div>
                    </div>
                    <div className="card">
                        <img className="card-img-top" src={image_6} alt="Image 6"/>
                        <div className="card-body">
                            <h5 className="card-title">BAraliya  Hotel</h5>
                            <p className="card-text">situated near Polonnaruwa.</p>
                            <p className="card-text">
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}