import { motion } from "framer-motion";

function EndScreen() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "20px",
        position: "relative",
      }}
    >
      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
        }}
        style={{
          maxWidth: "850px",
          width: "100%",
          padding: "40px",
          borderRadius: "30px",
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.1)",
          backdropFilter: "blur(15px)",
          boxShadow: "0 0 40px rgba(255,215,0,0.1)",
        }}
      >
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          style={{
            fontSize: "5rem",
          }}
        >
          🌸✨🎂✨🌸
        </motion.div>

        <h1
          style={{
            color: "#ffd700",
            fontSize: "clamp(3rem,8vw,5rem)",
            marginTop: "10px",
          }}
        >
          Happy Birthday
        </h1>

        <h2
          style={{
            color: "#ffb6c1",
            fontSize: "clamp(2rem,5vw,3rem)",
            marginBottom: "25px",
          }}
        >
          Kruthika
        </h2>

        {/* Final AI Artwork */}
        <motion.img
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            delay: 0.8,
            duration: 0.8,
          }}
          src="/images/ending-art.webp"
          alt="Birthday wishes artwork"
          style={{
            width: "min(92vw, 450px)",
            borderRadius: "24px",
            marginBottom: "30px",
            objectFit: "cover",
            border: "3px solid rgba(255,255,255,0.15)",
            boxShadow:
              "0 15px 40px rgba(255,105,180,0.25), 0 0 25px rgba(255,215,0,0.15)",
          }}
        />

        <p
          style={{
            fontSize: "1.25rem",
            lineHeight: "2",
            color: "#f5f5f5",
          }}
        >
          And that's the end of this little birthday adventure.
        </p>

        <p
          style={{
            fontSize: "1.2rem",
            lineHeight: "2",
            color: "#dddddd",
            marginTop: "20px",
          }}
        >
          May this year bring you more happiness,
          more laughter, more achievements,
          more unforgettable memories,
          and countless reasons to smile.
        </p>

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1.5,
          }}
          style={{
            marginTop: "35px",
            padding: "20px",
            borderRadius: "20px",
            background: "rgba(255,255,255,0.03)",
          }}
        >
          <p
            style={{
              fontStyle: "italic",
              color: "#ffd700",
              fontSize: "1.1rem",
            }}
          >
            "Keep being yourself. That's already more than enough."
          </p>
        </motion.div>

        <motion.div
          animate={{
            y: [0, -8, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          style={{
            marginTop: "30px",
            fontSize: "2rem",
          }}
        >
          🎉 🎊 💖 🎊 🎉
        </motion.div>

        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 2,
          }}
          style={{
            marginTop: "30px",
            color: "#aaaaaa",
          }}
        >
          Created with friendship, code, and birthday wishes ❤️
        </motion.p>
      </motion.div>
    </motion.div>
  );
}

export default EndScreen;