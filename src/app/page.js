import React from 'react';
import Header from '@/app/header';
import Main from '@/app/main';
import PaymentWay from '@/app/paymentWay';
import TakeOut from '@/app/takeOut';
import About from '@/app/about';
import Access from '@/app/access';
import Footer from '@/app/footer';

export default function HomePage() {
  return (
    <div>
      <Header />
      <Main />
      <TakeOut />
      <PaymentWay />
      <About />
      <Access />
      <Footer />
    </div>
  );
}
