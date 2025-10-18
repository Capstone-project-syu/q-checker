type EventResponse = {
    eventId: number;
    userId: number;
    eventTitle: string;
    eventDatetime: string;
    eventLocation: string;
    eventDescription: string;
    latitude: number;
    longitude: number;
    validRadius: number;
}


export default EventResponse;