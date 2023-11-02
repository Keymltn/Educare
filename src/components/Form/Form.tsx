import React from "react";
import m from "./Form.module.scss";

const Form = () => {
  return (
    <div className={m.form_container}>
      <form>
        <input
          type="text"
          className={m["form_input-name"]}
          required
          placeholder="Your name"
        />
        <input
          type="email"
          className={m["form_input-email"]}
          required
          placeholder="Your email address"
        />
        <button>Subscribe</button>
      </form>
    </div>
  );
};

export default Form;
