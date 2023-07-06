import { GetCheckInData } from "../../hooks/useGetCheckIn";

interface Props {
  dataCheckIn: GetCheckInData;
  onClick: (nr: number) => void;
}

export const CheckInAcceptPage = ({ dataCheckIn, onClick }: Props) => {
  return (
    <div className="m-auto">
      {
        <h1 className="checkin-h">
          <span>
            {" "}
            {"@"}
            {dataCheckIn.username}{" "}
          </span>
          has checkined with you at: <span>{dataCheckIn.place} </span> at:{"  "}
          <span>{dataCheckIn.time} </span>
        </h1>
      }
      <div className="d-flex flex-row justify-content-around">
        <button
          onClick={() => onClick(1)}
          type="button"
          className="btn btn-primary btn-lg"
        >
          Accept
        </button>
        <button
          onClick={() => onClick(2)}
          type="button"
          className="btn btn-secondary btn-lg"
        >
          Reject
        </button>
      </div>
    </div>
  );
};
