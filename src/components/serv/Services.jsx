import "./services.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { motion } from "framer-motion";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper/modules";

function Services() {
  const isMobile = window.innerWidth <= 768;

  const mobileVariants = {
    hidden: { x: -50, y: -10, opacity: 0 },
    visible: { x: 0, y: 0, opacity: 1 },
  };

  const desktopVariants = {
    hidden: { x: -1000, y: -200, opacity: 0 },
    visible: { x: 0, y: 0, opacity: 1 },
  };

  const animationVariants = isMobile ? mobileVariants : desktopVariants;

  return (
    <>
      <motion.div
        variants={animationVariants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 3, type: "spring", staggerChildren: 0.2 }}
      >
        <div className="text">
          <p>
            I focus on helping your brand grow <br></br> and move forward
          </p>
          <hr />
        </div>
        <div className="unique-ideas">
          <div className="text-1">
            <img src="/serv.jpeg" alt="" />
            <p>
              <span>Unique</span> Ideas
            </p>
          </div>
          <div className="text-2">
            <p>
              <span>For Your </span> Business
            </p>
            <button>What I know ?</button>
          </div>
        </div>
        {/* <Card></Card> */}
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
        >
          <SwiperSlide className="card-slide">
            <h1>HTML</h1>
            <img src="/html.jpeg" alt="" />
          </SwiperSlide>
          <SwiperSlide className="card-slide">
            <h1>CSS</h1>
            <img src="/css.jpeg" alt="" />
          </SwiperSlide>
          <SwiperSlide className="card-slide">
            <h1>JAVASCRIPT</h1>
            <img src="/js.png" alt="" />
          </SwiperSlide>
          <SwiperSlide className="card-slide">
            <h1>REACT JS</h1>
            <img src="/react.jpeg" alt="" />
          </SwiperSlide>
          <SwiperSlide className="card-slide">
            <h1>REDUX</h1>
            <img src="/redux.png" alt="" />
          </SwiperSlide>{" "}
          <SwiperSlide className="card-slide">
            <h1>TYPESCRIPT</h1>
            <img src="/type.png" alt="" />
          </SwiperSlide>
          <SwiperSlide className="card-slide">
            <h1>TAILWIND</h1>
            <img src="/tailwind.png" alt="" />
          </SwiperSlide>
          <SwiperSlide className="card-slide">
            <h1>BOOTSTRAP</h1>
            <img src="/boot.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide className="card-slide">
            <h1>FRAMER-MOTION</h1>
            <img src="/framer.png" alt="" />
          </SwiperSlide>
          <SwiperSlide className="card-slide">
            <h1>NODE JS</h1>
            <img src="/node.png" alt="" />
          </SwiperSlide>{" "}
          <SwiperSlide className="card-slide">
            <h1> EXPRESS JS</h1>
            <img src="/express.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide className="card-slide">
            <h1>MONGO DB</h1>
            <img src="/mongo.png" alt="" />
          </SwiperSlide>
          <SwiperSlide className="card-slide">
            <h1>SEQUELIZE</h1>
            <img src="/sql.png" alt="" />
          </SwiperSlide>
        </Swiper>
      </motion.div>
    </>
  );
}

export default Services;
