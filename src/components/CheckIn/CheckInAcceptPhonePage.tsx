interface Props {
  sendQuery: (phonenumber: number) => void;
}

export const CheckInAcceptPhonePage = ({ sendQuery }: Props) => {
  return (
    <div className="m-auto">
      <div className="d-flex flex-column justify-content-around">
        <form>
          <div className="form-group">
            <label className={""} htmlFor="phoneInput">
              Enter your phone to confirm:
            </label>
            <input type="text" className="form-control" id="phoneInput" />
          </div>
        </form>
        <button type="button" className="btn btn-primary btn-lg mt-3 ">
          Confirm
        </button>
      </div>
    </div>
  );
};
