import React from 'react';
import Button from '@material-ui/core/Button';

const Down = props => {
  return (
    <Button variant='contained' color='primary' fullWidth {...props}>
      下载
    </Button>
  );
};

export default Down;
