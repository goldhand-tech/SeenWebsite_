interface Props {
  passwords: { password: string; passwordConfirm: string };
  setIsValid: (isValid: boolean) => void;
  setError: (errors: { errosPassword: string; errorConfirm: string }) => void;
}

const validatePassword = (password: string): string => {
  if (password.length < 8) {
    return "Password must be at least 8 characters long";
  }
  if (!/[A-Z]/.test(password)) {
    return "Password must contain at least one uppercase letter";
  }
  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    return "Password must contain at least one symbol";
  }
  return "";
};

const validateConfirmPassword = (
  confirmPassword: string,
  password: string
): string => {
  if (confirmPassword !== password) {
    return "Passwords must match";
  }
  return "";
};

const validatePasswords = ({ passwords, setIsValid, setError }: Props) => {
  let errorPassword = validatePassword(passwords.password);
  let errorPasswordConfirm = validatePassword(passwords.passwordConfirm);

  if (errorPassword.length == 0 && errorPasswordConfirm.length == 0) {
    let same = validateConfirmPassword(
      passwords.password,
      passwords.passwordConfirm
    );
    if (same.length == 0) {
      //set is valid
      //remove all errors
      setIsValid(true);
      setError({ errosPassword: "", errorConfirm: "" });
    } else {
      //set error and invalid
      setIsValid(false);
      setError({
        errosPassword: "",
        errorConfirm: "Please insert same password",
      });
    }
  } else {
    //set error and invalid
    setIsValid(false);
    if (errorPassword.length != 0) {
      setError({
        errosPassword: errorPassword,
        errorConfirm: "",
      });
    } else {
      setError({
        errosPassword: "",
        errorConfirm: "Please insert same password",
      });
    }
  }
};

export { validatePasswords, validateConfirmPassword };
