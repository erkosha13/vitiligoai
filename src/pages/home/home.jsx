import Photo from "../../../public/vitiligo.jpg";
import styles from "./home.module.css";

function Home() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.text}>
        <h1>AI-Guide on Vitiligo</h1>
        <p>by Prof. Yan Valle, CEO VR Foundation</p>
      </div>
      <div className={styles.photo}>
        <img src={Photo} alt="" />
      </div>
      <div className={styles.info}>
        <p>
          With this AI-powered guide, inspired by the best-selling &ldquo;A
          No-Nonsense Guide To Vitiligo&rdquo; and the insights of Prof. Yan
          Valle, getting answers has never been easier. It contains the latest
          research, causes and triggers, a spectrum of treatments, and
          essentials like nutrition and mental health.
        </p>
        <p>
          Interacting via familiar chat-bot interface is a breeze. Start by
          asking something like:
        </p>
        <ul>
          <li>How can I explain vitiligo to a 7-year-old?</li>
          <li>What are the latest drug advances for vitiligo?</li>
          <li>Can you suggest natural treatments?</li>
        </ul>
        <p>
          Yan&apos;s AI-assistant is here to help, offering responses in one of
          50 languages 🇺🇳
        </p>
        <p>
          Bear in mind, as our friendly AI keeps learning, it might have its
          quirky moments. For the best chat experience, keep your questions
          clear and simple. If something doesn&apos;t sound quite right, feel
          free to rephrase or ask follow-up questions.
        </p>
        <p>
          Just a gentle reminder: This advanced tool is all about sharing the
          best knowledge. For personal health choices, always talk to a medical
          expert first.
        </p>
        <p>For feedback, please contact us at: info@vrfoundation.org</p>
      </div>
      <button>Open Ai</button>
    </div>
  );
}

export default Home;
