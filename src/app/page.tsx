import { styled } from '@pigment-css/react';
import Brand from './public/brand.svg'
import Hero from './Hero'

const Header = styled('header')({
  display: 'flex',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  paddingTop: '17px',
  paddingBottom: '17px',
});

export default function Home() {
  return (
    <>
      <Header>
        <Brand />
      </Header>
      <Hero />
    </>
  );
}
