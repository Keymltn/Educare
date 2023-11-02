import m from "./Online.module.scss";
import womenlearning from "../../assets/learningwoman.png";

const Online = () => {
  return (
    <div className={m.online_container}>
      <div className={m.online_center}>
        <div className={m["online_img-part"]}>
          <img src={womenlearning} alt="Women learning" />
        </div>
        <div className={m["online_info-part"]}>
          <h2>Welcome to the online centers</h2>
          <ul>
            <li>Start learning from your experience</li>
            <li>Enhance your skills with us now</li>
            <li>Do your favorite course</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Online;
