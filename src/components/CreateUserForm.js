import React from 'react';
import { TextField, Button } from '@material-ui/core/';

const CreateUserForm = ({
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
          Create New Account
      </h4>
      <TextField
        name="firstname"
        label="First Name"
        style={{ width: '50%' }}
        onChange={handleChange}
        onBlur={handleBlur}
        helperText={touched.firstname && errors.firstname ? errors.firstname : null}
        error={touched.firstname && errors.firstname ? true : false}
      />
      <TextField
        name="lastname"
        label="Last Name"
        style={{ width: '50%' }}
        onChange={handleChange}
        onBlur={handleBlur}
        helperText={touched.lastname && errors.lastname ? errors.lastname : null}
        error={touched.lastname && errors.lastname ? true : false}
      />
      <TextField
        name="username"
        label="User Name"
        onChange={handleChange}
        onBlur={handleBlur}
        helperText={touched.username && errors.username ? errors.username : null}
        error={touched.username && errors.username ? true : false}
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

export default CreateUserForm;
