import axios from "axios";
import setAuthToken from "../utils/setAuthToken";

export const loginRequest = (payload) => ({
  type: "LOGIN_REQUEST",
  payload,
});

export const logoutRequest = (payload) => ({
  type: "LOGOUT_REQUEST",
  payload,
});

export const registerRequest = (payload) => ({
  type: "REGISTER_REQUEST",
  payload,
});

export const setError = (payload) => ({
  type: "SET_ERROR",
  payload,
});
export const registerTeam = (payload, redirectUrl) => {
  console.log(payload);
  return (dispatch) => {
    axios
      .post("http://localhost:4000/api/admin/team", payload, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then(({ data }) => {
        dispatch(registerRequest(data));
      })
      .then(() => {
        window.location.href = redirectUrl;
      })
      .catch((error) => dispatch(setError(error)));
  };
};

export const registerSenioritie = (payload, redirectUrl) => {
  console.log(payload);
  return (dispatch) => {
    axios
      .post("http://localhost:4000/api/admin/seniorities", payload, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then(({ data }) => {
        dispatch(registerRequest(data));
      })
      .then(() => {
        window.location.href = redirectUrl;
      })
      .catch((error) => dispatch(setError(error)));
  };
};

export const registerUser = (payload, redirectUrl) => {
  return (dispatch) => {
    axios
      .post("http://localhost:4000/api/auth/sign-up", payload)
      .then(({ data }) => {
        dispatch(registerRequest(data));
      })
      .then(() => {
        window.location.href = redirectUrl;
      })
      .catch((error) => dispatch(setError(error)));
  };
};

export const loginUser = ({ email, password }, redirectUrl) => {
  return (dispatch) => {
    axios({
      url: "http://localhost:4000/api/auth/sign-in",
      method: "post",
      auth: {
        username: email,
        password,
      },
    })
      .then(({ data }) => {
        localStorage.clear();
        document.cookie = `name=${data.user.name}`;
        document.cookie = `email=${data.user.email}`;
        document.cookie = `team=${data.user.team}`;
        document.cookie = `points=${data.user.points}`;
        if (data.user.isAdmin) {
          redirectUrl = "/admin/crear-usuarios";
        }
        if (data.token) {
          setAuthToken(data.token);
          localStorage.setItem("token", data.token);
        }
        dispatch(loginRequest(data.user));
      })
      .then(() => {
        window.location.href = redirectUrl;
      })
      .catch((err) => dispatch(setError(err)));
  };
};

export { setError as default };
