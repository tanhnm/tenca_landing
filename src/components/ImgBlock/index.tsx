import { MiddleBlockSection } from './styles';

interface ImgBlockProps {
  images: string[]; // Array of image URLs
}

const ImgBlock = ({ images }: ImgBlockProps) => {
  return (
    <MiddleBlockSection
      style={{
        backgroundImage: `url(${images[0]})`, // Use the first image as the background
      }}
    />
  );
};

export default ImgBlock;
