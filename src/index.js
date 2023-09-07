import './css/index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import PageRouter from './router/PageRouter';
import { Provider } from 'react-redux';
import Store from './redux/Store';
import { fetchPosts } from './redux/Action';

Store.dispatch(fetchPosts());

window.addEventListener("scroll", handleAnimations);

function handleAnimations() {
  var elements = document.querySelectorAll(".fade-in");
  var element = document.querySelectorAll(".fade-in-right");
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.add("visible");
    var windowheight = window.innerHeight;
    var revealtop = elements[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if (revealtop < windowheight - revealpoint) {
      elements[i].classList.add("animated");
      elements[i].classList.add("fadeInLeftBig");
      elements[i].classList.remove("visible");
      continue;
    }
    else {
      elements[i].classList.add("visible");
    }
  }
  for (var j = 0; j < element.length; j++) {
    element[j].classList.add("visible");
    var windowheights = window.innerHeight;
    var revealtops = element[j].getBoundingClientRect().top;
    var revealpoints = 150;

    if (revealtops < windowheights - revealpoints) {
      element[j].classList.add("animated");
      element[j].classList.add("fadeInRightBig");
      element[j].classList.remove("visible");
      continue;
    }
    else {
      element[j].classList.add("visible");
    }
  }
}

ReactDOM.render(
  <Provider store={Store}>
    <PageRouter />
  </Provider>
  ,
  document.getElementById('root')
);