import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function SecretMessage({ setStep }) {
  const lines = [
    "Dear Spoorthi 💌",
    "",
    "Every year adds another chapter to your story.",
    "",
    "And honestly, this chapter deserves to be celebrated.",
    "",
    "Thank you for the laughter, the conversations, the memories, and all the little moments that made ordinary days more interesting.",
    "",
    "You have a way of bringing positive energy wherever you go.",
    "",
    "I hope this year brings you happiness, success, good health, and countless reasons to smile.",
    "",
    "Keep being yourself.",
    "",
    "The world needs more people like that. ✨",
    "",
    "Happy Birthday, Spoorthi. 🎂🎉❤️",
  ];

  const [visibleLines, setVisibleLines] = useState([]);

  useEffect(() => {
    let current = 0;

    const interval = setInterval(() => {
      setVisibleLines((prev) => [
        ...prev,
        lines[current],
      ]);

      current++;

      if (current >= lines.length) {
        clearInterval(interval);
      }
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.95,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        style={{
          width: "800px",
          maxWidth: "95%",
          background: "rgba(255,255,255,0.05)",
          backdropFilter: "blur(15px)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: "24px",
          padding: "40px",
          textAlign: "center",
          boxShadow: "0 0 40px rgba(255,215,0,0.15)",
        }}
      >
        <h1
          style={{
            color: "#ffd700",
            marginBottom: "30px",
            fontSize: "2.8rem",
          }}
        >
          💌 A Special Message
        </h1>

        {visibleLines.map((line, index) => (
          <motion.p
            key={index}
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            style={{
              fontSize: "1.2rem",
              lineHeight: "1.9",
              marginBottom: "10px",
              color: "#f5f5f5",
            }}
          >
            {line}
          </motion.p>
        ))}

        {visibleLines.length === lines.length && (
          <motion.button
            whileHover={{
              scale: 1.08,
            }}
            whileTap={{
              scale: 0.95,
            }}
            onClick={() => setStep(8)}
            style={{
              marginTop: "30px",
              padding: "14px 30px",
              borderRadius: "50px",
              border: "none",
              cursor: "pointer",
              background:
                "linear-gradient(135deg,#ff69b4,#ffd700)",
              color: "white",
              fontWeight: "bold",
              fontSize: "1rem",
            }}
          >
            One Last Surprise ✨
          </motion.button>
        )}
      </motion.div>
    </div>
  );
}

export default SecretMessage;