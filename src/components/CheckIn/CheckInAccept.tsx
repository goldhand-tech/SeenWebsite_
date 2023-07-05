import { useState } from "react";
import { CheckInAppImg } from "./CheckInAppImg";
import { CheckInAcceptPage } from "./CheckInAcceptPage";
import { CheckInAcceptPhonePage } from "./CheckInAcceptPhonePage";

export const CheckInAccept = () => {
  const [data, setData] = useState({
    location: "",
    time: "",
    usernameWhoInvited: "",
  });
  const [statusPage, setStatusPage] = useState(0);

  const sendQuery = (phonenumber: number) => {
    console.log("Send phone number");
  };

  return (
    <div
      className="d-flex flex-column  align-items-center justify-content-center p-4"
      style={{ height: "90vh" }}
    >
      {statusPage == 0 ? (
        <CheckInAcceptPage data={data} onClick={setStatusPage} />
      ) : (
        <CheckInAcceptPhonePage sendQuery={sendQuery} />
      )}
      <CheckInAppImg></CheckInAppImg>
    </div>
  );
};

export default CheckInAccept;
