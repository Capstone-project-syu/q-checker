import EventRequest from "@/types/event-request";
import axios, { AxiosError } from "axios";
import { Alert } from "react-native";

const createQR = async (event: EventRequest) => {
  try {
    const res = await axios.post(`https://api.qchecker.me/events`, {
      eventTitle: event.eventTitle,
      eventDescription: event.eventDescription,
      eventDatetime: event.eventDatetime,
      eventLocation: event.eventLocation,
      latitude: event.latitude,
      longitude: event.longitude,
      validRadius: event.validRadius,
    });
    console.log(res.data);
    Alert.alert("QR 생성 성공", "QR 코드를 생성하였습니다.");
  } catch (e) {
    const errorRes = (e as AxiosError).response;
    console.error("QR 생성 실패:", e);
    Alert.alert(
      "QR 생성 실패",
      "QR 코드를 생성하는 중 문제가 발생했습니다. 다시 시도해주세요."
    );
  }
};

const getEvent = async () => {
  try {
    const res = await axios.get(`https://api.qchecker.me/events/`);
    console.log("Event 조회 성공:", res.data);
    return res.data;
  } catch (e) {
    const errorRes = (e as AxiosError).response;
    console.error("Event 조회 실패:", e);
    Alert.alert(
      "Event 조회 실패",
      "Event를 조회하는 중 문제가 발생했습니다. 다시 시도해주세요."
    );
  }
};

const getQR = async (qrcodeId: number) => {
  try {
    const res = await axios.get(`https://api.qchecker.me/events/${qrcodeId}`);
    console.log("QR 조회 성공:", res.data);
    return res.data;
  } catch (e) {
    const errorRes = (e as AxiosError).response;
    console.error("QR 조회 실패:", e);
    Alert.alert(
      "QR 조회 실패",
      "QR 코드를 조회하는 중 문제가 발생했습니다. 다시 시도해주세요."
    );
  }
};

const getAttendance = async (eventId: number) => {
  try {
    const res = await axios.get(
      `https://api.qchecker.me/attendances/events/${eventId}/`
    );
    console.log("Attendance 조회 성공:", res.data);
    return res.data;
  } catch (e) {
    const errorRes = (e as AxiosError).response;
    console.error("Attendance 조회 실패:", e);
    Alert.alert(
      "Attendance 조회 실패",
      "Attendance를 조회하는 중 문제가 발생했습니다. 다시 시도해주세요."
    );
  }
};

export { createQR, getAttendance, getEvent, getQR };
