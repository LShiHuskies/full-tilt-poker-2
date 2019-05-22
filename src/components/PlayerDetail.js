import React from 'react';
import { CardContent, Button } from '@material-ui/core/';

const PlayerDetail = ({ user }) => {
  return (
      <Button style={{ height: '100%', width: '100%' }}>
        <CardContent>
          Username: { user.username } <br />
          Name: { user.firstname + ' ' + user.lastname } <br />
          Email: { user.email }
        </CardContent>
      </Button>
  )
}

export default PlayerDetail;
