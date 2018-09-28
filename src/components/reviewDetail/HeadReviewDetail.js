import React, { Component } from 'react';
import Slider from "react-slick";

class HeadReviewDetail extends Component {


    onShowImg = (e) => {
        let expandImg = document.getElementById("expandedImg");
        let imgText = document.getElementById("imgtext");
        expandImg.src = e.target.src;
        imgText.innerHTML = e.target.alt;
        expandImg.parentElement.style.display = "block";
    }
    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4
        };
        let hotel = this.props.hotel;
        let photos = hotel.photos;
        let photo = photos.map((pho) => {
            return <div className="column" key={pho.photo_id}>
                <img src={pho.url_original} className="img-detail" onClick={this.onShowImg} />
            </div>
        })

        return (
            <div>
                <div>
                    <div >
                        <span className="location_name">{hotel.name}</span>
                    </div>
                    <div className="location_address">
                        {hotel.address}
                    </div>
                </div>
                <Slider {...settings}>
                    {photo}
                </Slider>
                <div className="container">
                    <img id="expandedImg" className="show-img" />
                    <div id="imgtext" />
                </div>

            </div>
        );
    }
}

export default HeadReviewDetail;