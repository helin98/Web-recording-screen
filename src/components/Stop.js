import React from 'react';
import Button from '@material-ui/core/Button';

const Stop = props => {
  return (
    <Button variant='contained' color='primary' fullWidth {...props}>
      结束
    </Button>
  );
};

export default Stop;
