import Hero from './Hero';
import Products from './Product/Products';
import FeatureInfo from './Layout/FeatureInfo';
import NewsLetter from './Layout/Newsletter';

const Home = () => {
  return (
    <>
      <Hero />
      <Products />
      <FeatureInfo />
      {/* <NewsLetter /> */}
    </>
  );
};

export default Home;
