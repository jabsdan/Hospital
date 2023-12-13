import React from 'react';
import '../App.css';
import { Button } from './Button';
import { Carousel } from 'react-bootstrap';
import './HeroSection.css';


function HeroSection() {
  return (
    <div className='hero-container'>
 
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block vw-80"
            src="https://scontent.fvvi1-1.fna.fbcdn.net/v/t39.30808-6/407249660_762496502587456_9111642981531889409_n.png?_nc_cat=111&ccb=1-7&_nc_sid=783fdb&_nc_ohc=PNtsMvCJyQYAX-ou5R5&_nc_ht=scontent.fvvi1-1.fna&oh=00_AfDAthoTM2KP6Fgyi83Q06ximk3JCi8T6BCcVcVTutmCkg&oe=657EC449"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block vw-80"
            src="https://scontent.fvvi1-1.fna.fbcdn.net/v/t39.30808-6/340818866_549483743965219_4132386370690145745_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=9c7eae&_nc_ohc=51ZrGmANzLAAX_iwVM8&_nc_ht=scontent.fvvi1-1.fna&oh=00_AfDIoAUBs1Yv_figzIQuSZDzqVXqAWr7gVSb-dEi2DE7iw&oe=657D99DA"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block vw-80"
            src="https://scontent.fvvi1-2.fna.fbcdn.net/v/t39.30808-6/323769336_471281358541279_6121083758017489871_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=9534ce&_nc_ohc=v6mEiKPdNfoAX-heecj&_nc_ht=scontent.fvvi1-2.fna&oh=00_AfCgOXJSEEyPdAD6_GhENJAtaOPz0TprTEnDl0u3gEq55A&oe=657E251B"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>

      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
          Doctores
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          Ambulancia <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
