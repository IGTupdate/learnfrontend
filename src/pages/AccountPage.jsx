import React, { useEffect, useState } from "react";
import "./AccountPage.css";
import {auth, db} from "../firebase";
import { UserAuth } from '../context/AuthContext'
import LogUSerData from "../components/LogUserData";
import { doc, updateDoc } from "firebase/firestore";
import { updatePassword } from "firebase/auth";


const AccountPage =  () => {
  const [userData, setUserData] = useState([]);
  const [enableFirstLastname, setEnableFirstLastname] = useState(false);
  const [enablePassname, setEnablePassname] = useState(false);
  const[firstName, setFirstName] = useState(""); 
  const[lastName, setLastName] = useState("");
  const[password, setPassword] = useState("");
  const[userUdpated, setUserUdpated] = useState(false);

  const {user, userIsPremium} = UserAuth()

  useEffect(() => {
    if (user) {
      const checkLogUSerData = async function () {
        setUserData(await LogUSerData());
      };
      checkLogUSerData();
    }
  }, [user,userUdpated]);

  const handleUserUpdate = (e)=> {
    e.preventDefault();

    const upddocRef = doc(db, "users", user.uid);
    const upduserdata = {
      firstName: firstName,
      lastName: lastName,
    };

    updateDoc(upddocRef, upduserdata)
    .then(upddocRef => {
      setUserUdpated(true);
      setEnableFirstLastname(false);
    })
    .catch(error => {
        console.log(error);
    })
    
  }

  const handleUserPassUpdate = (e)=> {
    e.preventDefault();

    const user = auth.currentUser;
    updatePassword(user, password).then(() => {
      console.log('updated');
      setUserUdpated(true);
      setEnablePassname(false);
    }).catch((error) => {
      console.log(error);
    });
    
  }

  return (
    <form className="account-form">      
      <div className="account__page">
        <div className="account__container">
          { userUdpated && (
            <div style={{ textAlign: 'center'}}>User Updated</div>
          )}
          <h1 className="account__header">Account Page</h1>
          <figure className="account__item">
            <p className="account__item--type">Email</p>
            <p className="account__item--value">
              {
                userData && (
                  userData.email
                )
              }
            </p>
          </figure>
          <figure className="account__item">
            <p className="account__item--type">Name</p>
            <p className="account__item--value">
              {
                userData && !enableFirstLastname ? (
                  userData.firstName +" "+ userData.lastName
                ) : (
                  <span className="accform-two-fields">
                    <input type="text" name="userFirstName" onChange={(e) => {setFirstName(e.target.value)}} /> 
                    <input type="text" name="userLastName" onChange={(e) => {setLastName(e.target.value)}} />
                  </span>
                )
              }
            </p>
            {
              userData && !enableFirstLastname ? (
                <button className="account__btn" onClick={ (e)=>
                  {e.preventDefault();setEnableFirstLastname(true)}
                }>Edit</button>
              ) : (
                <button className="account__btn" onClick={handleUserUpdate}>Update</button>
              )
            }
            
          </figure>
          <figure className="account__item">
            <p className="account__item--type">Password</p>
            <p className="account__item--value">              
              {
                userData && !enablePassname ? (
                  "*************"
                ) : (
                  <span className="accform-two-fields">
                    <input type="password" name="userPassword" onChange={(e) => {setPassword(e.target.value)}} />
                  </span>
                )
              }
            </p>
            {
              userData && !enablePassname ? (
                <button className="account__btn" onClick={ (e)=>
                  {e.preventDefault();setEnablePassname(true)}
                }>Edit</button>
              ) : (
                <button className="account__btn" onClick={handleUserPassUpdate}>Update</button>
              )
            }
          </figure>
          <figure className="account__item">
            <p className="account__item--type">Subscription Plan</p>
            <p className="account__item--value">
              {
                userIsPremium && (
                  "Premium"
                )
              }
              {
                !userIsPremium && (
                  "No Plan"
                )
              }
            </p>
            {
              !userIsPremium && (
                <button className="account__btn">Update</button>
              )
            }
            
          </figure>
          <figure className="account__item">
            <p className="account__item--type">Billing Details</p>
            <p className="account__item--value">
              Update your billing and subscription details.
            </p>
            <button className="account__btn">Update</button>
          </figure>
        </div>
      </div>
    </form>
  );
};

export default AccountPage;
