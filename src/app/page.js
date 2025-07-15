import React from 'react';
import Header from './header';
import Main from './main';
import Recommand from './menu/recommand';
import TakeOut from './takeOut';
import Footer from './footer';

export default function HomePage() {
  return (
    <div>
      <Header />
      <Main />
      <Recommand />
      <TakeOut />
      <Footer />
    </div>
  );
}
