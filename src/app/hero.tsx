'use client'

import { css, styled } from '@pigment-css/react';
import { motion } from 'framer-motion';

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
  textAlign: 'center',
});

const container = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.2,
    }
  }
}

const item = {
  hidden: { 
    y: 100,
    opacity: 0 },
  show: { 
    y: 0,
    opacity: 1,
  }
}


export default function Hero() {
  return (
    <HeroSection>
      <motion.h1 
        className={heading}
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={item}>Better</motion.div>{' '}
        <motion.div variants={item}>Photo</motion.div>{' '}
        <br /> 
        <motion.div variants={item}>for</motion.div>{' '}
        <motion.div variants={item}>less</motion.div>
      </motion.h1>
    </HeroSection>
  );
}
