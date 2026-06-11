import { useState } from "react";

function Verification({ setStep }) {
  const [answer, setAnswer] = useState("");
  const [status, setStatus] = useState("idle"); // idle | success | error
  const [shake, setShake] = useState(false);

  const checkAnswer = () => {
    const normalized = answer.trim().toLowerCase();

    if (normalized === "kruthika") {
      setStatus("success");

      setTimeout(() => {
        setStep(2);
      }, 1200);
    } else {
      setStatus("error");

      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
  };

  return (
    <div style={styles.wrapper}>
      <div
        style={{
          ...styles.card,
          transform: shake ? "translateX(0px)" : "translateX(0px)",
          animation: shake ? "shake 0.4s" : "fadeIn 0.6s ease",
          borderColor:
            status === "success"
              ? "#00ff88"
              : status === "error"
              ? "#ff4d4d"
              : "#333",
          boxShadow:
            status === "success"
              ? "0 0 25px #00ff8855"
              : status === "error"
              ? "0 0 25px #ff4d4d55"
              : "0 10px 30px rgba(0,0,0,0.3)",
        }}
      >
        <h1 style={styles.title}>Identity Verification</h1>

        <p style={styles.subtitle}>Who is the birthday legend today?</p>

        <input
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && checkAnswer()}
          placeholder="Enter Name"
          style={styles.input}
        />

        <button onClick={checkAnswer} style={styles.button}>
          Verify Access
        </button>

        <h2
          style={{
            marginTop: "10px",
            color:
              status === "success"
                ? "#00ff88"
                : status === "error"
                ? "#ff4d4d"
                : "transparent",
            transition: "all 0.3s ease",
          }}
        >
          {status === "success"
            ? "ACCESS APPROVED ✨"
            : status === "error"
            ? "ACCESS DENIED. Try Again."
            : ""}
        </h2>
      </div>

      {/* animations */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: scale(0.95); }
            to { opacity: 1; transform: scale(1); }
          }

          @keyframes shake {
            0% { transform: translateX(0); }
            25% { transform: translateX(-6px); }
            50% { transform: translateX(6px); }
            75% { transform: translateX(-6px); }
            100% { transform: translateX(0); }
          }
        `}
      </style>
    </div>
  );
}

const styles = {
  wrapper: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "radial-gradient(circle at top, #1a1a2e, #0f0f1a)",
    fontFamily: "sans-serif",
  },

  card: {
    padding: "30px",
    borderRadius: "16px",
    border: "2px solid #333",
    textAlign: "center",
    width: "320px",
    background: "rgba(20,20,30,0.9)",
    transition: "all 0.3s ease",
  },

  title: {
    color: "white",
    marginBottom: "10px",
  },

  subtitle: {
    color: "#aaa",
    marginBottom: "20px",
    fontSize: "14px",
  },

  input: {
    width: "100%",
    padding: "12px",
    borderRadius: "10px",
    border: "1px solid #444",
    background: "#111",
    color: "white",
    outline: "none",
    marginBottom: "15px",
  },

  button: {
    width: "100%",
    padding: "12px",
    borderRadius: "10px",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold",
    color: "#000",
    background: "linear-gradient(135deg, #FCE881, #F5AF19)",
    transition: "transform 0.2s ease",
  },
};

export default Verification;