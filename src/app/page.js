import React from 'react';
import Header from '@/app/header';
import Main from '@/app/main';
import Recommand from '@/app/menu/recommand';
import TakeOut from '@/app/takeOut';
import Footer from '@/app/footer';

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
