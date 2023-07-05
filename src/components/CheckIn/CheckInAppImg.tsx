import appBtn from "../../assets/images/app-badge.svg";

export const CheckInAppImg = () => {
  return (
    <div>
      {" "}
      <div className="mt-auto">
        <h3 className="checkin-h3">
          For further actions as posting pictures inviting others or chat,
          continue the app.
        </h3>
        <a
          className="app-store-button"
          href="https://apps.apple.com/ro/app/seen/id6449669738"
        >
          <img src={appBtn} alt="Available on App Store" />
        </a>
      </div>
    </div>
  );
};
