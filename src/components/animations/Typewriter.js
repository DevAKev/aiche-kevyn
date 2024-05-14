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
          // Add a delay before the sound plays
          setTimeout(() => {
            audioRef.current.play();
            // Update state to indicate that the sound has played
            setHasPlayed(true);
          }); // (, 500) Delay
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

  const handleStart = () => {
    if (!hasPlayed) {
      audioRef.current.play();
      setHasPlayed(true);
    }
  };

  return (
    // Wrap the text Typewriter
    <div ref={textRef}>
      {/* Animation TypeWriter */}
      <ReactTyped
        key={restart} // Restart the animation
        className="typewriter-text"
        strings={text}
        typeSpeed={125} // Typing speed
        backSpeed={19} // Backspacing speed
        cursorChar="|"
        smartBackspace
        // startDelay={800} // Delay before typing starts
        onStart={handleStart} // Sync the sound with the typing
        // loop
      />
      {/* Audio element */}
      <audio ref={audioRef} src={sound} loop={false} />
    </div>
  );
};

export default Typewriter;
