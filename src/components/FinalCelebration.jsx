import { motion } from "framer-motion";

function FinalCelebration({ setStep }) {
  const achievements = [
    "🏆 Chaos Creator",
    "🏆 Snack Destroyer",
    "🏆 Friendship DLC Installed",
    "🏆 Certified Legend",
    "🏆 Birthday Boss",
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        gap: "20px",
        overflow: "hidden",
      }}
    >
      <motion.div
        animate={{
          rotate: [0, 3, -3, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        style={{
          fontSize: "3rem",
        }}
      >
        ✨🏆✨
      </motion.div>

      <motion.h1
        initial={{
          scale: 0,
          opacity: 0,
        }}
        animate={{
          scale: 1,
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
        }}
        style={{
          color: "gold",
          fontSize: "6rem",
          margin: 0,
          textShadow: "0 0 20px gold",
        }}
      >
        LEVEL 20
      </motion.h1>

      <motion.h2
        initial={{
          y: 50,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          delay: 0.4,
          duration: 0.6,
        }}
        style={{
          fontSize: "3rem",
          margin: 0,
        }}
      >
        UNLOCKED 🎉
      </motion.h2>

      <div
        style={{
          marginTop: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        {achievements.map((item, index) => (
          <motion.div
            key={index}
            initial={{
              x: -100,
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              delay: 0.8 + index * 0.2,
            }}
            whileHover={{
              scale: 1.05,
            }}
            style={{
              background: "#1a1a1a",
              padding: "12px 24px",
              borderRadius: "12px",
              boxShadow: "0 0 20px rgba(255,215,0,0.25)",
            }}
          >
            {item}
          </motion.div>
        ))}
      </div>

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
        }}
        style={{
          fontSize: "2rem",
          marginTop: "20px",
        }}
      >
        🎉 🎊 ✨ 🎊 🎉
      </motion.div>

      <motion.button
        whileHover={{
          scale: 1.1,
        }}
        whileTap={{
          scale: 0.95,
        }}
        onClick={() => setStep(9)}
        style={{
          padding: "12px 24px",
          background: "gold",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontWeight: "bold",
          marginTop: "20px",
        }}
      >
        Continue →
      </motion.button>
    </motion.div>
  );
}

export default FinalCelebration;