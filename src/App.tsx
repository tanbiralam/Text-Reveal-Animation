import './App.css'
import splitTextUsingRegex from './utils/splitTextUsingRegex'
import { Variants, motion } from 'framer-motion'

const heading = "Elegant Text reveal Effect"
const para = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit optio ex, delectus iste minima expedita dolorem amet dolore ipsam unde?"

const charVariants = {
  hidden: {opacity:0},
  reveal: {opacity:1}
}


function App() {
  const headingChars = splitTextUsingRegex(heading)
  const paraText = splitTextUsingRegex(para)
  

  return (
    <>
      <motion.h1
      initial="hidden"
      whileInView="reveal"
      transition={{staggerChildren:.02}}
      >{headingChars.map(char => (
        <motion.span key={char} transition={{duration: 0.5}} variants={charVariants}>{char}</motion.span>
      ))}</motion.h1>
      <motion.p
      initial="hidden"
      whileInView="reveal"
      transition={{staggerChildren:.015}}

      >{paraText.map(char => (
        <motion.span key={char} transition={{duration: 0.35}} variants={charVariants}>{char}</motion.span>
      ))}</motion.p>
    </>
  )
}

export default App
