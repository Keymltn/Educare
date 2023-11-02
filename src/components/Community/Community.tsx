import m from "./Community.module.scss";

const Community = () => {
  return (
    <div className={m.community_container}>
      <div className={m.community}>
        <div className={m["community_info-part"]}>
          <h1>
            Start growing with <br /> our community
          </h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit </p>
          <button>Join community</button>
        </div>
      </div>
    </div>
  );
};

export default Community;
