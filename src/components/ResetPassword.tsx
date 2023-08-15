import { useLocation } from "react-router-dom";
import useVerifyCredential from "../hooks/useResetPassword";
import { useEffect, useState } from "react";
import { validatePasswords } from "../services/passwordSchema";
import { HttpService } from "../services/apiClient";
import { useNavigate } from "react-router-dom";

export const ResetPassword = () => {
  const location = useLocation();
  const searchparams = new URLSearchParams(location.search);
  const token = searchparams.get("token");
  const id = searchparams.get("id");
  if (!token || !id) {
    throw new Error();
  }
  let navigate = useNavigate();

  const [passwords, setPasswords] = useState({
    password: "",
    passwordConfirm: "",
  });
  const [errors, setError] = useState({
    errosPassword: "",
    errorConfirm: "",
  });
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    validatePasswords({ passwords, setIsValid, setError });
  }, [passwords.password, passwords.passwordConfirm]);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let password = passwords.password;
    let resetCredential = {
      token: token!,
      id: parseInt(id!),
      password: password!,
    };
    // const service = new HttpService("");
    // let response = await service.sendPasswordReset(resetCredential);
    let response = true;
    if (response) {
      navigate("/worked?error=0&page=0");
    } else {
      navigate("/worked?error=1&page=0");
    }
  };

  const { data, isLoading, error } = useVerifyCredential({ id, token });

  if (isLoading)
    return (
      <div className={"errorDiv"}>
        <h1>Loading...</h1>
      </div>
    );

  if (error) throw error;

  if (!data)
    return (
      <div className={"errorDiv"}>
        <h2>
          Sorry, but the time elapsed, please reset password again, and be sure
          you are in time.
        </h2>
      </div>
    );

  return (
    <div className="container mt-5" style={{ height: "80vh" }}>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                New Password
              </label>
              <input
                type="password"
                onChange={(e) => {
                  setPasswords({ ...passwords, password: e.target.value });
                }}
                className="form-control"
                id="password"
                placeholder="Enter new password"
              />
              {errors.errosPassword.length != 0 && (
                <p>{errors.errosPassword}</p>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label">
                Confirm Password
              </label>
              <input
                onChange={(e) => {
                  setPasswords({
                    ...passwords,
                    passwordConfirm: e.target.value,
                  });
                }}
                type="password"
                className="form-control"
                id="confirmPassword"
                placeholder="Confirm new password"
              />
              {errors.errorConfirm.length != 0 && <p>{errors.errorConfirm}</p>}
            </div>
            <div className="d-grid gap-2">
              <button
                type="submit"
                className="btn btn-primary"
                disabled={!isValid}
              >
                Reset Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
