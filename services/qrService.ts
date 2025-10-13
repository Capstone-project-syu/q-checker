import { useQRStore } from "@/store/qrstore";
import dayjs from "dayjs";
import uuid from 'react-native-uuid';

const createQR = (eventName: string, useNFC: boolean, nfcRoom: string, gpsAddress: string) =>  {
    const now = dayjs().format("YYYY-MM-DD");
    useQRStore.getState().addQR({ 
        id: uuid.v4(),
        title: eventName,
        date: now,
        active: true,
        nfc: useNFC,
        nfcRoom: nfcRoom,
        gps: gpsAddress,
    });
}

export const qrService = {
    createQR
}
