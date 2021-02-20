import React, { useState } from 'react';
import { View } from 'react-native';
import Login from './login.routes'
import App from './app.routes'



const routes = () => {

  const [logado, setLogado] = useState(true)

  return (
    <>
      {logado ? <App /> : <Login />}
    </>
  );
}

export default routes;