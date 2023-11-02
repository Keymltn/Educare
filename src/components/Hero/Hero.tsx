import m from "./Hero.module.scss";
import learningmen from "../../assets/learningprocess.svg";

const Hero = () => {
  return (
    <div className={m.hero_container}>
      <div className={m.hero}>
        <div className={m["hero_info-part"]}>
          <h1>Start learning with us now</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            laboriosam voluptates sed beatae?
          </p>
          <button>Start learning</button>
        </div>
        <div className={m["hero_img-part"]}>
          <img src={learningmen} alt="A boy studying!" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
