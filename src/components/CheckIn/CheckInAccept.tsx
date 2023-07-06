import { FormEvent, useEffect, useState } from "react";
import { CheckInAppImg } from "./CheckInAppImg";
import { CheckInAcceptPage } from "./CheckInAcceptPage";
import { CheckInAcceptPhonePage } from "./CheckInAcceptPhonePage";
import { useGetCheckInData } from "../../hooks/useGetCheckIn";
import { useLocation, useNavigate } from "react-router-dom";
import { validatePhoneNumber } from "../../services/phoneSchema";
import { HttpService } from "../../services/apiClient";
import { getCurrentTime } from "../../services/getTime";

export const CheckInAccept = () => {
  const location = useLocation();
  const searchparams = new URLSearchParams(location.search);
  const token = searchparams.get("token");
  if (!token) {
    throw new Error();
  }
  let navigate = useNavigate();

  const { data, isLoading, error } = useGetCheckInData(token!);
  const [statusPage, setStatusPage] = useState(0);
  const [userValidation, setUserValidation] = useState({
    error: {
      phoneError: "",
      usernameError: "",
    },
    isValid: false,
  });
  const [userinput, setUserInput] = useState({
    phonenumber: "",
    username: "",
  });
  const accepted = statusPage == 1 ? "1" : "0";

  const setPhoneNumber = (phonenumber: string) => {
    setUserInput((prevState) => ({
      ...prevState,
      phonenumber,
    }));
  };

  const setUsername = (username: string) => {
    setUserInput((prevState) => ({
      ...prevState,
      username,
    }));
  };

  const setIsValid = (isValid: boolean) => {
    setUserValidation((prevState) => ({
      ...prevState,
      isValid: isValid,
    }));
  };

  const setErrorUsername = (error: string) => {
    setUserValidation((prevState) => ({
      ...prevState,
      error: {
        ...prevState.error,
        usernameError: error,
      },
    }));
  };

  const setErrorPhone = (error: string) => {
    setUserValidation((prevState) => ({
      ...prevState,
      error: {
        ...prevState.error,
        phoneError: error,
      },
    }));
  };

  useEffect(() => {
    try {
      validatePhoneNumber({
        userinput,
        setIsValid,
        setErrorPhone,
        setErrorUsername,
      });
    } catch (error) {
      console.error("Error occurred during validatePhoneNumber:", error);
      // Handle the error appropriately (e.g., set an error state, show an error message)
    }
  }, [userinput]);

  const sendQuery = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const service = new HttpService("");
    console.log("The token is" + token);
    let response = await service.sendCheckInAnswer(
      { ...userinput, time: getCurrentTime() },
      token,
      accepted == "1"
    );
    if (response) {
      navigate(`/worked?error=0&page=1&status=${accepted}`);
    } else {
      navigate(`/worked?error=1&page=1&status=${accepted}`);
    }
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
          userValidation={userValidation}
          setPhoneNumber={setPhoneNumber}
          setUsername={setUsername}
        />
      )}
      <CheckInAppImg></CheckInAppImg>
    </div>
  );
};

export default CheckInAccept;
