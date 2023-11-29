import { useRef } from "react";
import "./portfolio.css";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "Masrufak",
      img: "/masrufak.png",
      link: "https://masrufak.com/",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum est repudiandae ullam ab eveniet a labore modi! Distinctio quia, quos eligendi quaerat, iste delectus eos illum dolores deserunt consequatur autem?",
    },

    {
      id: 3,
      title: "Dashboard ",
      link: "https://ali136384.github.io/Dashboard/index.html",
      img: "/dashboard.png",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum est repudiandae ullam ab eveniet a labore modi! Distinctio quia, quos eligendi quaerat, iste delectus eos illum dolores deserunt consequatur autem?",
    },
    {
      id: 4,
      title: "Template 1 ",
      img: "/tem1.png",
      link: "https://ali136384.github.io/ALI-HASENI-TEMP/",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum est repudiandae ullam ab eveniet a labore modi! Distinctio quia, quos eligendi quaerat, iste delectus eos illum dolores deserunt consequatur autem?",
    },
    {
      id: 5,
      title: "Template 2 ",
      img: "/tem2.png",
      link: "https://ali136384.github.io/ALI-HASENI/",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum est repudiandae ullam ab eveniet a labore modi! Distinctio quia, quos eligendi quaerat, iste delectus eos illum dolores deserunt consequatur autem?",
    },
    {
      id: 6,
      title: "Template 3 ",
      link: "https://ali136384.github.io/Ali_Haseni.Work/",
      img: "/tem4.png",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum est repudiandae ullam ab eveniet a labore modi! Distinctio quia, quos eligendi quaerat, iste delectus eos illum dolores deserunt consequatur autem?",
    },
  ];

  const SingleSection = ({ item }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
      target: ref,
      // offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [-180, 100]);
    const isMobile = window.innerWidth <= 768;
    return (
      <>
        <section>
          <div className="container-projects">
            <div className="container">
              <motion.div ref={ref} className="img">
                <img src={item.img} alt="" />
              </motion.div>
              <motion.div
                style={{ y }}
                transition={{ duration: 2 }}
                className="text-project"
              >
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <a href={item.link} target="_blank" rel="noreferrer">
                  <button>{isMobile ? "Visit" : "Visit the Website"}</button>
                </a>
              </motion.div>
            </div>
          </div>
        </section>
      </>
    );
  };

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start center"],
  });

  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  console.log(scaleX);
  return (
    <div className="portfolio" ref={ref}>
      <motion.div className="prgoress">
        <h1>My Work</h1>
        <motion.div style={{ scaleX }} className="prgress-bar"></motion.div>
      </motion.div>
      {projects.map((ele) => {
        return <SingleSection item={ele} key={ele.id} />;
      })}
    </div>
  );
}

export default Portfolio;
