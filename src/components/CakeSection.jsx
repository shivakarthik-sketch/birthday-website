import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function CakeSection({ setStep }) {
  const [candleLit, setCandleLit] = useState(true);

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
        padding: "20px",
        textAlign: "center",
      }}
    >
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        style={{
          color: "#ffd700",
          fontSize: "clamp(2.5rem,6vw,4rem)",
          marginBottom: "20px",
        }}
      >
        🎂 Birthday Cake 🎂
      </motion.h1>

      <motion.p
        animate={{
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        style={{
          marginBottom: "30px",
          color: "#f5f5f5",
          fontSize: "1.1rem",
        }}
      >
        Make a wish before blowing the candle ✨
      </motion.p>

      <div
        style={{
          position: "relative",
          width: "320px",
          height: "360px",
        }}
      >
        {/* Candle */}

        <div
          style={{
            position: "absolute",
            top: "40px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "14px",
            height: "70px",
            background:
              "linear-gradient(to bottom,#ffffff,#dddddd)",
            borderRadius: "10px",
            zIndex: 5,
          }}
        />

        {/* Flame */}

        <AnimatePresence>
          {candleLit && (
            <motion.div
              initial={{ opacity: 1 }}
              exit={{
                opacity: 0,
                scale: 0,
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [1, 0.8, 1],
              }}
              transition={{
                duration: 0.7,
                repeat: Infinity,
              }}
              style={{
                position: "absolute",
                top: "5px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "25px",
                height: "40px",
                borderRadius: "50%",
                background:
                  "radial-gradient(circle,#fff4a3,#ff9900)",
                boxShadow:
                  "0 0 30px orange,0 0 60px gold",
                zIndex: 10,
              }}
            />
          )}
        </AnimatePresence>

        {/* Smoke after candle */}

        {!candleLit && (
          <motion.div
            initial={{
              opacity: 1,
              y: 0,
            }}
            animate={{
              opacity: 0,
              y: -80,
            }}
            transition={{
              duration: 2,
            }}
            style={{
              position: "absolute",
              top: "20px",
              left: "50%",
              transform: "translateX(-50%)",
              fontSize: "2rem",
            }}
          >
            ☁️
          </motion.div>
        )}

        {/* Cake */}

        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
          style={{
            position: "absolute",
            bottom: 0,
            width: "100%",
          }}
        >
          {/* Layer 3 */}

          <div
            style={{
              width: "140px",
              height: "70px",
              margin: "0 auto",
              borderRadius: "20px",
              background:
                "linear-gradient(135deg,#ff69b4,#ffd700)",
            }}
          />

          {/* Layer 2 */}

          <div
            style={{
              width: "220px",
              height: "85px",
              margin: "-10px auto 0",
              borderRadius: "20px",
              background:
                "linear-gradient(135deg,#ffd700,#fff4a3)",
            }}
          />

          {/* Layer 1 */}

          <div
            style={{
              width: "300px",
              height: "110px",
              margin: "-10px auto 0",
              borderRadius: "25px",
              background:
                "linear-gradient(135deg,#ff69b4,#ffb6c1)",
              boxShadow:
                "0 0 40px rgba(255,105,180,0.3)",
            }}
          />

          <div
            style={{
              marginTop: "15px",
              fontSize: "1.5rem",
            }}
          >
            🌸 ✨ 🎉 ✨ 🌸
          </div>
        </motion.div>
      </div>

      {candleLit ? (
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setCandleLit(false)}
          style={{
            marginTop: "30px",
            padding: "15px 35px",
            borderRadius: "50px",
            border: "none",
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: "1rem",
            color: "white",
            background:
              "linear-gradient(135deg,#ff69b4,#ffd700)",
          }}
        >
          Blow Out Candle 🕯️
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
            style={{
              marginTop: "25px",
              color: "#ffd700",
            }}
          >
            🎉 Wish Accepted 🎉
          </motion.h2>

          <motion.p
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 0.5,
            }}
            style={{
              maxWidth: "600px",
              marginTop: "15px",
              lineHeight: "1.8",
              color: "#f5f5f5",
            }}
          >
            May this year bring happiness, success,
            beautiful memories, and everything you've been
            wishing for. ✨
          </motion.p>

          <motion.div
            animate={{
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
            style={{
              fontSize: "2rem",
              marginTop: "15px",
            }}
          >
            🎊 ✨ 🎉 ✨ 🎊
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setStep(7)}
            style={{
              marginTop: "25px",
              padding: "15px 35px",
              borderRadius: "50px",
              border: "none",
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: "1rem",
              color: "white",
              background:
                "linear-gradient(135deg,#ff69b4,#ffd700)",
            }}
          >
            Continue ✨
          </motion.button>
        </>
      )}
    </motion.div>
  );
}

export default CakeSection;