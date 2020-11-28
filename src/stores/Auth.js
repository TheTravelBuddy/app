import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";
import auth from "@react-native-firebase/auth";

const authStates = {
  LOADING: "LOADING",
  NO_AUTH: "NO_AUTH",
  LOGGED_IN: "LOGGED_IN",
};

const initialState = { user: null, authState: authStates.LOADING };
const AuthContext = createContext(initialState);

const AuthProvider = ({ children }) => {
  const [state, setState] = useState(initialState);

  const loginWithPhoneNumber = useCallback(
    (phoneNumber) =>
      new Promise((resolve, reject) => {
        console.log("LOGIN: phone", phoneNumber);
        auth()
          .signInWithPhoneNumber(`+91${phoneNumber}`)
          .then((phoneConfirmation) => {
            setState((oldState) => ({
              ...oldState,
              loginTry: { phoneConfirmation, phoneNumber },
            }));
            resolve();
          })
          .catch(reject);
      }),
    []
  );

  const resendOtp = useCallback(
    () =>
      new Promise((resolve, reject) => {
        console.log("RESEND: loginTry", state.loginTry);
        if (state.loginTry)
          auth()
            .signInWithPhoneNumber(`+91${state.loginTry.phoneNumber}`, true)
            .then((phoneConfirmation) => {
              setState((oldState) => ({
                ...oldState,
                loginTry: {
                  phoneConfirmation,
                  phoneNumber: state.loginTry.phoneNumber,
                },
              }));
              resolve();
            })
            .catch(reject);
      }),
    [state]
  );

  const verifyOtp = useCallback(
    (otp) =>
      new Promise((resolve, reject) => {
        console.log("VERIFY: loginTry", state.loginTry);
        if (state.loginTry) {
          state.loginTry.phoneConfirmation
            .confirm(otp)
            .then(() => {
              resolve();
            })
            .catch(reject);
        } else {
          reject();
        }
      }),
    [state]
  );

  const logout = useCallback(
    () =>
      new Promise((resolve, reject) => {
        auth().signOut().then(resolve).catch(reject);
      }),
    []
  );

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged((user) => {
      console.log("AUTH CHANGED: user", user);
      setState((oldState) => ({
        ...oldState,
        user,
        authState: user ? authStates.LOGGED_IN : authStates.NO_AUTH,
      }));
    });
    return subscriber;
  }, []);

  useEffect(() => console.log("NEW STATE", state), [state]);

  return (
    <AuthContext.Provider
      value={{ ...state, loginWithPhoneNumber, verifyOtp, resendOtp, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { authStates, useAuth, AuthProvider };
