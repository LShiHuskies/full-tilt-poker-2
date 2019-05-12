import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Card, CardContent } from '@material-ui/core/';

import LoginForm from './LoginForm';

const Login = () => {
  const handleSubmit = (values) => {
    console.log(handleSubmit)
  }
  return (
    <div>
      <Card>
        Welcome to Full-Tilt Poker 2.0
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
