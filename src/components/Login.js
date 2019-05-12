import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Card, CardContent } from '@material-ui/core/';

import LoginForm from './LoginForm';

const Login = () => {
  const handleSubmit = (values) => {
    console.log(values)
  }
  return (
    <div>
      <Card>
        <CardContent>
          Welcome to Full-Tilt Poker 2.0
        </CardContent>
      </Card>
      <Formik
        onSubmit={handleSubmit}
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
