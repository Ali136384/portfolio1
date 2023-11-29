import { useState } from "react";
import "./sideBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
export const Sidebar = () => {
  const [open, setOpen] = useState(true);
  console.log(open);
  const variants = {
    closed: {
      height: "60px",
      width: "60px",
      left: "20px",
      top: "10px",
    },
    open: {
      height: "100vh",
      borderRadius: "0",
      width: "400px",
      left: " 0px",
      top: "0",
    },
  };

  const links = ["Homepage", "Services", "Portfolio", "Contact", "About"];

  const ulVariants = {
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.4,
        left: "20px",
      },
    },
    hidden: {
      opacity: 0,
      left: "0",
      transition: { staggerChildren: 0.2, staggerDirection: -1 },
    },
  };
  return (
    <>
      <motion.div
        variants={variants}
        animate={open ? "closed" : "open"}
        className="sidebar"
      >
        <motion.div className="links">
          <p onClick={() => setOpen(!open)}>
            {open ? (
              <FontAwesomeIcon icon={faBars} />
            ) : (
              <FontAwesomeIcon icon={faBarsStaggered} />
            )}
          </p>

          <motion.ul
            initial="hidden"
            animate={open ? "hidden" : "visible"}
            variants={ulVariants}
          >
            {links.map((e) => (
              <motion.a
                whileHover={{ scale: 1.3, transition: 0.3 }}
                variants={ulVariants}
                className="li"
                key={e}
                href={`#${e}`}
                whileTap={{ scale: 0.9 }}
                onClick={() => setOpen(!open)}
              >
                {e}
              </motion.a>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </>
  );
};
