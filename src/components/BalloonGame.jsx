import { useState } from "react";
import { motion } from "framer-motion";

function BalloonGame({ setStep }) {
  const [popped, setPopped] = useState([]);

  const balloons = [
    {
      message: "🍟 Certified Snack Destroyer",
      top: "20%",
      left: "15%",
      color: "#ff6b81",
    },
    {
      message: "😴 Sleep Champion",
      top: "30%",
      left: "70%",
      color: "#ffd93d",
    },
    {
      message: "📱 Replies After 3 Business Days",
      top: "60%",
      left: "20%",
      color: "#6bcBef",
    },
    {
      message: "🎭 Professional Chaos Creator",
      top: "65%",
      left: "75%",
      color: "#b983ff",
    },
    {
      message: "🎉 Always Brings Fun",
      top: "45%",
      left: "45%",
      color: "#6ee7b7",
    },
  ];

  const popBalloon = (index) => {
    if (!popped.includes(index)) {
      setPopped([...popped, index]);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginTop: "30px",
          color: "gold",
        }}
      >
        🎈 Pop All Balloons 🎈
      </h1>

      <p
        style={{
          textAlign: "center",
        }}
      >
        Popped: {popped.length}/5
      </p>

      {balloons.map((balloon, index) => (
        <motion.div
          key={index}
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 2 + index,
            repeat: Infinity,
          }}
          style={{
            position: "absolute",
            top: balloon.top,
            left: balloon.left,
          }}
        >
          <motion.button
            whileHover={{
              scale: 1.1,
            }}
            whileTap={{
              scale: 0.9,
            }}
            onClick={() => popBalloon(index)}
            style={{
              width: "120px",
              height: "150px",
              borderRadius: "50%",
              border: "none",
              cursor: "pointer",
              background: popped.includes(index)
                ? "#444"
                : balloon.color,
              fontSize: "2rem",
              boxShadow: "0 0 20px rgba(255,255,255,0.3)",
            }}
          >
            {popped.includes(index)
              ? "💥"
              : "🎈"}
          </motion.button>
        </motion.div>
      ))}

      <div
        style={{
          position: "absolute",
          bottom: "80px",
          width: "100%",
          textAlign: "center",
        }}
      >
        {popped.map((index) => (
          <p key={index}>
            {balloons[index].message}
          </p>
        ))}
      </div>

      {popped.length === 5 && (
        <motion.button
          whileHover={{
            scale: 1.1,
          }}
          whileTap={{
            scale: 0.95,
          }}
          onClick={() => setStep(6)}
          style={{
            position: "absolute",
            bottom: "20px",
            left: "50%",
            transform: "translateX(-50%)",
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
    </div>
  );
}

export default BalloonGame;