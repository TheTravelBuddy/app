import auth from "@react-native-firebase/auth";
import produce from "immer";
import create from "zustand";
import moment from "moment";

import API from "../helpers/API";
import log from "../helpers/log";

const authStates = {
  LOADING: "LOADING",
  NO_AUTH: "NO_AUTH",
  UNREGISTERED: "UNREGISTERED",
  LOGGED_IN: "LOGGED_IN",
};

const getAuthToken = async () => {
  if (auth().currentUser) return auth().currentUser.getIdToken(true);
};

const useAuth = create(
  log((set, get) => ({
    user: null,
    authState: authStates.LOADING,
    initAuthHandler: () => {
      const subscriber = auth().onAuthStateChanged(async (user) => {
        API.defaults.headers.common = {
          Authorization: `bearer ${await getAuthToken()}`,
        };

        if (!user)
          set(
            produce((draftState) => {
              draftState.user = null;
              draftState.authState = authStates.NO_AUTH;
            })
          );
        else await get().getUserDetails();
      });
      return subscriber;
    },
    loginWithPhoneNumber: async (phoneNumber) => {
      const phoneConfirmation = await auth().signInWithPhoneNumber(
        `+91${phoneNumber}`
      );
      set(
        produce((draftState) => {
          draftState.loginTry = { phoneConfirmation, phoneNumber };
        })
      );
    },
    resendOtp: async () => {
      const { loginTry } = get();
      if (!loginTry) return;

      const phoneConfirmation = await auth().signInWithPhoneNumber(
        `+91${loginTry.phoneNumber}`,
        true
      );
      set(
        produce((draftState) => {
          draftState.loginTry = {
            phoneConfirmation,
            phoneNumber: draftState.loginTry.phoneNumber,
          };
        })
      );
    },
    verifyOtp: async (otp) => {
      const { loginTry } = get();
      if (!loginTry) return;
      await loginTry.phoneConfirmation.confirm(otp);
      set(
        produce((draftState) => {
          draftState.loginTry = null;
        })
      );
    },
    logout: async () => {
      await auth().signOut();
    },
    register: async (userDetails) => {
      const { status } = await API({
        url: "/traveller/auth/registerUser",
        method: "POST",
        data: userDetails,
      });

      if (status === 200) await get().getUserDetails();
    },
    getUserDetails: async () => {
      const { status, data: userData } = await API({
        url: "/traveller/auth/userData",
        method: "GET",
      });

      if (status !== 200) return;

      const { uid } = auth().currentUser;
      const {
        registered,
        name,
        phoneNumber,
        mood,
        gender,
        dob,
        profilePicture,
      } = userData;

      set(
        produce((draftState) => {
          if (registered) {
            draftState.user = {
              uid,
              name,
              phoneNumber,
              mood,
              gender,
              dob: moment(dob).toDate(),
              profilePicture,
            };
            draftState.authState = authStates.LOGGED_IN;
          } else {
            draftState.user = { uid };
            draftState.authState = authStates.UNREGISTERED;
          }
        })
      );
    },
  }))
);

export { authStates, useAuth };
