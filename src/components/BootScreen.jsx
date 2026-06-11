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
    }, 40);

    return () => clearInterval(timer);
  }, [setStep]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
        textAlign: "center",
      }}
    >
      <motion.h1
        animate={{
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        style={{
          color: "gold",
        }}
      >
        Initializing Birthday Protocol...
      </motion.h1>

      <motion.p
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        🎂 Loading Cake...
      </motion.p>

      <motion.p
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        🎭 Loading Chaos...
      </motion.p>

      <motion.p
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        🎉 Loading One More Year...
      </motion.p>

      <div
        style={{
          width: "350px",
          height: "24px",
          background: "#222",
          borderRadius: "20px",
          overflow: "hidden",
          border: "1px solid rgba(255,215,0,0.3)",
        }}
      >
        <motion.div
          style={{
            height: "100%",
            background:
              "linear-gradient(90deg, gold, #ffd700, #fff4a3)",
            boxShadow: "0 0 15px gold",
            width: `${progress}%`,
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
      >
        {progress}%
      </motion.h2>

      {progress === 100 && (
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
            duration: 0.5,
          }}
          style={{
            color: "gold",
            textShadow: "0 0 20px gold",
          }}
        >
          ACCESS GRANTED ✅
        </motion.h1>
      )}
    </motion.div>
  );
}

export default BootScreen;