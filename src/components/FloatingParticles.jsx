import { motion } from "framer-motion";

function FloatingParticles() {
  const particles = [
    "✨",
    "🌸",
    "⭐",
    "💖",
    "🎉",
    "🌷",
    "💫",
    "🎂",
  ];

  return (
    <>
      {Array.from({ length: 25 }).map((_, index) => {
        const emoji =
          particles[
            Math.floor(Math.random() * particles.length)
          ];

        const left = Math.random() * 100;
        const duration = 10 + Math.random() * 10;
        const delay = Math.random() * 5;
        const size = 1 + Math.random() * 1.5;

        return (
          <motion.div
            key={index}
            initial={{
              y: "110vh",
              x: `${left}vw`,
              opacity: 0,
            }}
            animate={{
              y: "-20vh",
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration,
              delay,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              position: "fixed",
              left: `${left}vw`,
              fontSize: `${size}rem`,
              pointerEvents: "none",
              zIndex: 0,
            }}
          >
            {emoji}
          </motion.div>
        );
      })}
    </>
  );
}

export default FloatingParticles;