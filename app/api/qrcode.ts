import axios from "axios";

const API_BASE_URL = "";

export const createQRCode = async (
  event_name: string,
  duration_minutes: number,
  gps_location: string
) => {
  const url = `${API_BASE_URL}/api/events`;

  const response = await axios.post(url, {
    event_name,
    duration_minutes,
    gps_location,
  });

  return response.data;
};