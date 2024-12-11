import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { MiddleBlockSection } from '../MiddleBlock/styles';

// Define the type for carousel items
interface CarouselItem {
  id: number;
  videoId: string; // YouTube video ID
  title: string;
}

// Sample data for carousel
const carouselItems: CarouselItem[] = [
  { id: 1, videoId: 'yNWUIWv3BMM', title: 'Tenca TVC' },
  {
    id: 2,
    videoId: 'OeKa21JKhjo',
    title: 'Tenca Podcast',
  },
  { id: 3, videoId: 'cbSN1CR-88k', title: 'Tenca Podcast' },
];

// Configuration for react-slick
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

// Styled components for the UI
const CenteredContainer = styled.div`
  display: flex;
  width: 69rem;
  justify-content: center;
  align-items: center;
  height: 80vh;
  background-color: #f7f7f7;
`;

const CarouselContainer = styled.div`
  width: 100%;
  max-width: 100%;
`;

const VideoContainer = styled.div`
  width: 100%;
`;

const Title = styled.h3`
  text-align: center;
  margin-bottom: 15px;
`;

const Carousel: React.FC = () => {
  return (
    <CenteredContainer>
      <CarouselContainer>
        <Slider {...settings}>
          {carouselItems.map((item) => (
            <div key={item.id}>
              <Title style={{ color: '#F471B3' }}>{item.title}</Title>
              <VideoContainer>
                <iframe
                  width='100%'
                  height='500'
                  src={`https://www.youtube.com/embed/${item.videoId}`}
                  frameBorder='0'
                  allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                  allowFullScreen
                  title={item.title}
                ></iframe>
              </VideoContainer>
            </div>
          ))}
        </Slider>
      </CarouselContainer>
    </CenteredContainer>
  );
};

export default Carousel;
