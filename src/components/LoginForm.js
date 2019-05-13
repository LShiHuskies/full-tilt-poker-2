import React from 'react';
import { TextField, Button } from '@material-ui/core/';

const LoginForm = ({
  handleSubmit,
  values,
  handleChange,
  handleBlur,
  errors,
  touched
}) => {
  return (
    <form onSubmit={handleSubmit} style={{ width: '50%', margin: '5% auto' }}>
      <TextField
        name="firstName"
        label="First Name"
        style={{ width: '50%' }}
        value={values.firstName}
        onChange={handleChange}
        onBlur={handleBlur}
        helperText={touched.firstName && errors.firstName ? errors.firstName : null}
        error={touched.firstName && errors.firstName ? true : false}
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
        name="userName"
        label="User Name"
        value={values.UserName}
        onChange={handleChange}
        onBlur={handleBlur}
        helperText={touched.userName && errors.userName ? errors.userName : null}
        error={touched.userName && errors.userName ? true : false}
        fullWidth
      />
      <TextField
        name="email"
        label="Email"
        value={values.email}
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
        value={values.password}
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
        value={values.confirmation}
        onChange={handleChange}
        onBlur={handleBlur}
        helperText={touched.confirmation && errors.confirmation ? errors.confirmation : null}
        error={touched.confirmation && errors.confirmation ? true : false}
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
