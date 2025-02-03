import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CardSlider.css";
import bhuna from './bhuna.jpg'
import aloopak from './aloopak.jpg'
import indramen from './indramen.jpg'
import prawn from './prawn.jpg'
import jmomo from './jmomo.jpg'

const AfroStyles = [
    {
        id: 1,
        title: "Model 1",
        description: "aloo ke pakore",
        alt: "First Image",
        src: aloopak,
        name: "Aloo Ke Pakore with laal chutney and Tea",
        price: "Rs 50"
    },
    {
        id: 2,
        title: "Model 2",
        description: "maggi ramen",
        alt: "Second Image",
        src: indramen,
        name: "Indian Ramen made with maggi and indian spicies",
        price: "Rs50"
    },
    {
        id: 3,
        title: "Model 3",
        description: "chicken masala .",
        alt: "Third Image",
        src: bhuna,
        name: "Chicken Bhuna Masala ",
        price: "Rs 250"
    },
    {
        id: 4,
        title: "Model 4",
        description: "prawn curry.",
        alt: "Fourth Image",
        src: prawn,
        name: "Prawn Curry",
        price: "Rs 250"
    },
    {
        id: 5,
        title: "Model 5",
        description: "jhol momo",
        alt: "Fifth Image",
        src: jmomo,
        name: "Spicy Jhol Momo",
        price: "  Rs 70"
    }
];


const CardSlider = () => {
    const [nav1, setNav1] = useState(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [slider1, setSlider1] = useState(null);

    useEffect(() => {
        setNav1(slider1);
    }, [slider1]);

    const settings = {
        dots: true,
        speed: 1000,
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        onReInit: () => setCurrentSlide(slider1?.innerSlider.state.currentSlide),
        autoplaySpeed: 1000,
        lazyLoad: true,
        asNavFor: ".slider-nav",
        focusOnSelect: true,
        nextArrow: (
            <div className="next-arrow">
                <svg xmlns="http://www.w3.org/2000/svg" stroke="black" height="24" viewBox="0 -960 960 960" width="24">
                    <path d="m242-200 200-280-200-280h98l200 280-200 280h-98Z"/>
                </svg>
            </div>
        ),
        prevArrow: (
            <div className="prev-arrow">
                <svg xmlns="http://www.w3.org/2000/svg" stroke="black" height="24" viewBox="0 -960 960 960" width="24" transform="scale(-1,1)">
                <path d="m242-200 200-280-200-280h98l200 280-200 280h-98Z"/>
                 </svg>

            </div>
        ),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <div className="card_slider-body">
            <div className="card_slider-content">
                <h1 className="card_slider-header"></h1>
                <div className="card_slider-container">
                <Slider {...settings} asNavFor={nav1} ref={(slider) => setSlider1(slider)}>
    {AfroStyles.map((item) => (
        <div key={item.id} className="card_slider-slide">
            <div className="card_slider-img-body">
                <img src={item.src} alt={item.alt} />
                <div className="card_slider-text">
                    <p className="card_slider-name">{item.name}</p>
                    <p className="card_slider-price">{item.price}</p>
                </div>
            </div>
        </div>
    ))}
</Slider>

                    <div className="card_slider-thumb-wrapper">
                        {AfroStyles.map((item, idx) => (
                            <div
                                key={item.id}
                                className={currentSlide === idx ? "card_slider-active" : ""}
                                onClick={() => {
                                    slider1?.slickGoTo(idx);
                                }}>
                                <img src={item.src} alt={item.alt} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardSlider;
