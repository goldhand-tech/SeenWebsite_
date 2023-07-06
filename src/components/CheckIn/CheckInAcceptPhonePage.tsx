interface Props {
  sendQuery: (phonenumber: number) => void;
  phoneValidation: {
    error: string;
    isValid: boolean;
  };
  setPhoneNumber: (phonenumber: string) => void;
}

export const CheckInAcceptPhonePage = ({
  sendQuery,
  phoneValidation,
  setPhoneNumber,
}: Props) => {
  console.log(phoneValidation);
  return (
    <div className="m-auto">
      <div className="d-flex flex-column justify-content-around">
        <form>
          <div className="form-group">
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
        </form>
        {phoneValidation.error.length != 0 ? (
          <p className="mb-0">{phoneValidation.error}</p>
        ) : (
          <></>
        )}
        <button
          type="button"
          className="btn btn-primary btn-lg mt-3"
          disabled={!phoneValidation.isValid}
          onClick={() => sendQuery}
        >
          Confirm
        </button>
      </div>
    </div>
  );
};
