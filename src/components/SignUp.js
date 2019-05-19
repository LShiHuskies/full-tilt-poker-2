import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Card, CardContent } from '@material-ui/core/';

import CreateUserForm from './CreateUserForm';

const createSchema = Yup.object().shape({
  firstName: Yup
    .string()
    .required("Please Enter Your First Name."),
  lastName: Yup
    .string()
    .required('Please Enter Your Last Name'),
  userName: Yup
    .string()
    .required("Please Enter a User Name"),
  password: Yup
    .string()
    .required("Password is required.")
    .min(6, "Too Short"),
  email: Yup
    .string()
    .email('Email is not valid')
    .required('Email is required')
});

const SignUp = ({ handleSubmit }) => {
  return (
    <div>
      <Card style={{ width: '40%', margin: '1% auto', backgroundColor: 'lightblue' }}>
        <CardContent>
          Welcome to Full-Tilt Poker 2.0
        </CardContent>
      </Card>
      <Formik
        onSubmit={handleSubmit}
        validationSchema={createSchema}
        render={formikProps => (
        <CreateUserForm
          {...formikProps}
        />
        )}
      />
    </div>
  )
}

export default SignUp;
