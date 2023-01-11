import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Galery from './components/Galery';
import ShopingKart from './components/ShoppingCart';
import ErrorPage from './utilities/ErrorPage';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import flower1 from './images/flor1.PNG';
import flower2 from './images/flor2.PNG';
import characters1 from './images/monitos1.PNG';
import basic1 from './images/sencillo1.PNG';
import blackBow from './images/blackBow.jpeg';
import flowerBow from './images/flowerBow.jpeg';
import characterBow from './images/characterBow.jpeg';
import turtleBow from './images/turtleBow.jpeg';
import { createTheme } from '@mui/material/styles';

import './index.css';

import './i18n.js';

const theme = createTheme({
  palette: {
    primary: {
      main: '#000000'
    },
    secondary: {
      main : '#ffc0cb'
    },
    tertiary: {
      main: '#FFFFFF'
    }
  },
});

const images = [
  { image: flower1, title: "bows", description: "This is a test image"},
  { image: flowerBow, title: "dresses", description: "This is a test image"},
  { image: blackBow, title: "accessories", description: "This is a test image"},
  { image: characters1, title: "shoes", description: "This is a test image"},
  { image: basic1, title: "basics", description: "This is test a image"},
  { image: characterBow, title: "characterBow", description: "This is a test image"},
  { image: turtleBow, title: "turtleBow", description: "This is a test image"},
  { image: flower2, title: "flower2", description: "This is a test image"}
];

const router =  createBrowserRouter([
  {
    path: "/",
    element: <App theme={theme} />,
    errorElement: <ErrorPage />
  },
  {
    path: "/bows",
    element: <Galery title={"BOWS"} images={images} theme={theme} />,
    errorElement: <ErrorPage />
  },
  {
    path: "/dresses",
    element: <Galery title={"DRESSES"} images={images} theme={theme} />,
    errorElement: <ErrorPage />
  },
  {
    path: "/accessories",
    element: <Galery title={"ACCESSORIES"} images={images} theme={theme} />,
    errorElement: <ErrorPage />
  },
  {
    path: "/shoes",
    element: <Galery title={"SHOES"} images={images} theme={theme} />,
    errorElement: <ErrorPage />
  },
  {
    path: "/shoping",
    element: <ShopingKart images={images} theme={theme}/>,
    errorElement: <ErrorPage />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();