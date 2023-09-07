import React from 'react';
import {
  Opening,
  AboutUs,
  CarouselSP,
  Members,
  AboutUsDescriptions,
  SocialAccounts,
  Footer,
  WhyChooseUs
} from '../components/index';
export function App({ config, setOption, setShow }) {
  return (
    <>
      <div className='fixed-image'></div>
      <Opening config={config.opening} />
      <AboutUsDescriptions config={config.aboutus} />
      <AboutUs config={config.whatwedo} setOption={setOption} setShow={setShow} />
      <WhyChooseUs config={config.whychooseus} />
      <Members config={config.members} />
      <CarouselSP config={config.partners} />
      <SocialAccounts config={config.socialaccounts} />
      <Footer config={config.footer} />
    </>
  );
}