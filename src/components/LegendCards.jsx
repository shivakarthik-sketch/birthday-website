import { motion } from "framer-motion";

function LegendCards({ setStep }) {
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
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
      },
    },
  };

  const cards = [
    {
      emoji: "🌸",
      title: "Kind Heart",
      text: "Always caring, supportive, and ready to help the people around her.",
    },
    {
      emoji: "✨",
      title: "Positive Energy",
      text: "Brings smiles, laughter, and good vibes wherever she goes.",
    },
    {
      emoji: "💪",
      title: "Strong & Determined",
      text: "Faces challenges with courage and keeps moving forward.",
    },
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "30px",
        padding: "30px",
      }}
    >
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        style={{
          fontSize: "3rem",
          textAlign: "center",
          color: "#ffd700",
        }}
      >
        ✨ What Makes You Special ✨
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        style={{
          maxWidth: "700px",
          textAlign: "center",
          color: "#dddddd",
          fontSize: "1.1rem",
          lineHeight: "1.8",
        }}
      >
        Every person is unique, but some people leave a positive impact
        wherever they go. These are just a few reasons why today is worth
        celebrating.
      </motion.p>

      {cards.map((card, index) => (
        <motion.div
          key={index}
          variants={cardVariants}
          whileHover={{
            scale: 1.03,
          }}
          style={{
            width: "min(600px, 90vw)",
            padding: "25px",
            borderRadius: "24px",
            background: "rgba(255,255,255,0.05)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255,255,255,0.1)",
            boxShadow: "0 0 20px rgba(255,215,0,0.15)",
          }}
        >
          <h2
            style={{
              color: "#ffd700",
              marginBottom: "12px",
            }}
          >
            {card.emoji} {card.title}
          </h2>

          <p
            style={{
              color: "#f5f5f5",
              lineHeight: "1.7",
            }}
          >
            {card.text}
          </p>
        </motion.div>
      ))}

      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setStep(4)}
        style={{
          marginTop: "10px",
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
        Continue The Journey ✨
      </motion.button>
    </motion.div>
  );
}

export default LegendCards;