import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Card, CardContent } from '@material-ui/core/';

import LoginForm from './LoginForm';
import './LoginSignUp.css'

const loginScehema = Yup.object().shape({
    userName: Yup
      .string()
      .required("Please Enter a User Name"),
    password: Yup
      .string()
      .required("Password is required.")
      .min(6, "Too Short"),
  });

  const Login = ({ handleSubmit, handleSignUp }) => {
    return (
      <div>
        <Card style={{ width: '30%', margin: '1% auto', backgroundColor: 'lightblue' }}>
            <CardContent>
              Welcome Back!
            </CardContent>
        </Card>
        <div className="CreateAccount">
            <div className="NeedCreateAccount">Need to Create an Account?</div>
                <button className='SIGNUP' type="submit" onClick={handleSignUp} style={{display: 'inline',
                    color: 'white',
                border: 'solid, 1px, white', fontWeight: 'bold', float: 'right' }}> Sign Up</button>
        </div>
        <Formik
          onSubmit={handleSubmit}
          validationSchema={loginScehema}
          render={formikProps => (
          <LoginForm
          {...formikProps}
          />
        )}
      />
      </div>
    )
  }

  export default Login;
