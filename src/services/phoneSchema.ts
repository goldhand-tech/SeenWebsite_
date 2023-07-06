interface Props {
  phonenumber: string;
  setIsValid: (valid: boolean) => void;
  setError: (error: string) => void;
}

const validatePhoneNumber = ({ phonenumber, setIsValid, setError }: Props) => {
  if (phonenumber.length == 0) {
    setIsValid(false);
    setError("Phone number invalid");
    return;
  }
  const isValidPhone = validateTelephoneNumber(phonenumber);
  if (!isValidPhone) {
    setIsValid(false);
    setError("Phone number invalid");
  } else {
    setIsValid(true);
    setError("");
  }
};

function validateTelephoneNumber(input: string): boolean {
  const numberRegex = /^[0-9+]+$/;
  const minLength = 5;
  const maxLength = 20;

  if (input.length < minLength || input.length > maxLength) {
    return false;
  }

  if (!numberRegex.test(input)) {
    return false;
  }

  return true;
}

export { validatePhoneNumber };
