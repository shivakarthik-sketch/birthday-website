import { motion } from "framer-motion";

function Achievements({ setStep }) {
  const achievements = [
    "🏆 Survived School",
    "🏆 Survived Exams",
    "🏆 Master of Procrastination",
    "🏆 Certified Chaos Creator",
    "🏆 Friendship DLC Installed",
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      x: -50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "40px",
      }}
    >
      <motion.h1
        initial={{
          opacity: 0,
          y: -30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.8,
        }}
        style={{
          color: "gold",
          fontSize: "3rem",
        }}
      >
        Birthday Achievements 🏆
      </motion.h1>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
          marginTop: "30px",
        }}
      >
        {achievements.map((item, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{
              scale: 1.08,
              rotate: 1,
            }}
            style={{
              width: "250px",
              padding: "20px",
              borderRadius: "16px",
              background: "#1a1a1a",
              textAlign: "center",
              boxShadow: "0 0 20px rgba(255,215,0,0.25)",
              cursor: "pointer",
            }}
          >
            {item}
          </motion.div>
        ))}
      </div>

      <motion.button
        whileHover={{
          scale: 1.1,
        }}
        whileTap={{
          scale: 0.95,
        }}
        onClick={() => setStep(5)}
        style={{
          marginTop: "40px",
          padding: "12px 24px",
          background: "gold",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        Continue →
      </motion.button>
    </motion.div>
  );
}

export default Achievements;