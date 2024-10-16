import { styled } from '@pigment-css/react';

const HeroSection = styled('section')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  height: 'calc(100vh - 53px)',
})

const Heading = styled('h1')({
  margin: 0,
  fontSize: '120px',
  fontWeight: 900,
  lineHeight: 1,
  color: 'var(--black)',
  textAlign: 'center',
})

export default function Hero() {
  return (
    <HeroSection>
      <Heading>Better Photo</Heading>
      <Heading>for less.</Heading>
    </HeroSection>
  );
}