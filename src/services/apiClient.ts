import axios, { AxiosInstance, AxiosResponse, CanceledError } from "axios";
import { GetCheckInData } from "../hooks/useGetCheckIn";

export interface ResetCredential {
  token: String;
  id: string;
}

export interface ChangePassword {
  password: string;
  token: string;
  id: number;
}

class HttpService {
  endpoint: string;
  axiosInstance: AxiosInstance;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
    this.axiosInstance = axios.create({
      baseURL: "http://127.0.0.1:3000/api/",
    });
  }

  checkResetCredentials = (resetCredential: ResetCredential) => {
    return this.axiosInstance
      .post<boolean>(this.endpoint, resetCredential)
      .then((res) => {
        console.log("Status resulted is" + res.status);
        if (res.status == 200) {
          return true;
        } else if (res.status == 204) {
          return false;
        } else {
          throw new Error("Unhanlded event");
        }
      });
  };

  sendPasswordReset = (
    resetCredential: ChangePassword,
    endpoint: string = "passwordreset"
  ): Promise<boolean> => {
    return this.axiosInstance
      .post<boolean>(endpoint, resetCredential)
      .then((res) => {
        console.log("Status resulted is" + res.status);
        if (res.status == 200) {
          return true;
        } else {
          return false;
        }
      })
      .catch((e) => {
        console.log("Error given" + e.message);
        return false;
      });
  };

  getCheckInData = (
    tokenCheckIn: string,
    endpoint: string = "checkins/inweb"
  ): Promise<GetCheckInData | null> => {
    return this.axiosInstance
      .get<GetCheckInData>(endpoint, {
        headers: {
          "x-checkin-token": tokenCheckIn,
        },
      })
      .then((res) => {
        return res.data as GetCheckInData;
      })
      .catch(() => {
        return null;
      });
  };

  //false on error || or number invalid
  //true on ok
  sendCheckInAnswer = (
    userinput: { username: string; phonenumber: string; time: string },
    token: string,
    status: boolean,
    endpoint: string = "checkins/inweb"
  ): Promise<boolean> => {
    return this.axiosInstance
      .post(endpoint, userinput, {
        headers: {
          "x-checkin-token": token,
        },
      })
      .then((res) => {
        if (res.status == 200) {
          return true;
        } else {
          return false;
        }
      })
      .catch((e) => {
        return false;
      });
  };
}

export { CanceledError, HttpService };
