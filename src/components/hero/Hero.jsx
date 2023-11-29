import { motion } from "framer-motion";
import "./hero.css";
export const Hero = () => {
  const variants = {
    initial: { opacity: 0, x: -500 },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.5,
        staggerChildren: 0.1,
        type: "spring",
      },
    },
  };

  const TextVariants = {
    initial: {
      x: 0,
    },
    animate: {
      x: "-350%",
      transition: {
        duration: 14,
        repeat: Infinity,
        repeatType: "mirror",
      },
    },
  };

  return (
    <motion.div className="hero">
      <motion.div className="wrapper">
        <motion.div
          variants={variants}
          initial="initial"
          animate="animate"
          className="text-container"
        >
          <motion.h2 variants={variants} initial="initial" animate="animate">
            ALI HASENI
          </motion.h2>
          <motion.h1 variants={variants} initial="initial" animate="animate">
            Web developer
          </motion.h1>
          <motion.div variants={variants} className="buttons">
            <motion.button variants={variants}>
              See the Latest Works
            </motion.button>
            <motion.button variants={variants}>Contact Me</motion.button>
          </motion.div>
          <motion.img
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 0, y: 10 }}
            transition={{ repeat: Infinity, duration: 2, yoyo: Infinity }}
            className="hero-down-img"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </motion.div>
      <motion.div
        variants={TextVariants}
        initial="initial"
        animate="animate"
        className="slidingTextContainer"
      >
        Human Developer Friend
      </motion.div>
      <motion.div className="imgContainer">
        <motion.img src="/hero.png" alt="" />
      </motion.div>
    </motion.div>
  );
};
