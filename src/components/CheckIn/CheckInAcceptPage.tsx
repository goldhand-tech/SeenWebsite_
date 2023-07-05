interface Props {
  data: DataCheckIn;
  onClick: (nr: number) => void;
}

interface DataCheckIn {
  location: string;
  time: string;
  usernameWhoInvited: string;
}

export const CheckInAcceptPage = ({ data, onClick }: Props) => {
  return (
    <div className="m-auto">
      {
        <h1 className="checkin-h">
          {data.usernameWhoInvited} has checkined with you at: {data.location}{" "}
          at: {data.time}
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
