import { motion } from "framer-motion";

function HeroReveal({ setStep }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <h1
        style={{
          fontSize: "2rem",
        }}
      >
        🎂🎉 HAPPY BIRTHDAY 🎉🎂
      </h1>

      <motion.h1
        initial={{
          opacity: 0,
          scale: 0.5,
          y: -100,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        style={{
          color: "gold",
          fontSize: "6rem",
          letterSpacing: "8px",
        }}
      >
        KRUTHIKA
      </motion.h1>

      <p
        style={{
          fontSize: "1.2rem",
          opacity: "0.8",
        }}
      >
        Warning: This human has gained another level.
      </p>

      <motion.button
        whileHover={{
          scale: 1.1,
        }}
        whileTap={{
          scale: 0.95,
        }}
        onClick={() => setStep(3)}
        style={{
          color: "black",
          fontSize: "1.5rem",
          marginTop: "20px",
          padding: "12px 24px",
          backgroundColor: "pink",
          border: "none",
          borderRadius: "8px",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        Continue →
      </motion.button>
    </motion.div>
  );
}

export default HeroReveal;