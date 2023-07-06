import { useEffect, useState } from "react";
import { CheckInAppImg } from "./CheckInAppImg";
import { CheckInAcceptPage } from "./CheckInAcceptPage";
import { CheckInAcceptPhonePage } from "./CheckInAcceptPhonePage";
import { useGetCheckInData } from "../../hooks/useGetCheckIn";
import { useLocation } from "react-router-dom";
import { validatePhoneNumber } from "../../services/phoneSchema";

export const CheckInAccept = () => {
  const location = useLocation();
  const searchparams = new URLSearchParams(location.search);
  const token = searchparams.get("token");

  if (!token) {
    throw new Error();
  }

  const { data, isLoading, error } = useGetCheckInData(token!);
  const [statusPage, setStatusPage] = useState(0);
  const [phoneValidation, setPhoneValidation] = useState({
    error: "",
    isValid: false,
  });
  const [phonenumber, setPhoneNumber] = useState("");

  const setIsValid = (isValid: boolean) => {
    setPhoneValidation((prevState) => ({
      ...prevState,
      isValid: isValid,
    }));
  };

  const setError = (error: string) => {
    setPhoneValidation((prevState) => ({
      ...prevState,
      error: error,
    }));
  };

  useEffect(() => {
    validatePhoneNumber({ phonenumber, setIsValid, setError });
  }, [phonenumber]);

  const sendQuery = (phonenumber: number) => {
    console.log("Send phone number" + phonenumber);
  };

  if (isLoading) {
    return (
      <div className={"errorDiv"}>
        <h1>Loading...</h1>
      </div>
    );
  }
  if (error) {
    console.log("Thrown here");
    throw error;
  }
  if (!data)
    return (
      <div className={"errorDiv"}>
        <h2>Sorry, something went wrong, please try again later.</h2>
      </div>
    );

  return (
    <div
      className="d-flex flex-column  align-items-center justify-content-center p-4"
      style={{ height: "90vh" }}
    >
      {statusPage == 0 ? (
        <CheckInAcceptPage dataCheckIn={data!} onClick={setStatusPage} />
      ) : (
        <CheckInAcceptPhonePage
          sendQuery={sendQuery}
          phoneValidation={phoneValidation}
          setPhoneNumber={setPhoneNumber}
        />
      )}
      <CheckInAppImg></CheckInAppImg>
    </div>
  );
};

export default CheckInAccept;
