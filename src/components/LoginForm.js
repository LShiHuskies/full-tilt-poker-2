import React from 'react';
import { Field } from 'formik';
import { TextField, Button } from '@material-ui/core/';

const LoginForm = ({
  handleSubmit,
  values,
  handleChange,
  handleBlur,
  errors
}) => {
  return (
    <form onSubmit={handleSubmit} style={{ width: '50%', margin: 'auto' }}>
      <TextField
        name="First Name"
        label="First Name"
        value={values.FirstName}
        onChange={handleChange}
        onBlur={handleBlur}
        fullWidth
      />
      <TextField
        name="Last Name"
        label="Last Name"
        value={values.LastName}
        onChange={handleChange}
        onBlur={handleBlur}
        fullWidth
      />
      <TextField
        name="User Name"
        label="User Name"
        value={values.UserName}
        onChange={handleChange}
        onBlur={handleBlur}
        fullWidth
      />
      <TextField
        name="Email"
        label="Email"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        fullWidth
      />
      <TextField
        name="Password"
        label="Password"
        type="password"
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        fullWidth
      />
      <TextField
        name="Confirmation"
        label="Confirmation"
        type="password"
        value={values.confirmation}
        onChange={handleChange}
        onBlur={handleBlur}
        fullWidth
      />
      <Button
        variant="contained"
        color="primary"
        type="submit"
      />
    </form>
  )
};

export default LoginForm;
