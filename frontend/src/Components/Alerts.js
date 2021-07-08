import { Alert, AlertIcon } from '@chakra-ui/react';

const Alerts = ({ status, title }) => {
  return (
    <Alert status={status}>
      <AlertIcon />
      {title}
    </Alert>
  );
};

export default Alerts;
