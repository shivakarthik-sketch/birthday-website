import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function SecretMessage({ setStep }) {
  const lines = [
    "You are impossible to deal with.",
    "Somehow we survived all those classes.",
    "Thanks for always being around.",
    "Hope this year is even crazier than the last one.",
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
    }, 1500);

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
          scale: 0.9,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        style={{
          width: "700px",
          maxWidth: "90%",
          background: "rgba(255,255,255,0.05)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: "24px",
          padding: "40px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            color: "gold",
            marginBottom: "30px",
          }}
        >
          💌 Secret Message
        </h1>

        {visibleLines.map((line, index) => (
          <motion.p
            key={index}
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            style={{
              fontSize: "1.3rem",
              marginBottom: "18px",
              lineHeight: "1.8",
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
              marginTop: "25px",
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
        )}
      </motion.div>
    </div>
  );
}

export default SecretMessage;