import { isValid } from "zod";

interface Props {
  userinput: { phonenumber: string; username: string };
  setIsValid: (valid: boolean) => void;
  setErrorPhone: (error: string) => void;
  setErrorUsername: (error: string) => void;
}

const validatePhoneNumber = ({
  userinput,
  setIsValid,
  setErrorPhone,
  setErrorUsername,
}: Props) => {
  let { phonenumber, username } = userinput;

  if (phonenumber.length == 0 && username.length == 0) {
    setIsValid(false);
    setErrorUsername("Invalid username");
    setErrorPhone("Invalid phone number");
    setIsValid(false);
    return;
  }
  if (phonenumber.length != 0) {
    const isValidPhone = validateTelephoneNumber(phonenumber);
    let str = isValidPhone ? "" : "Invalid phone number";
    setErrorPhone(str);
    setIsValid(false);
  }
  if (username.length != 0) {
    const isValidUsername = validateUsername(username);
    let str = isValidUsername ? "" : "Invalid username";
    setErrorUsername(str);
    setIsValid(false);
  }
  if (phonenumber.length != 0 && username.length != 0) {
    const isValidPhone = validateTelephoneNumber(phonenumber);
    const isValidUsername = validateUsername(username);
    if (isValidPhone && isValidUsername) {
      setIsValid(true);
      setErrorPhone("");
      setErrorUsername("");
    }
  }
};

function validateUsername(input: string): boolean {
  const minLength = 2;
  const maxLength = 20;

  if (input.length <= minLength || input.length > maxLength) {
    return false;
  }

  return true;
}

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
