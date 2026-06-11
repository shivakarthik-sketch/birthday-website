import { useState } from "react";
import { motion } from "framer-motion";

function Verification({ setStep }) {
  const [answer, setAnswer] = useState("");
  const [status, setStatus] = useState("idle");
  const [shake, setShake] = useState(false);

  const checkAnswer = () => {
    const normalized = answer.trim().toLowerCase();

    if (normalized === "spoorthi") {
      setStatus("success");

      setTimeout(() => {
        setStep(2);
      }, 1500);
    } else {
      setStatus("error");
      setShake(true);

      setTimeout(() => {
        setShake(false);
      }, 500);
    }
  };

  return (
    <div style={styles.wrapper}>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        style={{
          ...styles.card,
          animation: shake ? "shake 0.4s" : "",
        }}
      >
        <div style={styles.emoji}>🎂✨</div>

        <h1 style={styles.title}>
          Birthday Access Portal
        </h1>

        <p style={styles.subtitle}>
          A special celebration has been prepared.
        </p>

        <p style={styles.question}>
          Who is today's birthday star? 🌸
        </p>

        <input
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          onKeyDown={(e) =>
            e.key === "Enter" && checkAnswer()
          }
          placeholder="Enter your name..."
          style={styles.input}
        />

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.95 }}
          onClick={checkAnswer}
          style={styles.button}
        >
          Unlock Celebration ✨
        </motion.button>

        {status === "success" && (
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{
              color: "#00ff88",
              marginTop: "15px",
            }}
          >
            Welcome, Spoorthi 🎉
          </motion.h3>
        )}

        {status === "error" && (
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{
              color: "#ff6b6b",
              marginTop: "15px",
            }}
          >
            Hmm... try again 😊
          </motion.h3>
        )}
      </motion.div>

      <style>
        {`
        @keyframes shake{
          0%{transform:translateX(0)}
          25%{transform:translateX(-5px)}
          50%{transform:translateX(5px)}
          75%{transform:translateX(-5px)}
          100%{transform:translateX(0)}
        }
      `}
      </style>
    </div>
  );
}

const styles = {
  wrapper: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  },

  card: {
    width: "420px",
    maxWidth: "95%",
    padding: "40px",
    borderRadius: "24px",
    background: "rgba(255,255,255,0.05)",
    backdropFilter: "blur(15px)",
    border: "1px solid rgba(255,255,255,0.1)",
    textAlign: "center",
    boxShadow: "0 0 30px rgba(255,215,0,0.1)",
  },

  emoji: {
    fontSize: "3rem",
    marginBottom: "15px",
  },

  title: {
    color: "#ffd700",
    marginBottom: "10px",
  },

  subtitle: {
    color: "#ddd",
    marginBottom: "15px",
  },

  question: {
    color: "#ffb6c1",
    marginBottom: "20px",
  },

  input: {
    width: "100%",
    padding: "14px",
    borderRadius: "12px",
    border: "1px solid rgba(255,255,255,0.15)",
    background: "rgba(255,255,255,0.05)",
    color: "white",
    marginBottom: "15px",
    outline: "none",
  },

  button: {
    width: "100%",
    padding: "14px",
    border: "none",
    borderRadius: "50px",
    cursor: "pointer",
    fontWeight: "bold",
    color: "white",
    background:
      "linear-gradient(135deg,#ff69b4,#ffd700)",
  },
};

export default Verification;