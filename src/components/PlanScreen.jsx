import { QuerySnapshot } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import "./PlanScreen.css";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const PlanScreen = ({modal, setModal}) => {
  const [products, setProducts] = useState([]);

  //   useEffect(() => {
  //    db.collection('products').where('active', '==', true)
  //     .get().then((QuerySnapshot) => {
  //         const products = {};
  //         QuerySnapshot.forEach(async productDoc => {
  //             products[productDoc.id] = productDoc.data();
  //             const priceSnap = await productDoc.ref.collection('prices')
  //             .get();
  //             priceSnap.docs.forEach(price => {
  //                 products[productDoc.id].prices = {
  //                     priceId: price.id,
  //                     priceData: price.data()
  //                 }
  //             })
  //         });
  //         setProducts(products)
  //     })
  //   }, [])

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const { user, signUp } = UserAuth();


  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="planscreen">
      <div className="modal__left">
        <h1 className="modal__title">Premium Plan</h1>
        
          <form onSubmit={handleSubmit}>
            <div className="modal__form">
              <div className="form__item">
                <label className="form__item--label">First Name</label>
                <input
                  className="input"
                  onChange={(e) => setFirstName(e.target.value)}
                  name="name"
                  type="text"
                  placeholder="Enter your first name"
                  required
                />
              </div>
              <div className="form__item">
                <label className="form__item--label">Last Name</label>
                <input
                  className="input"
                  onChange={(e) => setLastName(e.target.value)}
                  name="email"
                  type="text"
                  placeholder="Enter your last name"
                  required
                />
              </div>

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
              <div className="modal__btn--wrapper">
                <button id="form__submit" className="form__submit">
                  Sign Up
                </button>
              </div>
            </div>
            </form>
       
      </div>
      <div className="modal__right">
        <span onClick={()=>{setModal(false)}}><i className="bi-x"></i></span>
        <p className="modal__para">
          Creating a premium account will give you access to these features:
        </p>
        <ul className="modal__list">
          <li className="modal__li">- Unlock the full course.</li>
          <li className="modal__li">
            - Weekly zoom calls to check in on progress.
          </li>
          <li className="modal__li">
            - Exclusive access to private group chat with the LearnFrontend
            team.
          </li>
          <li className="modal__li">
            - Exclusive access to giveaways and prizes.
          </li>
          <li className="modal__li">AND MORE.</li>
        </ul>
        <a href="https://discord.com/invite/P8hxsbzsKS" target="_blank">
          <div className="discord__btn">Join the Discord</div>
        </a>
      </div>
    </div>
  );
};

export default PlanScreen;
