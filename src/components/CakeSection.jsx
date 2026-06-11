import { useState } from "react";
import { motion } from "framer-motion";

function CakeSection({ setStep }) {
  const [candleLit, setCandleLit] = useState(true);

  const blowCandle = () => {
    setCandleLit(false);
  };

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
        gap: "20px",
      }}
    >
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        style={{
          color: "gold",
          fontSize: "3rem",
        }}
      >
        🎂 Birthday Cake 🎂
      </motion.h1>

      {candleLit && (
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [1, 0.8, 1],
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
          }}
          style={{
            fontSize: "6rem",
          }}
        >
          🕯️
        </motion.div>
      )}

      <motion.div
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        style={{
          fontSize: "10rem",
        }}
      >
        🎂
      </motion.div>

      <motion.p
        animate={{
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      >
        Make a Wish...
      </motion.p>

      {candleLit ? (
        <motion.button
          whileHover={{
            scale: 1.1,
          }}
          whileTap={{
            scale: 0.95,
          }}
          onClick={blowCandle}
          style={{
            padding: "12px 24px",
            background: "gold",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Blow Candle
        </motion.button>
      ) : (
        <>
          <motion.h2
            initial={{
              scale: 0,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            transition={{
              duration: 0.6,
            }}
            style={{
              color: "gold",
            }}
          >
            🎉 Wish Accepted 🎉
          </motion.h2>

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 0.3,
            }}
            style={{
              fontSize: "2rem",
            }}
          >
            ✨ 🎊 🎉 ✨
          </motion.div>

          <motion.button
            whileHover={{
              scale: 1.1,
            }}
            whileTap={{
              scale: 0.95,
            }}
            onClick={() => setStep(7)}
            style={{
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
        </>
      )}
    </motion.div>
  );
}

export default CakeSection;