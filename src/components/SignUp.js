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
      <Card style={{ width: '30%', margin: '1% auto', backgroundColor: 'lightblue' }}>
        <CardContent>
          Welcome to Full-Tilt Poker 2.0
        </CardContent>
      </Card>
      <div style={{fontSize: '14px', padding: '7px',
           color: 'black', width: '300px', fontHeight: 'normal', fontStretch: 'normal',
          lineHeight: 'normal', letterSpacing: '-0.2px', textAlign: 'right', position: 'absolute',
          float: 'left', top: '1.5%', display: 'inline', right: '0.5%'}}>
          <div style={{display: 'inline', position: 'absolute', top: '100%', left: '0%', right: '35%'}}>Need to Create an Account?</div>
            <button id='SIGNUP' type="submit" onClick={'handleSignUp'} style={{display: 'inline',
                color: 'white',
               border: 'solid, 1px, white', fontWeight: 'bold', float: 'right' }}> Sign Up</button>
      </div>
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
