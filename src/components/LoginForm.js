import React from 'react';
import { Field } from 'formik';
import { TextField, Button } from '@material-ui/core/';

const LoginForm = ({
  handleSubmit,
  values,
  handleChange,
  handleBlur,
  errors,
  touched
}) => {
  console.log(touched["First Name"]);
  console.log(errors.firstName);
  console.log(values);
  return (
    <form onSubmit={handleSubmit} style={{ width: '50%', margin: '5% auto' }}>
      <TextField
        name="firstName"
        label="First Name"
        value={values.firstName}
        onChange={handleChange}
        onBlur={handleBlur}
        helperText={touched.firstName && errors.firstName ? errors.firstName : null}
        error={touched.firstName && errors.firstName ? true : false}
        style={{ width: '50%' }}
      />
      <TextField
        name="lastName"
        label="Last Name"
        style={{ width: '50%' }}
        value={values.lastName}
        onChange={handleChange}
        onBlur={handleBlur}
        helperText={touched.lastName && errors.lastName ? errors.lastName : null}
        error={touched.lastName && errors.lastName ? true : false}
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
