import React from 'react';
import './heroSlide.css';

const HeroSlide = ({ slide }: {
    slide: {
        bgImg: string;
        title: string;
        brief: string;
    }
}) => {
    return (
        <a href="#" className='img-bg d-flex slign-items-end'
            style={{ backgroundImage: `url(/${slide.bgImg})` }}>
            <div className="img-bg-inner">
                <h2>{slide.title}</h2>
                <p>{slide.brief}</p>
            </div>
        </a>
    );
}

export default HeroSlide;
