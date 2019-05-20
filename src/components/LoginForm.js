import React from 'react';
import { TextField, Button } from '@material-ui/core/';

const LoginForm = ({
    handleSubmit,
    handleChange,
    handleBlur,
    errors,
    touched,
    isValid,
  }) => {
    return (
      <form onSubmit={handleSubmit} style={{ width: '50%', margin: '5% auto', backgroundColor: 'lightgray' }}>
      <br />
        <h4 style={{ width: '30%', margin: '1% auto', backgroundColor: 'lightgray', border: 'none' }}>
            Please Login
        </h4>
        <TextField
          name="username"
          label="User Name"
          onChange={handleChange}
          onBlur={handleBlur}
          helperText={touched.userName && errors.userName ? errors.userName : null}
          error={touched.userName && errors.userName ? true : false}
          fullWidth
        />
        <TextField
          name="password"
          label="Password"
          type="password"
          onChange={handleChange}
          onBlur={handleBlur}
          helperText={touched.password && errors.password ? errors.password : null}
          error={touched.password && errors.password ? true : false}
          fullWidth
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={!isValid}
          style={{ marginTop: '5%', display: 'block', marginLeft: 'auto', marginRight: '0' }}
        >
        Submit
        </Button>
      </form>
    )
  };
  
  export default LoginForm;