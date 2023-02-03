import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Brightness6Icon from "@mui/icons-material/Brightness6";
import MenuIcon from "@mui/icons-material/Menu";
import CourseIntro from "../pages/CourseIntro";
import { UserAuth } from "../context/AuthContext";
import { render } from "@testing-library/react";

const Navbar = ({ darkMode, toggleTheme }) => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate()
  
  const handleLogout = async () => {
    try{
      await logOut()
      navigate('/')
    }
    catch (error) {
      console.log(error)
    }
  }


  


  return (
    <>
      <div className="navbar__top">
        <div className="navbar__top--container">
          <a className="logo__wrapper" href="/">
            <figure className="logo">
              <img
                className="pencil__img"
                src="https://www.freeiconspng.com/thumbs/pencil-png/black-pencil-png-black-pencil-vector-8.png"
              />
              Learn<span className="gold">Frontend</span> 
            </figure>
          </a>

          <MenuIcon className="menu__icon" />
          {user?.email ? (
            <div className="top__nav--links">
              <figure className="top__nav--link--wrapper">
                <a href="/account" className="nav__link--btn top__nav--link">
                  Account
                </a>
              </figure>
              <figure onClick={handleLogout} className="top__nav--link--wrapper">
                <a
                  href="/sign-in"
                  className="nav__link--btn top__nav--link btn__right"
                >
                  Log Out
                </a>
              </figure>

              <figure className="top__nav--link--wrapper">
                
              </figure>
            </div>
          ) : (
            <div className="top__nav--links">
              <figure className="top__nav--link--wrapper">
                <a href="/auth" className="nav__link--btn top__nav--link">
                  Sign Up
                </a>
              </figure>
              <figure className="top__nav--link--wrapper">
                <a
                  href="/sign-in"
                  className="nav__link--btn top__nav--link btn__right"
                >
                  Login
                </a>
              </figure>

              <figure className="top__nav--link--wrapper">
                <button id="themeButton" onClick={toggleTheme} className="dark__mode--toggle">
                {
                  //                 <Brightness6Icon onClick={toggleTheme} className="dark__mode--icon"></Brightness6Icon>

                }
                </button>
              </figure>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
