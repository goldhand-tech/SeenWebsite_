import { FormEvent } from "react";

interface Props {
  sendQuery: (e: FormEvent<HTMLFormElement>) => void;
  userValidation: {
    error: { phoneError: string; usernameError: string };
    isValid: boolean;
  };
  setPhoneNumber: (phonenumber: string) => void;
  setUsername: (username: string) => void;
}

export const CheckInAcceptPhonePage = ({
  sendQuery,
  userValidation,
  setPhoneNumber,
  setUsername,
}: Props) => {
  return (
    <div className="m-auto">
      <div className="d-flex flex-column justify-content-around">
        <form onSubmit={(e) => sendQuery(e)}>
          <div className="form-group mb-0">
            <label className={""} htmlFor="usernameInput">
              Enter username by which others wills see you:
            </label>
            <input
              type="text"
              className="form-control"
              id="usernameInput"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </div>
          {userValidation.error.usernameError.length != 0 ? (
            <p className="mt-0">{userValidation.error.usernameError}</p>
          ) : (
            <></>
          )}
          <div className="form-group mt-2">
            <label className={""} htmlFor="phoneInput">
              Enter your phone to confirm:
            </label>
            <input
              type="text"
              className="form-control"
              id="phoneInput"
              onChange={(e) => {
                setPhoneNumber(e.target.value);
              }}
            />
          </div>
          {userValidation.error.phoneError.length != 0 ? (
            <p className="mb-0">{userValidation.error.phoneError}</p>
          ) : (
            <></>
          )}
          <button
            type="submit"
            className="btn btn-primary btn-lg mt-3"
            disabled={!userValidation.isValid}
          >
            Confirm
          </button>
        </form>
      </div>
    </div>
  );
};
