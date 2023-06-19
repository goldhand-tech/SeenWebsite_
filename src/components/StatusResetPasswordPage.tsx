import { useLocation } from "react-router-dom";

export const StatusResetPasswordPage = () => {
  const location = useLocation();
  const searchparams = new URLSearchParams(location.search);
  const token = searchparams.get("a");

  const changingPasswordWorked = token == "1";

  return (
    <div className="errorDiv">
      {changingPasswordWorked ? (
        <h2>Password changed lets go</h2>
      ) : (
        <h2>Sorry something went wrong, try again later please</h2>
      )}
    </div>
  );
};
