import React, { useState } from "react";
import "./Auth.css";
import { useNavigate } from "react-router-dom";
import Wave from "../assets/lfwave.svg";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import PlanScreen from "../components/PlanScreen";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, signUp } = UserAuth();
  const navigate = useNavigate()
  const [modal, setModal] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      navigate('/')
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="auth">
      <h1 className="form__title">Create Free Account</h1>
      <form onSubmit={handleSubmit}>
        <div className="form__left">
          <div className="form__item">
            <label className="form__item--label">Email</label>
            <input
              className="input"
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              type="email"
              placeholder="Create your email address"
              required
            />
          </div>
          <div className="form__item">
            <label className="form__item--label">Password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              className="input"
              name="user_password"
              type="password"
              placeholder="Create a password"
              required
            />
          </div>

         

          <button id="form__submit" className="form__submit">
            Sign Up
          </button>
         
        </div>
{modal &&
  <PlanScreen modal={modal} setModal={setModal} />
}

        
        <div className="form__right">
          <h1 className="form__title--right">
            You're in <span className="gold">Safe</span> hands.
          </h1>
          <p className="form__para--right">
            Congratulations on creating an account and beginning your coding
            journey!
          </p>
        </div>
      </form>
      <div className="premium__wrapper">
      <h1 className="or">Want full access to the course?</h1>
          <button onClick={() => setModal(!modal)} className="premium__btn">
        Create Premium Account
          </button>
          </div>
      <img className="wave" src={Wave} alt="" />
    </div>
  );
};

export default Auth;
