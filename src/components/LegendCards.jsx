import { motion } from "framer-motion";

function LegendCards({ setStep }) {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
        flexWrap: "wrap",
        padding: "20px",
        flexDirection: "column",
      }}
    >
      <motion.div
        variants={cardVariants}
        whileHover={{
          scale: 1.05,
        }}
        style={{
          width: "500px",
          padding: "20px",
          borderRadius: "24px",
          background: "#1a1a1a",
          boxShadow: "0 0 20px rgba(255,215,0,0.2)",
        }}
      >
        <h2
          style={{
            color: "gold",
            fontSize: "3rem",
          }}
        >
          Origin Story
        </h2>

        <p>Born: 16 June</p>

        <p>Status: Still causing trouble</p>
      </motion.div>

      <motion.div
        variants={cardVariants}
        whileHover={{
          scale: 1.05,
        }}
        style={{
          width: "500px",
          padding: "20px",
          borderRadius: "24px",
          background: "#1a1a1a",
          boxShadow: "0 0 20px rgba(255,215,0,0.2)",
        }}
      >
        <h2
          style={{
            color: "gold",
            fontSize: "3rem",
          }}
        >
          Special Skills
        </h2>

        <p>✓ Eats First</p>
        <p>✓ Arrives Late</p>
        <p>✓ Sleeps Anywhere</p>
      </motion.div>

      <motion.div
        variants={cardVariants}
        whileHover={{
          scale: 1.05,
        }}
        style={{
          width: "500px",
          padding: "20px",
          borderRadius: "24px",
          background: "#1a1a1a",
          boxShadow: "0 0 20px rgba(255,215,0,0.2)",
        }}
      >
        <h2
          style={{
            color: "gold",
            fontSize: "3rem",
          }}
        >
          Threat Level
        </h2>

        <p>98%</p>

        <p>Dangerously Unsupervised</p>
      </motion.div>

      <motion.button
        whileHover={{
          scale: 1.1,
        }}
        whileTap={{
          scale: 0.95,
        }}
        onClick={() => setStep(4)}
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
    </motion.div>
  );
}

export default LegendCards;