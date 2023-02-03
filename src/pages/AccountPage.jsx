import React from "react";
import "./AccountPage.css";

const AccountPage = () => {
  return (
    <div className="account__page">
      <div className="account__container">
        <h1 className="account__header">Account Page</h1>
        <figure className="account__item">
          <p className="account__item--type">Email</p>
          <p className="account__item--value">Sample Email</p>
        </figure>
        <figure className="account__item">
          <p className="account__item--type">Name</p>
          <p className="account__item--value">First Name, Last Name</p>
          <button className="account__btn">Edit</button>
        </figure>
        <figure className="account__item">
          <p className="account__item--type">Password</p>
          <p className="account__item--value">Sample Password</p>
          <button className="account__btn">Edit</button>
        </figure>
        <figure className="account__item">
          <p className="account__item--type">Subscription Plan</p>
          <p className="account__item--value">Is Premium / or not</p>
          <button className="account__btn">Update</button>
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
  );
};

export default AccountPage;
