import React, { useEffect, useRef, useState } from "react";
import { useGlobal } from "../../Contexts/GlobalProvider";
import Loader from "../Loader/Loader";

export const FormUser = {
  TopBar: function ({ title }) {
    return (
      <div className="FormUser__topbar">
        <h1 className="FormUser__topbar__title">{title}</h1>
      </div>
    );
  },
  Error: function ({ error }) {
    console.log(error);
    return (
      <div className="FormUser__ErrorContainer">
        <h3 className="FormUser__ErrorContainer__msg">{error}</h3>
      </div>
    );
  },
  Exit: function ({ isLoading }) {
    const { setModalOpen } = useGlobal();
    return (
      <div className="FormUser__exit">
        <button
          className="FormUser__exit__cancel --formUserButton"
          onClick={() => setModalOpen(null)}
        >
          EXIT
        </button>

        <button
          disabled={isLoading}
          className="FormUser__exit__submit --formUserButton"
          type="submit"
        >
          SUBMIT
        </button>
      </div>
    );
  },
  GotAccBtn: function () {
    const { setModalOpen } = useGlobal();
    return (
      <div className="FormUser__gotAccContainer">
        <span className="FormUser__gotAccContainer__msg">
          Already have an account?
        </span>
        <button
          className="FormUser__gotAccContainer__button --formUserButton"
          onClick={(e) => {
            e.preventDefault();
            setModalOpen("Login");
          }}
        >
          Log in
        </button>
      </div>
    );
  },
  GotNoAccBtn: function () {
    const { setModalOpen } = useGlobal();
    return (
      <div className="FormUser__gotAccContainer">
        <span className="FormUser__gotAccContainer__msg">
          Don't have an account yet?
        </span>
        <button
          className="FormUser__gotAccContainer__button --formUserButton"
          onClick={() => setModalOpen("Register")}
        >
          Make an account
        </button>
      </div>
    );
  },
  ForgotPasswordBtn: function () {
    const { setModalOpen } = useGlobal();
    return (
      <div className="FormUser__gotAccContainer">
        <span className="FormUser__gotAccContainer__msg">Forgot password?</span>
        <button
          className="FormUser__gotAccContainer__button --formUserButton"
          onClick={() => setModalOpen("ResetPassword")}
        >
          RESET
        </button>
      </div>
    );
  },
  Register: function () {
    const emailRef = useRef("");
    const passwordRef = useRef("");
    const passwordConfirmRef = useRef("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const { register, setModalOpen } = useGlobal();

    useEffect(() => {
      emailRef.current.focus();
    });
    async function handleSubmit(e) {
      e.preventDefault();
      if (!emailRef.current.value)
        return setError("E-mail field cannot be empty.");
      if (passwordRef.current.value.length < 6)
        return setError("Password needs at least 6 characters.");
      if (passwordRef.current.value !== passwordConfirmRef.current.value)
        return setError("Passwords do not match.");

      setIsLoading(true);

      try {
        setError("");
        await register(emailRef.current.value, passwordRef.current.value);
        setTimeout(() => setIsLoading(false), 1000);
        // setModalOpen("ThanksForJoining");
      } catch {
        setTimeout(() => {
          setIsLoading(false);
          setError("Server couldn't create an account.");
        }, 1000);
      }
    }

    return (
      <form className="FormUser" onSubmit={(e) => handleSubmit(e)}>
        <Loader active={isLoading}>
          <FormUser.TopBar title="REGISTER" />

          <div className="FormUser__inputs">
            <label className="FormUser__inputs__label">E-mail address:</label>
            <input
              ref={emailRef}
              type="email"
              className="FormUser__inputs__email"
            ></input>
            <label className="FormUser__inputs__label">Password:</label>
            <input
              ref={passwordRef}
              type="password"
              className="FormUser__inputs__password"
            ></input>
            <label className="FormUser__inputs__label">Confirm password:</label>
            <input
              ref={passwordConfirmRef}
              type="password"
              className="FormUser__inputs__passwordConfirm"
            ></input>
          </div>
          <FormUser.Error error={error} />
          <FormUser.GotAccBtn />
          <FormUser.Exit loading={isLoading} />
        </Loader>
      </form>
    );
  },
  RegisterBtn: function () {
    const { setModalOpen } = useGlobal();
    return (
      <button
        className="LoginRegisterBtn --register"
        onClick={() => setModalOpen(() => "Register")}
      >
        Register
      </button>
    );
  },
  Login: function () {
    const { setModalOpen } = useGlobal();
    const emailRef = useRef("");
    const passwordRef = useRef("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const { login } = useGlobal();
    useEffect(() => {
      emailRef.current.focus();
    });

    async function handleSubmit(e) {
      e.preventDefault();
      if (!emailRef.current.value)
        return setError("E-mail field cannot be empty.");
      if (passwordRef.current.value.length < 6)
        return setError("Password needs at least 6 characters.");

      setIsLoading(true);
      try {
        setError("");
        await login(emailRef.current.value, passwordRef.current.value);
        setTimeout(() => {
          setIsLoading(false);
          setModalOpen(null);
        }, 500);
      } catch {
        setTimeout(() => {
          setIsLoading(false);
          setError("Server cannot log in these credentials.");
        }, 1000);
      }
    }

    return (
      <form className="FormUser" onSubmit={(e) => handleSubmit(e)}>
        <Loader active={isLoading}>
          <div className="FormUser__topbar">
            <h1 className="FormUser__topbar__title">LOG IN</h1>
          </div>

          <div className="FormUser__inputs">
            <label className="FormUser__inputs__label">E-mail address:</label>
            <input
              ref={emailRef}
              type="email"
              className="FormUser__inputs__email"
            ></input>
            <label className="FormUser__inputs__label">Password:</label>
            <input
              ref={passwordRef}
              type="password"
              className="FormUser__inputs__password"
            ></input>
          </div>
          <FormUser.Error error={error} />
          <FormUser.ForgotPasswordBtn />
          <FormUser.Exit isLoading={isLoading} />
        </Loader>
      </form>
    );
  },
  LoginBtn: function () {
    const { setModalOpen } = useGlobal();
    return (
      <button
        className="LoginRegisterBtn --login"
        onClick={() => setModalOpen(() => "Login")}
      >
        Log in
      </button>
    );
  },
  LogOutBtn: function () {
    const { logout } = useGlobal();

    return (
      <button className="LoginRegisterBtn --login" onClick={() => logout()}>
        Log out
      </button>
    );
  },
  ResetPassword: function () {
    const { resetPassword, setModalOpen } = useGlobal();
    const [isLinkSent, setIsLinkSent] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();
    const emailRef = useRef("");

    useEffect(() => {
      emailRef?.current?.focus();
    });

    async function handleSubmit(e) {
      e.preventDefault();
      setIsLoading(true);
      try {
        setError("");
        await resetPassword(emailRef.current.value);
        setTimeout(() => {
          setIsLoading(false);
          setIsLinkSent(true);
        }, 500);
      } catch {
        setTimeout(() => {
          setIsLoading(false);
          setError(
            "Could not send password reset link to that e-mail address."
          );
        }, 500);
      }
    }

    return (
      <form className="FormUser" onSubmit={(e) => handleSubmit(e)}>
        <Loader active={isLoading}>
          {isLinkSent ? (
            <div className="FormUser__ResetPassword__viewAfterLinkSent">
              <h1 className="FormUser__ResetPassword__viewAfterLinkSent__title">
                Link to reset password has been sent to your email address
                {emailRef?.current && " "}
                {emailRef?.current?.value}.
              </h1>
              <ul className="FormUser__ResetPassword__viewAfterLinkSent__list">
                <li className="FormUser__ResetPassword__viewAfterLinkSent__list__item">
                  Click the link, type new password, log in with new password.
                  That's it.
                </li>
                <li className="FormUser__ResetPassword__viewAfterLinkSent__list__item">
                  Make sure to check spam folder, if you don't see the message.
                </li>
              </ul>
              <button
                className="FormUser__exit__cancel --formUserButton"
                onClick={() => setModalOpen(null)}
              >
                exit
              </button>
            </div>
          ) : (
            <div className="FormUser__ResetPassword">
              <label className="FormUser__inputs__label">Email</label>
              <input
                ref={emailRef}
                type="email"
                className="FormUser__inputs__email"
              />
              {error && <FormUser.Error error={error} />}
              <FormUser.Exit isLoading={isLoading} />
            </div>
          )}
        </Loader>
      </form>
    );
  },
};
