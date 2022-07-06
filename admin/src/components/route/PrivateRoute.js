import React from 'react';
import { Route } from 'react-router-dom';
// context
import { useAuth } from '../../context/AuthContext';

export default function PrivateRoute({ element: Element, ...rest }) {

  // currentUser value from context
  const { currentUser } = useAuth();

  return currentUser ? (
    <Route {...rest}>{ (props) => <Element {...props} /> }</Route>
  ) : (
  <></>
  )
}
