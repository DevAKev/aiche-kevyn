import { useEffect, useRef, useState } from "react";
import { ReactTyped } from "react-typed";

const Typewriter = ({ text, sound }) => {
  // Ref for the audio element & the typewriter text
  const audioRef = useRef(null);
  const textRef = useRef(null);
  // Track if the sound has already played
  const [hasPlayed, setHasPlayed] = useState(false);
  // Restart the animation
  const [restart, setRestart] = useState(0);

  useEffect(() => {
    // Create intersection observer to watch the text
    const textElement = textRef.current;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // Text is not in the viewport, pause the sound
        if (!entry.isIntersecting) {
          audioRef.current.pause();
          // Reset the audio for restart
          audioRef.current.currentTime = 0;
          // Reset hasPlayed
          setHasPlayed(false);
          // Restart the animation
          setRestart((prevRestart) => prevRestart + 1);
        } else if (!hasPlayed) {
          audioRef.current.play();
          // Update state to indicate that the sound has played
          setHasPlayed(true);
        }
      });
    });

    // Start observing the text
    observer.observe(textElement);
    return () => {
      // Stop observing the text
      observer.unobserve(textElement);
    };
  }, [hasPlayed]); // Add hasPlayed to the dependency array

  return (
    <div ref={textRef}>
      {/* Animation TypeWriter */}
      <ReactTyped
        key={restart} // Restart the animation
        className="typewriter-text"
        strings={text}
        typeSpeed={120} // Typing speed
        backSpeed={13} // Backspacing speed
        cursorChar="|"
        smartBackspace
        // loop
      />
      {/* Audio element */}
      <audio ref={audioRef} src={sound} loop={false} />
    </div>
  );
};

export default Typewriter;
