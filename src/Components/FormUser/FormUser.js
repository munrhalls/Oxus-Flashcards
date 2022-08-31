import React, { useEffect, useRef, useState } from "react";
import { useGlobal } from "../../Contexts/GlobalProvider";
import Loader from "../Loader/Loader";
import IMG__CLOSE from "./../../Assets/close.png";
import { introExampleDeck } from "../../introExampleDeck";

export const FormUser = {
  TopBar: function ({ title }) {
    return (
      <div className="FormUser__topbar">
        <h1 className="FormUser__topbar__title">{title}</h1>
      </div>
    );
  },
  Subtitle: function ({ line, boldedLine }) {
    return (
      <h2 className="FormUser__subtitle">
        <span className="FormUser__subtitle__line">{line}</span>
        <span className="FormUser__subtitle__line --bold">{` ${boldedLine}`}</span>
        .
      </h2>
    );
  },
  Error: function ({ error }) {
    return (
      <div className="FormUser__ErrorContainer">
        <h3 className="FormUser__ErrorContainer__msg">{error}</h3>
      </div>
    );
  },
  ExitBtn: function ({ disabled }) {
    const { setModalOpen } = useGlobal();

    return (
      <button
        disabled={disabled || null}
        className="FormUser__exit__cancel --formUserButton"
        onClick={() => setModalOpen(null)}
      >
        <img
          className="FormUser__exit__cancel__icon"
          src={IMG__CLOSE}
          alt="EXIT"
        />
      </button>
    );
  },
  SubmitBtn: function ({ isLoading }) {
    return (
      <div className="FormUser__exit">
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
    const { register, setModalOpen, DB__setDeck } = useGlobal();

    useEffect(() => {
      emailRef?.current?.focus();
    });

    async function handleSubmit(e) {
      e.preventDefault();
      if (!emailRef?.current.value)
        return setError("E-mail field cannot be empty.");
      if (passwordRef?.current?.value?.length < 6)
        return setError("Password needs at least 6 characters.");
      if (passwordRef?.current?.value !== passwordConfirmRef?.current?.value)
        return setError("Passwords do not match.");

      setIsLoading(true);
      try {
        setError("");

        const authObj = await register(
          emailRef?.current?.value,
          passwordRef?.current?.value
        );
        await DB__setDeck(authObj.user.uid, introExampleDeck);
        setTimeout(() => {
          setIsLoading(false);
          setModalOpen("SetProfile");
        }, 1000);
      } catch (e) {
        console.error("Error adding document: ", e);
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
          <FormUser.ExitBtn />

          <div className="FormUser__inputs">
            <label className="FormUser__inputs__label">E-mail address:</label>
            <input
              placeholder="type..."
              ref={emailRef}
              type="email"
              className="FormUser__inputs__instance"
            ></input>
            <label className="FormUser__inputs__label">Password:</label>
            <input
              placeholder="type..."
              ref={passwordRef}
              type="password"
              className="FormUser__inputs__instance"
            ></input>
            <label className="FormUser__inputs__label">Confirm password:</label>
            <input
              placeholder="type..."
              ref={passwordConfirmRef}
              type="password"
              className="FormUser__inputs__instance"
            ></input>
          </div>
          <FormUser.Error error={error} />
          <FormUser.GotAccBtn />
          <FormUser.SubmitBtn loading={isLoading} />
        </Loader>
      </form>
    );
  },
  SetProfile: function () {
    const [displayName, setDisplayName] = useState();
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const { editProfile, getCurrentUser, setModalOpen } = useGlobal();
    const currentUser = getCurrentUser();

    useEffect(() => {
      setDisplayName(() => currentUser.displayName);
    }, []);

    async function handleSubmit(e) {
      e.preventDefault();
      setError("");

      if (displayName.length < 3)
        return setError("Username cannot be shorter than 3 characters.");
      if (displayName.length > 21)
        return setError("Username cannot be longer than 21 characters.");

      try {
        setIsLoading(true);
        await editProfile(displayName);
        setIsLoading(false);
        setModalOpen(null);
      } catch {
        setIsLoading(false);
        setError("Server cannot update profile");
      }
    }

    return (
      <form className="FormUser" onSubmit={(e) => handleSubmit(e)}>
        <Loader active={isLoading}>
          <FormUser.TopBar title="SET USERNAME" />
          <FormUser.ExitBtn disabled={error} />
          <FormUser.Subtitle
            line="You are now registered with e-mail address:"
            boldedLine={currentUser?.email}
          />
          <div className="FormUser__inputs">
            <label className="FormUser__inputs__label --larger">
              Choose username:
            </label>
            <input
              placeholder="type..."
              onChange={(e) => setDisplayName(() => e.target.value)}
              value={displayName}
              type="text"
              className="FormUser__inputs__instance --larger"
            ></input>
          </div>
          <FormUser.Error error={error} />
          <FormUser.SubmitBtn loading={isLoading} />
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
  EditProfileBtn: function () {
    const { setModalOpen } = useGlobal();
    return (
      <button
        className="LoginRegisterBtn --register"
        onClick={() => setModalOpen(() => "SetProfile")}
      >
        Profile
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
      emailRef?.current?.focus();
    });

    async function handleSubmit(e) {
      e.preventDefault();
      if (!emailRef?.current?.value)
        return setError("E-mail field cannot be empty.");
      if (passwordRef?.current?.value?.length < 6)
        return setError("Password needs at least 6 characters.");

      setIsLoading(true);
      try {
        setError("");
        await login(emailRef?.current?.value, passwordRef?.current?.value);
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
          <FormUser.TopBar title="LOG IN" />
          <FormUser.ExitBtn />

          <div className="FormUser__inputs">
            <label className="FormUser__inputs__label">E-mail address:</label>
            <input
              placeholder="type..."
              ref={emailRef}
              type="email"
              className="FormUser__inputs__instance"
            ></input>
            <label className="FormUser__inputs__label">Password:</label>
            <input
              placeholder="type..."
              ref={passwordRef}
              type="password"
              className="FormUser__inputs__instance"
            ></input>
          </div>
          <FormUser.Error error={error} />
          <FormUser.ForgotPasswordBtn />
          <FormUser.SubmitBtn isLoading={isLoading} />
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
  LogOutBtn: function ({ setActiveDeckId }) {
    const { logout } = useGlobal();

    return (
      <button
        className="LoginRegisterBtn --login"
        onClick={() => {
          setActiveDeckId(() => null);
          logout();
        }}
      >
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
      if (emailRef.current) emailRef.current?.focus();
    }, [emailRef]);

    async function handleSubmit(e) {
      e.preventDefault();
      setIsLoading(true);
      try {
        setError("");
        await resetPassword(emailRef?.current?.value);
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
          <FormUser.TopBar title="Password Reset" />

          <FormUser.ExitBtn />

          {isLinkSent ? (
            <div className="FormUser__ResetPassword__viewAfterLinkSent">
              <h1 className="FormUser__ResetPassword__viewAfterLinkSent__title">
                Link to reset password has been sent to your email address
                {emailRef?.current && " "}
                {emailRef?.current?.value}.
              </h1>
              <ul className="FormUser__ResetPassword__viewAfterLinkSent__list">
                <li className="FormUser__ResetPassword__viewAfterLinkSent__list__item">
                  You can click the link and type in new password to reset it.
                  That's it.
                </li>
                <li className="FormUser__ResetPassword__viewAfterLinkSent__list__item">
                  Don't quite see the message? Make sure to check the spam
                  folder or...
                </li>
                <li className="FormUser__ResetPassword__viewAfterLinkSent__list__item">
                  Send{" "}
                  <button
                    className="--formUserButton"
                    onClick={() => setIsLinkSent(() => false)}
                  >
                    link
                  </button>{" "}
                  again.
                </li>
              </ul>
            </div>
          ) : (
            <div className="FormUser__ResetPassword">
              <label className="FormUser__inputs__label --largerFont">
                Email
              </label>
              <input
                placeholder="type..."
                ref={emailRef}
                type="email"
                className="FormUser__inputs__instance --extraMarginTop --extraMarginBottom"
              />
              {error && <FormUser.Error error={error} />}
              <FormUser.SubmitBtn isLoading={isLoading} />
            </div>
          )}
        </Loader>
      </form>
    );
  },
};
