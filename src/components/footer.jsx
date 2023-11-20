import style from "./footer.module.css";

function Footer() {
  return (
    <div className={style.wrapper}>
      <div className={style.info}>
        <div className={style.text}>
          <p>VR Foundation</p>
          <p>Copyright © 2023 Yan Valle. All Rights Reserved.</p>
        </div>
        <span className={style.lines}></span>
        <div className={style.links}>
          <a href="https://vrfoundation.org/">
            <p>Website</p>
          </a>{" "}
          |
          <a href="https://info@vrfoundation.org/">
            <p>Contact</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
