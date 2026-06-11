import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function BalloonGame({ setStep }) {
  const [popped, setPopped] = useState([]);

  const balloons = [
    {
      id: 1,
      color: "#ff6b81",
      message: "💖 May your year be filled with happiness.",
    },
    {
      id: 2,
      color: "#ffd93d",
      message: "🌟 May all your dreams come true.",
    },
    {
      id: 3,
      color: "#6bcBef",
      message: "🎓 Success in everything you work for.",
    },
    {
      id: 4,
      color: "#b983ff",
      message: "🌸 Endless smiles and beautiful memories.",
    },
    {
      id: 5,
      color: "#6ee7b7",
      message: "🎉 A year full of adventures and joy.",
    },
  ];

  const popBalloon = (index) => {
    if (!popped.includes(index)) {
      setPopped((prev) => [...prev, index]);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "30px 20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{
          color: "#ffd700",
          fontSize: "clamp(2rem,5vw,3.5rem)",
          textAlign: "center",
        }}
      >
        🎈 Birthday Wishes 🎈
      </motion.h1>

      <p
        style={{
          marginTop: "10px",
          color: "#ddd",
          textAlign: "center",
        }}
      >
        Pop every balloon to reveal a special wish ✨
      </p>

      {/* Progress Bar */}

      <div
        style={{
          width: "90%",
          maxWidth: "500px",
          marginTop: "20px",
        }}
      >
        <div
          style={{
            height: "12px",
            borderRadius: "50px",
            background: "rgba(255,255,255,0.1)",
            overflow: "hidden",
          }}
        >
          <motion.div
            animate={{
              width: `${(popped.length / 5) * 100}%`,
            }}
            style={{
              height: "100%",
              background:
                "linear-gradient(90deg,#ff69b4,#ffd700)",
            }}
          />
        </div>

        <p
          style={{
            textAlign: "center",
            marginTop: "10px",
            color: "#ffd700",
          }}
        >
          {popped.length}/5 Wishes Revealed
        </p>
      </div>

      {/* Balloons */}

      <div
        style={{
          width: "100%",
          maxWidth: "900px",
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(150px,1fr))",
          gap: "30px",
          marginTop: "40px",
        }}
      >
        {balloons.map((balloon, index) => (
          <div
            key={balloon.id}
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            {!popped.includes(index) ? (
              <motion.button
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 2 + index,
                  repeat: Infinity,
                }}
                whileHover={{
                  scale: 1.1,
                }}
                whileTap={{
                  scale: 0.8,
                }}
                onClick={() => popBalloon(index)}
                style={{
                  width: "110px",
                  height: "140px",
                  borderRadius: "50%",
                  border: "none",
                  cursor: "pointer",
                  background: balloon.color,
                  fontSize: "2rem",
                  position: "relative",
                  boxShadow:
                    "0 0 30px rgba(255,255,255,0.3)",
                }}
              >
                🎈

                <div
                  style={{
                    position: "absolute",
                    width: "2px",
                    height: "35px",
                    background: "#ccc",
                    bottom: "-35px",
                    left: "50%",
                    transform: "translateX(-50%)",
                  }}
                />
              </motion.button>
            ) : (
              <motion.div
                initial={{
                  scale: 0,
                  rotate: -180,
                }}
                animate={{
                  scale: 1,
                  rotate: 0,
                }}
                style={{
                  fontSize: "3rem",
                }}
              >
                💥
              </motion.div>
            )}
          </div>
        ))}
      </div>

      {/* Wishes */}

      <div
        style={{
          width: "100%",
          maxWidth: "700px",
          marginTop: "40px",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        <AnimatePresence>
          {popped.map((index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
              }}
              style={{
                background:
                  "rgba(255,255,255,0.05)",
                backdropFilter: "blur(10px)",
                border:
                  "1px solid rgba(255,255,255,0.1)",
                padding: "15px",
                borderRadius: "18px",
                textAlign: "center",
              }}
            >
              {balloons[index].message}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Final Unlock */}

      {popped.length === 5 && (
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
              marginTop: "30px",
              color: "#ffd700",
              textAlign: "center",
            }}
          >
            🎉 All Wishes Unlocked 🎉
          </motion.h2>

          <motion.div
            animate={{
              rotate: [0, 8, -8, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            style={{
              fontSize: "4rem",
              marginTop: "10px",
            }}
          >
            🎊✨🎂✨🎊
          </motion.div>

          <motion.button
            whileHover={{
              scale: 1.08,
            }}
            whileTap={{
              scale: 0.95,
            }}
            onClick={() => setStep(6)}
            style={{
              marginTop: "25px",
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
            Continue ✨
          </motion.button>
        </>
      )}
    </div>
  );
}

export default BalloonGame;