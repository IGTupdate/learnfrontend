import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CourseIntro from "./pages/CourseIntro";
import CourseLesson from "./pages/CourseLesson";
import CourseLesson2 from "./pages/CourseLesson2";
import CourseLesson3 from "./pages/CourseLesson3";
import CSSLesson1 from "./pages/CSSLesson1";
import CSSLesson2 from "./pages/CSSLesson2";
import CSSLesson3 from "./pages/CSSLesson3";
import CSSLesson4 from "./pages/CSSLesson4";
import JSLesson1 from "./pages/JSLesson1";
import JSLesson2 from "./pages/JSLesson2";
import JSLesson3 from "./pages/JSLesson3";
import Auth from "./pages/Auth";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "./firebase";
import SignIn from "./pages/SignIn";
import Sidebar from "./components/Sidebar";
import { AuthContextProvider } from "./context/AuthContext";
import AccountPage from "./pages/AccountPage";
import ProtectedRoute from "./components/ProtectedRoute";
import ReactLesson1 from "./pages/ReactLesson1";
import ReactLesson2 from "./pages/ReactLesson2";
import ReactLesson3 from "./pages/ReactLesson3";
import ReactLesson4 from "./pages/ReactLesson4";
import ReactLesson5 from "./pages/ReactLesson5";
import ReactLesson6 from "./pages/ReactLesson6";
import JSLesson4 from "./pages/JSLesson4";
import Resume from "./pages/Resume";
import InterviewTips from "./pages/InterviewTips";
import JobApplication from "./pages/JobApplication";

function App() {
  // const [darkMode, setDarkMode] = useState("light");
  let toggleSwitch = document.querySelector(".toggleSwitch");
  document.body.classList = "light";

  /*
    const toggleTheme = () => {
    localStorage.setItem("theme", darkMode);
    if (localStorage.getItem("theme") == "light") {
      setDarkMode("dark");
      localStorage.setItem("theme", "dark");
      console.log("i am in dark mode")
      document.body.className = darkMode;

    } else if (localStorage.getItem("theme") == "dark") {
      setDarkMode("light");
      localStorage.setItem("theme", "light");
      console.log("i am in light mode")
      document.body.className = darkMode;



    }
  };
  
  */

  return (
    <div className="app">
      <AuthContextProvider>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/sign-in" element={<SignIn />}></Route>
          <Route path="/auth" element={<Auth />}></Route>
          <Route path="/courseintro" element={<CourseIntro />}></Route>
          <Route path="/section-1/lesson-1" element={<CourseLesson />}></Route>
          <Route path="/section-1/lesson-2" element={<CourseLesson2 />}></Route>
          <Route path="/section-1/lesson-3" element={<CourseLesson3 />}></Route>
          <Route path="/section-2/lesson-1" element={<CSSLesson1 />}></Route>
          <Route path="/section-2/lesson-2" element={<CSSLesson2 />}></Route>
          <Route path="/section-2/lesson-3" element={<CSSLesson3 />}></Route>
          <Route path="/section-2/lesson-4" element={<CSSLesson4 />}></Route>
          <Route path="/section-3/lesson-1" element={<JSLesson1 />}></Route>
          <Route path="/section-3/lesson-2" element={<JSLesson2 />}></Route>
          <Route path="/section-3/lesson-3" element={<JSLesson3 />}></Route>
          <Route path="/section-3/lesson-4" element={<JSLesson4 />}></Route>
          <Route path="/section-4/lesson-1" element={<ReactLesson1 />}></Route>
          <Route path="/section-4/lesson-2" element={<ReactLesson2 />}></Route>
          <Route path="/section-4/lesson-3" element={<ReactLesson3 />}></Route>
          <Route path="/section-4/lesson-4" element={<ReactLesson4 />}></Route>
          <Route path="/section-4/lesson-5" element={<ReactLesson5 />}></Route>
          <Route path="/section-4/lesson-6" element={<ReactLesson6 />}></Route>
          <Route path="/section-5/lesson-1" element={<Resume />}></Route>
          <Route path="/section-5/lesson-2" element={<InterviewTips />}></Route>
          <Route path="/section-5/lesson-3" element={<JobApplication />}></Route>
          <Route path="/section-5/lesson-4" element={<Resume />}></Route>
          <Route path="/section-5/lesson-5" element={<Resume />}></Route>
          <Route path="/section-5/lesson-6" element={<Resume />}></Route>
          <Route
            path="/account"
            element={
              <ProtectedRoute>
                <AccountPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
