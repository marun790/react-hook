import React, { useReducer, useContext } from 'react'
import { Switch, Route, BrowserRouter as Router, Redirect } from 'react-router-dom';

const USER_CONTEXT = React.createContext();
const initialState = { name: 'Arun', isLoggedIn: false }

const reducer = (state, action) => {
  switch (action) {
    case "LOGIN":
      console.log('Login');
      return {
        ...state,
        name: 'Aadhira',
        isLoggedIn: true
      }
    default:
      return state;
  }

}

export default function ReduxInHoock() {

  const [state, dispatch] = useReducer(reducer, initialState);



  return (
    <USER_CONTEXT.Provider value={{ state: state, dispatch: dispatch }}>
      <Router>
        <div>
          <Switch>
            <Route exact path='/' ><Login /></Route>
            <Route path='/dashboard' ><Dashboard /></Route>
          </Switch>
        </div>
      </Router>
    </USER_CONTEXT.Provider>
  );
}


function Login() {

  const context = useContext(USER_CONTEXT)
  const state = context.state;

  const login = () => {
    console.log('Logging in', state.name, 'isLoggedIn', state.isLoggedIn);
    context.dispatch("LOGIN");
  }


  if (state.isLoggedIn) {
    return (<Redirect to={{ pathname: "/dashboard" }} />);
  } else {
    return (
      <div>
        <h1>Login: {state.name}</h1>
        <button onClick={login}>Login</button>
      </div>
    );
  }

}

function Dashboard() {
  const context = useContext(USER_CONTEXT);
  const state = context.state;
  return (
    <h1>Dashboard : {state.name}</h1>
  )
}