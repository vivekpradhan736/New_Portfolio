import React from 'react';
// import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ReactDOM from "react-dom/client";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <>
    <App />
    <ToastContainer />
  </>
);
