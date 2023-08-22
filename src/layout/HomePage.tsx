import pic1 from "../assets/images/checkin1.jpeg";
import pic2 from "../assets/images/checkin_blurred.jpeg";
import pic3 from "../assets/images/invites.jpeg";
import pic4 from "../assets/images/chat.jpeg";
import appBtn from "../assets/images/app-badge.svg";
import { useEffect, useRef } from "react";

export const HomePage = () => {
  const targetWord = "SEEN";
  const delay = 250; // Delay between letter changes (in milliseconds)
  let index = 0;
  const refText = useRef<HTMLHeadingElement>(null);

  const changeLetter = () => {
    let targetLetter = targetWord.charAt(index);

    let currentText =
      refText.current!.textContent!.substring(0, index) + targetLetter;
    refText.current!.textContent = currentText;

    index += 1;
    if (index < targetWord.length) {
      setTimeout(changeLetter, delay);
    }
  };

  useEffect(() => {
    if (refText.current!.textContent!.toLowerCase() === "seen") {
      changeLetter();
    }
  }, []);

  return (
    <>
      <div className="logodiv">
        <h1 ref={refText} className="logodiv-label" id="robotText">
          Seen
        </h1>
        <h2 className="logodiv-sublabel">
          A go out social media app, to make people enjoy more hanging out.
        </h2>
      </div>

      <div className="grid-container">
        <div className="grid-img">
          <img src={pic1} alt="Your Image" />
        </div>
        <div className="grid-text">
          <p>
            <b> Bored? </b>
            <br />
            Join a checkin or create one.
            <br />
            <br />
            This awesome app is designed to supercharge your adventures! Picture
            this: you're all set to go out, but you're clueless about the best
            spot. No worries! Instead of bombarding your buddies with calls,
            just fire up the app and get ready for some serious fun. Simply
            check out the app to see where everyone's at, and with a quick tap,
            send an epic join request. It's the ultimate way to turn your
            outings into unforgettable escapades! This app makes going out
            easier and more fun. Instead of calling friends to find out where
            they are, you can simply check the app and send a join request.
            <br />
            <br />
            <b> More secrets inside the app! </b>
          </p>
        </div>
      </div>

      <div className="grid-container">
        <div className="grid-img reverse">
          <img src={pic2} alt="Your Image" />
        </div>
        <div className="grid-text">
          <p>
            <b> Why blurred pictures? </b>
            <br />
            <br />
            <b> Embrace the mystery and privacy! </b>
            <br />
            <br />
            We all know mystery makes people more curious.
            <br />
            Also maybe you dont want to let everyone know where you at.
          </p>
        </div>
      </div>

      <div className="grid-container">
        <div className="grid-img">
          <img src={pic3} alt="Your Image" />
        </div>
        <div className="grid-text">
          <p>
            <b> Simplify your social plans! </b>
            <br />
            <br />
            <b>
              Imagine effortlessly sending 100 party invites or organizing a
              cinema outing with 10 friends.
            </b>
            <br />
            <br />
            No more endless calls or messages—just send invites and await the
            responses.
            <br />
            <br />
            <em>
              PS: Our app wont bombard you with notifications. Say goodbye to
              being glued to your phone and hello to being present in the
              moment.
            </em>
          </p>
        </div>
      </div>

      <div className="grid-container">
        <div className="grid-img reverse">
          <img src={pic4} alt="Your Image" />
        </div>
        <div className="grid-text">
          <p>
            <b> We all know that what happens in Vegas stay in Vegas. </b>
            <br />
            <br />
            So for the people part of a party whatever they want to discuss
            stays between them, no leaks.
          </p>
          å
        </div>
      </div>

      <a
        className="app-store-button"
        href="https://apps.apple.com/ro/app/seen/id6449669738"
      >
        <img src={appBtn} alt="Available on App Store" />
      </a>
      <footer className="contact-details">
        <h1>
          For any feedback, inquiries, information regarding the app, please
          dont hesitate to contact us at:
          <a className="mail" href="mailto: happy@seen.com">
            happy@seen.com
          </a>
        </h1>
      </footer>
    </>
  );
};
