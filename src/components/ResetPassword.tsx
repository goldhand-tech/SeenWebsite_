import { useLocation } from "react-router-dom";
import { Input, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { CanceledError, AxiosError } from "axios";
import create from "../services/httpService";

export const ResetPassword = () => {
  const location = useLocation();
  const searchparams = new URLSearchParams(location.search);
  const token = searchparams.get("token");
  const id = searchparams.get("id");
  const httpService = create("/auth/resetPassword");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(true);

  if (!token || !id) {
    throw new Error();
  }

  useEffect(() => {
    setLoading(true);
    const { cancel, req } = http.get();
    req
      .then((e) => {
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        if (err instanceof CanceledError) return;
        setError((err as AxiosError).message);
      });
    return () => cancel();
  }, []);

  if (error) throw new Error();

  //I will need a use query

  const handleSubmit = () => {
    // Handle form submissione
  };

  return isLoading ? (
    <>Loading...</>
  ) : (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="password1" className="form-label">
                New Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password1"
                placeholder="Enter new password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password2" className="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password2"
                placeholder="Confirm new password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Reset Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
