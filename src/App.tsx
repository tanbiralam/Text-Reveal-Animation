import "./App.css"; 
import splitTextUsingRegex from "./utils/splitTextUsingRegex"; 
import { motion } from "framer-motion";

// Declaring constants for heading and paragraph text
const heading = "Elegant Text reveal Effect";
const paragraph =
  "The text reveal effect adds a captivating dimension to textual content, enhancing its visual appeal and engagement. As characters gradually unveil themselves, either through fading in or other animated transitions, they draw the viewer's attention with an element of intrigue and anticipation.";

// Object defining variants for animation
const charVariants = {
  hidden: { opacity: 0 }, // Hidden state with opacity 0
  reveal: { opacity: 1 }, // Revealed state with opacity 1
};

// Main App component
function App() {
  // Splitting heading and paragraph text into individual characters
  const headingChars = splitTextUsingRegex(heading);
  const paraText = splitTextUsingRegex(paragraph);

  // Rendering JSX
  return (
    <>
      {/* Animated heading */}
      <motion.h1
        initial="hidden" // Initial animation state
        whileInView="reveal" // Animation state while in view
        transition={{ staggerChildren: 0.05 }} // Staggering animation for each character
      >
        {/* Mapping over each character in heading */}
        {headingChars.map((char) => (
          // Animating each character
          <motion.span
            key={char} // Unique key for React
            transition={{ duration: 0.5 }} // Duration of animation
            variants={charVariants} // Variants for animation
          >
            {char} {/* Displaying the character */}
          </motion.span>
        ))}
      </motion.h1>
      {/* Animated paragraph */}
      <motion.p
        initial="hidden" // Initial animation state
        whileInView="reveal" // Animation state while in view
        transition={{ staggerChildren: 0.02 }} // Staggering animation for each character
      >
        {/* Mapping over each character in paragraph */}
        {paraText.map((char) => (
          // Animating each character
          <motion.span
            key={char} // Unique key for React
            transition={{ duration: 0.35 }} // Duration of animation
            variants={charVariants} // Variants for animation
          >
            {char} {/* Displaying the character */}
          </motion.span>
        ))}
      </motion.p>
      <h2>Made by Tanbir</h2>
    </>
  );
}

export default App; 
