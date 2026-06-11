import { motion } from "framer-motion";

function HeroReveal({ setStep }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        padding: "20px",
        gap: "25px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <motion.div
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{ fontSize: "5rem" }}
      >
        ✨🎂✨
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.1)",
          backdropFilter: "blur(10px)",
          borderRadius: "50px",
          padding: "12px 25px",
          color: "#ffd700",
          fontWeight: "bold",
          letterSpacing: "2px",
        }}
      >
        🎉 LEVEL 20 UNLOCKED 🎉
      </motion.div>

      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        style={{
          color: "#ffb6c1",
          letterSpacing: "5px",
          textTransform: "uppercase",
        }}
      >
        Happy Birthday
      </motion.h3>

      <div style={{ position: "relative" }}>
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
          style={{
            position: "absolute",
            inset: 0,
            filter: "blur(50px)",
            background: "rgba(255,215,0,0.25)",
          }}
        />

        <motion.h1
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          style={{
            position: "relative",
            fontSize: "clamp(3rem, 10vw, 7rem)",
            color: "#ffd700",
            textShadow:
              "0 0 20px rgba(255,215,0,0.8), 0 0 50px rgba(255,215,0,0.4)",
            margin: 0,
          }}
        >
          KRUTHIKA
        </motion.h1>
      </div>

      {/* AI Artwork */}
      <motion.img
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8 }}
        src="/images/hero-art.webp"
        alt="Birthday artwork"
        style={{
          width: "min(90vw, 420px)",
          borderRadius: "24px",
          boxShadow: "0 15px 40px rgba(255, 215, 0, 0.25)",
          border: "3px solid rgba(255,255,255,0.15)",
          objectFit: "cover",
        }}
      />

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        style={{
          maxWidth: "750px",
          fontSize: "1.3rem",
          lineHeight: "1.9",
          color: "#f5f5f5",
        }}
      >
        Today is not just another day.
        <br />
        It's a celebration of someone who brings positivity,
        kindness, laughter, and unforgettable memories
        wherever she goes.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        style={{
          background: "rgba(255,255,255,0.04)",
          borderRadius: "20px",
          padding: "20px",
          maxWidth: "600px",
          border: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        ✨ This birthday experience was created specially for
        you. Enjoy every little surprise waiting ahead. ✨
      </motion.div>

      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setStep(3)}
        style={{
          marginTop: "10px",
          padding: "16px 38px",
          borderRadius: "50px",
          border: "none",
          background: "linear-gradient(135deg,#ff69b4,#ffd700)",
          color: "white",
          fontWeight: "bold",
          fontSize: "1.1rem",
          cursor: "pointer",
          boxShadow: "0 0 25px rgba(255,105,180,0.4)",
        }}
      >
        Begin The Celebration ✨
      </motion.button>
    </motion.div>
  );
}

export default HeroReveal;