import { useLocation } from "react-router-dom";

export const StatusResetPasswordPage = () => {
  const location = useLocation();
  const searchparams = new URLSearchParams(location.search);
  const error = searchparams.get("error");
  const pageMode = searchparams.get("page"); //0 for password //1 for checkin

  const status = searchparams.get("status"); //of checkin acceptance

  const errorFound = error == "0";

  console.log("Status is" + status);
  console.log("Page mode is" + pageMode);

  if (error == null || pageMode == null) {
    throw new Error();
  }

  if (pageMode == "0") {
    return (
      <div className="errorDiv">
        {errorFound ? (
          <h2>Password changed let's go.</h2>
        ) : (
          <h2>Sorry something went wrong, try again later please.</h2>
        )}
      </div>
    );
  } else if (pageMode == "1") {
    return (
      <div className="errorDiv">
        {errorFound ? (
          <h2>
            {status ? "Join your friends to the checkin" : "Maybe next time?"}
          </h2>
        ) : (
          <h2>Sorry something went wrong, try again later please.</h2>
        )}
      </div>
    );
  } else {
    throw new Error();
  }
};
