import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Card, CardContent } from '@material-ui/core/';

const loginScehema = Yup.object().shape({
    userName: Yup
      .string()
      .required("Please Enter a User Name"),
    password: Yup
      .string()
      .required("Password is required.")
      .min(6, "Too Short"),
  });

  const Login = () => {
    return (
      <div>
      <Card style={{ width: '30%', margin: '1% auto', backgroundColor: 'lightblue' }}>
        <CardContent>
          Welcome Back!
        </CardContent>
      </Card>
      <div style={{fontSize: '14px', padding: '7px',
           color: 'black', width: '300px', fontHeight: 'normal', fontStretch: 'normal',
          lineHeight: 'normal', letterSpacing: '-0.2px', textAlign: 'right', position: 'absolute',
          float: 'left', top: '1.5%', display: 'inline', right: '0.5%'}}>
          <div style={{display: 'inline', position: 'absolute', top: '100%', left: '0%', right: '35%', color: 'white'}}>Need to Create an Account?</div>
            <button id='SIGNUP' type="submit" onClick={'handleSignUp'} style={{display: 'inline',
                color: 'white',
               border: 'solid, 1px, white', fontWeight: 'bold', float: 'right' }}> Sign Up</button>
      </div>
      </div>
    )
  }

  export default Login;
