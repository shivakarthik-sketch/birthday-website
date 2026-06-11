import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function BootScreen({ setStep }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);

          setTimeout(() => {
            setStep(1);
          }, 1500);

          return 100;
        }

        return prev + 1;
      });
    }, 35);

    return () => clearInterval(timer);
  }, [setStep]);

  const messages = [
    "🌸 Gathering birthday wishes...",
    "🎂 Preparing the cake...",
    "✨ Adding some magic...",
    "🎉 Loading happiness...",
    "💖 Finalizing celebration..."
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
      }}
    >
      <motion.div
        animate={{
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        style={{
          fontSize: "5rem",
          marginBottom: "20px",
        }}
      >
        🎂
      </motion.div>

      <motion.h1
        animate={{
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        style={{
          color: "#ffd700",
          fontSize: "clamp(2rem,5vw,4rem)",
          marginBottom: "20px",
        }}
      >
        Preparing Something Special...
      </motion.h1>

      <div
        style={{
          marginBottom: "25px",
        }}
      >
        {messages.map((msg, index) => (
          <motion.p
            key={index}
            initial={{
              opacity: 0,
              x: -20,
            }}
            animate={{
              opacity: progress > index * 20 ? 1 : 0.2,
              x: 0,
            }}
            style={{
              marginBottom: "10px",
              color: "#dddddd",
            }}
          >
            {msg}
          </motion.p>
        ))}
      </div>

      <div
        style={{
          width: "400px",
          maxWidth: "90%",
          height: "24px",
          background: "rgba(255,255,255,0.08)",
          borderRadius: "50px",
          overflow: "hidden",
          border: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <motion.div
          style={{
            height: "100%",
            width: `${progress}%`,
            background:
              "linear-gradient(90deg,#ff69b4,#ffd700)",
            boxShadow:
              "0 0 20px rgba(255,215,0,0.5)",
          }}
        />
      </div>

      <motion.h2
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
        }}
        style={{
          marginTop: "15px",
          color: "#ffd700",
        }}
      >
        {progress}%
      </motion.h2>

      {progress === 100 && (
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
        >
          <h2
            style={{
              marginTop: "20px",
              color: "#ffb6c1",
            }}
          >
            🎉 Celebration Ready 🎉
          </h2>
        </motion.div>
      )}
    </motion.div>
  );
}

export default BootScreen;