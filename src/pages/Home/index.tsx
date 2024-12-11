import { lazy } from 'react';
import IntroContent from '../../content/IntroContent.json';
import MiddleBlockContent from '../../content/MiddleBlockContent.json';
import AboutContent from '../../content/AboutContent.json';
import MissionContent from '../../content/MissionContent.json';
import ProductContent from '../../content/ProductContent.json';
import ContactContent from '../../content/ContactContent.json';
import Carousel from '../../components/Carousell';

const Contact = lazy(() => import('../../components/ContactForm'));
const MiddleBlock = lazy(() => import('../../components/MiddleBlock'));
const Container = lazy(() => import('../../common/Container'));
const ScrollToTop = lazy(() => import('../../common/ScrollToTop'));
const ContentBlock = lazy(() => import('../../components/ContentBlock'));
const ImgBlock = lazy(() => import('../../components/ImgBlock'));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        direction='right'
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        icon='/img/landing/landing-images-3.jpg'
        id='intro'
      />
      <Carousel />
      <ImgBlock images={['/img/landing/landing-images-2.png']} />
      <MiddleBlock
        title={MiddleBlockContent.title}
        content={MiddleBlockContent.text}
        button={MiddleBlockContent.button}
      />
      <ContentBlock
        direction='left'
        title={AboutContent.title}
        content={AboutContent.text}
        section={AboutContent.section}
        icon='/img/landing/landing-images-4.jpg'
        id='about'
      />
      <ContentBlock
        direction='right'
        title={MissionContent.title}
        content={MissionContent.text}
        icon='/img/landing/landing-images-5.jpg'
        id='mission'
      />
      <ContentBlock
        direction='left'
        title={ProductContent.title}
        content={ProductContent.text}
        icon='/img/landing/landing-images-6.jpg'
        id='product'
      />
      <Contact title={ContactContent.title} content={ContactContent.text} id='contact' />
    </Container>
  );
};

export default Home;
