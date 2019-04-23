import React, { Component } from 'react';
import logo from './logo.svg';
import MenuBar from './components/menubar';
import Header from './components/header';
import Story from './components/story';
import Facts from './components/facts';
import Menu from './components/menu';
import Offer from './components/offer';
import Reservation from './components/reservation';
import Chief from './components/cheif';
import Footer from './components/footer';
import './App.css';


class App extends Component {
  render() {
    return (
    <div>
      <MenuBar />
      <Header /> 
      <Story />
      <Facts />
      <Menu />
      <Offer />
      <Reservation />
      <Chief />
      <Footer />
    </div>
    );
  }
}

export default App;
