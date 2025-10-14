type EventRequest = {
  eventTitle: string,
  eventDescription: string,
  eventDatetime: string,
  eventLocation: string,
  latitude: number,
  longitude: number,
  validRadius: number
}   

export default EventRequest;