import firebase from '../../firebase'
import thunk from 'redux-thunk'

export const login = (username, password) => {
    return {
        type: 'LOGIN',
        username: username,
        password: password
    };
};

export const fetchUser = ({ email, password }) => {
    // redux-thunk gives access to dispatch & allows waiting for promise returns
    // dispatch of the action is not invoked until promise returns
    return (dispatch) => {
      dispatch({ type: LOGIN_USER_START });

      firebase.auth().signInWithEmailAndPassword(email, password)
        .then(user => loginUserSuccess(dispatch, user))
        .catch((authError) => {
          console.log(
            `firebase.auth().signInWithEmailAndPassword ${authError}`);
          firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(user => loginUserSuccess(dispatch, user))
            .catch((createError) => {
              console.log(
                `firebase.auth().createUserWithEmailAndPassword ${createError}`);
                loginUserFailure(dispatch);
            });
        });
      };
};


const loginUserSuccess = (dispatch, user) => {
    dispatch({
      type: LOGIN_USER_SUCCESS,
      payload: user
    });
  
    Actions.main();
};
  
const loginUserFailure = (dispatch, user) => {
    dispatch({
      type: LOGIN_USER_FAILURE,
      payload: user
    });
};
  
 
export const logout = () => {
    return {
        type: 'LOGOUT'
    };
};
 
export const signup = (username, password) => {
    return (dispatch) => {
    };
};