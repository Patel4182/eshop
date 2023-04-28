import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

const Home = () => {
  return (

    <div style={{ display: 'block', width: 'auto' }}>
      <Carousel className='mt-4'>
        <Carousel.Item className='mt-5'>
          <img
            className="d-block w-100"
            src=" https://wallpaper.dog/large/10907455.jpg"
            alt="Image1" height={'800px'}
          />
          <Carousel.Caption className='text-black bg-light bg-opacity-75' style={{top:'45%' , bottom: '40%'}}>
            <h3>Clothes are the spirit of Fashion. </h3>
            <p>Find the stuff that brings impacible change in your lifestyle.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className='mt-5'>
          <img
            className="d-block w-100"
            src="https://img.freepik.com/premium-photo/many-colorful-toys-collection-wooden-desk_488220-17409.jpg?w=2000"
            alt="Image2" height={'800px'}
          />
          <Carousel.Caption className='text-black bg-light bg-opacity-75' style={{top:'45%' , bottom: '40%'}}>
            <h3>Cute Toys for CuteKids!</h3>
            <p>Buy all kinds of intellectual games,toys,puzzles in our online store<br></br>
            and give your child the pleasure of love & entertainment.</p>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className='mt-5'>
          <img
            className="d-block w-100"
            src="https://blog.shift4shop.com/hubfs/ThinkstockPhotos-502255976.png"
            alt="Image2" height={'800px'}
          />
          <Carousel.Caption className='text-black bg-light bg-opacity-75' style={{top:'45%' , bottom: '40%'}}>
            <h3>Let's now shop for daily foods and neccessary.</h3>
            <p>Frozen & chilled food.<br></br>Fresh fruit & vegetables.</p>
          </Carousel.Caption>
        </Carousel.Item>
        
      </Carousel>
    </div>
  );


};

export default Home;