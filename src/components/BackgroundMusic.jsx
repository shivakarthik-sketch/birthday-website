import { useEffect, useRef } from "react";

function BackgroundMusic() {
  const audioRef = useRef(null);

  useEffect(() => {
    const playAudio = () => {
      if (audioRef.current) {
        audioRef.current.volume = 0.25;

        audioRef.current.play().catch(() => {});
      }

      document.removeEventListener(
        "click",
        playAudio
      );
    };

    document.addEventListener(
      "click",
      playAudio
    );

    return () =>
      document.removeEventListener(
        "click",
        playAudio
      );
  }, []);

  return (
    <audio
      ref={audioRef}
      src="/music/birthday-piano.mp3"
      loop
    />
  );
}

export default BackgroundMusic;