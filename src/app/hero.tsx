'use client'
import { useEffect } from 'react';
import { css, styled } from '@pigment-css/react';
import { useAnimate } from 'framer-motion';

const HeroSection = styled('section')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  height: 'calc(100vh - 53px)',
});

const heading = css({
  margin: 0,
  fontSize: '120px',
  fontWeight: 900,
  lineHeight: 1,
  color: 'var(--black)',
  columnGap: '10px',
  justifyContent: 'center',
  textAlign: 'center',
  display: 'flex',
  flexWrap: 'wrap',
  width: '65%',
});

const headingChild = css({
  opacity: 0,
  filter: 'blur(10px)',
})

const styles = {
  y: [100, 0],
  opacity: [0, 1],
  filter: ['blur(10px)', 'blur(0)'],
}

const transition = {
  type: 'spring',
  stiffness: 500,
  damping: 20,
  duration: .1,
}


export default function Hero() {

  const [scope, animate] = useAnimate();


  useEffect(() => {
    const animation = async () => {
      await animate("#better", styles, transition)
      await animate("#media", styles, transition)
      await animate("#for", styles, transition)
      await animate("#less", styles, transition)
    }
    
    animation()
  })

  return (
    <HeroSection ref={scope}>
      <h1 
        className={heading}
      >
        <div className={headingChild} id="better">Better</div>{' '}
        <div className={headingChild} id="media">
          <div id="video">video</div>{' '}
        </div>
        <br /> 
        <div className={headingChild} id="for">for</div>{' '}
        <div className={headingChild} id="less">less</div>
      </h1>
    </HeroSection>
  );
}
