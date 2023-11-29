import { useRef } from "react";
import "./parallax.css";
import { motion, useScroll, useTransform } from "framer-motion";
function Parallax({ type }) {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const Ybg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const planetbg = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  return (
    <div
      ref={ref}
      className="parallax"
      style={{
        background:
          type === "Services"
            ? "linear-gradient(180deg , #111132 , #0c0c1d)"
            : "linear-gradient(180deg , #111132 , #505064)",
      }}
    >
      <motion.h1 style={{ y: Ybg }}>
        {type === "Services" ? "What I can Do ?" : "What I did ?"}
      </motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div style={{ y: planetbg }} className="planets"></motion.div>
      <motion.div style={{ x: planetbg }} className="stars"></motion.div>
    </div>
  );
}
export default Parallax;
