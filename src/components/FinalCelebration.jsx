import { motion } from "framer-motion";

function FinalCelebration({ setStep }) {
  const wishes = [
    "🌸 Happiness in every moment",
    "🌟 Success in every goal",
    "💖 Good health and positivity",
    "🎉 Countless beautiful memories",
    "✨ A year filled with opportunities",
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
        padding: "20px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Glow Background */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        style={{
          position: "absolute",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "rgba(255,105,180,0.15)",
          filter: "blur(120px)",
          zIndex: 0,
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
        }}
      >
        <motion.div
          animate={{
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
          style={{
            fontSize: "5rem",
          }}
        >
          🎉✨🎂✨🎉
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
            duration: 1,
            type: "spring",
          }}
          style={{
            color: "#ffd700",
            fontSize: "clamp(3rem, 9vw, 7rem)",
            margin: 0,
            textShadow:
              "0 0 20px rgba(255,215,0,0.7), 0 0 60px rgba(255,215,0,0.4)",
          }}
        >
          HAPPY BIRTHDAY
        </motion.h1>

        <motion.h2
          initial={{
            y: 40,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            delay: 0.5,
          }}
          style={{
            color: "#ffb6c1",
            fontSize: "clamp(2rem, 5vw, 4rem)",
            marginTop: "10px",
          }}
        >
          KRUTHIKA 🌸
        </motion.h2>

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1,
          }}
          style={{
            maxWidth: "800px",
            marginTop: "25px",
            padding: "25px",
            borderRadius: "24px",
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.1)",
            backdropFilter: "blur(15px)",
          }}
        >
          <p
            style={{
              fontSize: "1.2rem",
              lineHeight: "1.9",
              color: "#f5f5f5",
            }}
          >
            Another year completed.
            <br />
            Another chapter written.
            <br />
            Another collection of memories created.
            <br />
            <br />
            May the coming year bring happiness,
            success, peace, adventure,
            and countless reasons to smile.
          </p>
        </motion.div>

        <div
          style={{
            marginTop: "30px",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          {wishes.map((wish, index) => (
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
                delay: 1.3 + index * 0.2,
              }}
              whileHover={{
                scale: 1.03,
              }}
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "16px",
                padding: "14px 25px",
              }}
            >
              {wish}
            </motion.div>
          ))}
        </div>

        <motion.div
          animate={{
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          style={{
            fontSize: "3rem",
            marginTop: "30px",
          }}
        >
          🎊 🎉 ✨ 🎉 🎊
        </motion.div>

        <motion.button
          whileHover={{
            scale: 1.08,
          }}
          whileTap={{
            scale: 0.95,
          }}
          onClick={() => setStep(9)}
          style={{
            marginTop: "25px",
            padding: "16px 36px",
            borderRadius: "50px",
            border: "none",
            cursor: "pointer",
            background:
              "linear-gradient(135deg,#ff69b4,#ffd700)",
            color: "white",
            fontWeight: "bold",
            fontSize: "1rem",
            boxShadow:
              "0 0 25px rgba(255,105,180,0.35)",
          }}
        >
          Final Message ❤️
        </motion.button>
      </div>
    </motion.div>
  );
}

export default FinalCelebration;