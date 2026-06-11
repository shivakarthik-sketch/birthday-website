import { motion } from "framer-motion";

function Achievements({ setStep }) {
  const achievements = [
    {
      icon: "😊",
      title: "Makes People Smile",
      text: "Your positive energy has a way of making ordinary days better."
    },
    {
      icon: "🤝",
      title: "A Great Friend",
      text: "Always there when someone needs support, advice, or encouragement."
    },
    {
      icon: "✨",
      title: "Creates Good Memories",
      text: "The best moments are often the ones shared with you."
    },
    {
      icon: "🌸",
      title: "Kind & Genuine",
      text: "One of the qualities that makes you truly special."
    },
    {
      icon: "🎯",
      title: "Keeps Moving Forward",
      text: "No matter what happens, you continue growing and improving."
    },
    {
      icon: "💖",
      title: "Simply Being You",
      text: "The world is a little brighter because you're in it."
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
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
        padding: "40px 20px",
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
          color: "#ffd700",
          fontSize: "3rem",
          textAlign: "center",
        }}
      >
        🌟 Reasons We Appreciate You 🌟
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        style={{
          maxWidth: "700px",
          textAlign: "center",
          marginTop: "15px",
          color: "#dddddd",
          lineHeight: "1.8",
          fontSize: "1.1rem",
        }}
      >
        Birthdays are not just about getting older.
        They're about celebrating the qualities that make someone special.
      </motion.p>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "25px",
          justifyContent: "center",
          marginTop: "40px",
        }}
      >
        {achievements.map((item, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{
              scale: 1.04,
              y: -5,
            }}
            style={{
              width: "280px",
              minHeight: "220px",
              padding: "25px",
              borderRadius: "20px",
              background: "rgba(255,255,255,0.05)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255,255,255,0.1)",
              boxShadow: "0 0 20px rgba(255,215,0,0.12)",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontSize: "2.5rem",
                marginBottom: "10px",
              }}
            >
              {item.icon}
            </div>

            <h3
              style={{
                color: "#ffd700",
                marginBottom: "12px",
              }}
            >
              {item.title}
            </h3>

            <p
              style={{
                color: "#f5f5f5",
                lineHeight: "1.6",
              }}
            >
              {item.text}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.button
        whileHover={{
          scale: 1.08,
        }}
        whileTap={{
          scale: 0.95,
        }}
        onClick={() => setStep(5)}
        style={{
          marginTop: "50px",
          padding: "14px 30px",
          borderRadius: "50px",
          border: "none",
          cursor: "pointer",
          background:
            "linear-gradient(135deg, #ff69b4, #ffd700)",
          color: "white",
          fontWeight: "bold",
          fontSize: "1rem",
        }}
      >
        Continue ✨
      </motion.button>
    </motion.div>
  );
}

export default Achievements;