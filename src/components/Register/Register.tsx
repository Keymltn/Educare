import React from "react";
import m from "./Register.module.scss";
import thinkingwomen from "../../assets/thinkingwoman.jpg";

const Register = () => {
  return (
    <div className={m.register_container}>
      <div className={m.register_wrapper}>
        <div className={m["register_info-part"]}>
          <p>Start learning by creating free account and get register</p>
        </div>
        <div className={m["register_img-part"]}>
          <img src={thinkingwomen} alt="Thnking women" />
        </div>
      </div>
    </div>
  );
};

export default Register;
