import React, { useState } from "react";
import Wave from "../assets/lfwave.svg";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, logIn } = UserAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('')
    try {
      await logIn(email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
      setError(error.message)
    }
  };

  return (
    <div>
      <div className="auth">
        <h1 className="form__title">Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="form__left">
            <div className="form__item">
              <label className="form__item--label">Email</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                className="input"
                name="email"
                type="email"
                required
              />
            </div>
            <div className="form__item">
              <label className="form__item--label">Password</label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                className="input"
                name="password"
                type="password"
                required
              />
            </div>
            {error ? <p className="error__message">{error}</p> : null}
            <button id="form__submit" className="form__submit">
              Sign In
            </button>
          </div>
          <div className="form__right">
            <h1 className="form__title--right">
              Jump right back into the <span className="gold">action.</span>
            </h1>
          </div>
        </form>
        <img className="wave" src={Wave} alt="" />
      </div>
    </div>
  );
};

export default SignIn;
