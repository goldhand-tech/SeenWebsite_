import { useQuery } from "react-query";
import { HttpService, ResetCredential } from "../services/apiClient";

const useVerifyCredential = (credentials: ResetCredential) => {
  console.log("Trying to fetch");
  const apiClient = new HttpService("passwordreset/verifycredential");

  return useQuery<boolean, Error>({
    queryFn: () => apiClient.checkResetCredentials(credentials),
    retry: false,
    refetchOnWindowFocus: false,
  });
};

export default useVerifyCredential;
