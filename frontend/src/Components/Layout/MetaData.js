import { Helmet } from 'react-helmet';

const MetaData = ({ title }) => {
  return (
    <Helmet>
      <title>{`${title} - Orange`}</title>
    </Helmet>
  );
};

export default MetaData;
