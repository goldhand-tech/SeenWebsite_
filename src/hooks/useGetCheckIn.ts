import { useQuery } from "react-query";
import { HttpService } from "../services/apiClient";

export interface GetCheckInData {
  username: string;
  place: string;
  time: string;
}

const useGetCheckInData = (tokenCheckIn: string) => {
  const apiClient = new HttpService("");
  return useQuery<GetCheckInData | null>({
    queryFn: () => apiClient.getCheckInData(tokenCheckIn),
    retry: false,
    refetchOnWindowFocus: false,
  });
};

export { useGetCheckInData };
