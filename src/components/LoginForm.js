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
      <TextField
        name="firstName"
        label="First Name"
        style={{ width: '50%' }}
        onChange={handleChange}
        onBlur={handleBlur}
        helperText={touched.firstName && errors.firstName ? errors.firstName : null}
        error={touched.firstName && errors.firstName ? true : false}
      />
      <TextField
        name="lastName"
        label="Last Name"
        style={{ width: '50%' }}
        onChange={handleChange}
        onBlur={handleBlur}
        helperText={touched.lastName && errors.lastName ? errors.lastName : null}
        error={touched.lastName && errors.lastName ? true : false}
      />
      <TextField
        name="userName"
        label="User Name"
        onChange={handleChange}
        onBlur={handleBlur}
        helperText={touched.userName && errors.userName ? errors.userName : null}
        error={touched.userName && errors.userName ? true : false}
        fullWidth
      />
      <TextField
        name="email"
        label="Email"
        onChange={handleChange}
        onBlur={handleBlur}
        helperText={touched.email && errors.email ? errors.email : null}
        error={touched.email && errors.email ? true : false}
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
      <TextField
        name="confirmation"
        label="Confirmation"
        type="password"
        onChange={handleChange}
        onBlur={handleBlur}
        helperText={touched.confirmation && errors.confirmation ? errors.confirmation : null}
        error={touched.confirmation && errors.confirmation ? true : false}
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
