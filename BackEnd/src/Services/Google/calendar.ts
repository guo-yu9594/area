import { google } from "googleapis";

// Class of service calendar using /services/calendar
class Calendar {
  public calendar: any;

  constructor(oAuth2Client: any) {
    this.calendar = google.calendar({ version: "v3", auth: oAuth2Client });
  }

  // Check Event in calendar with id of event if evenement has passed or not
  async checkEvent(eventId: string): Promise<boolean> {
    const event = await this.calendar.events.get({
      calendarId: "primary",
      eventId: eventId,
    });
    const startTime = event.data.start.dateTime;
    if (new Date(startTime) < new Date()) {
      console.log(`L'événement ${eventId} a été dépassé.`);
      return true;
    } else {
      console.log(`L'événement ${eventId} n'a pas encore été dépassé.`);
      return false;
    }
  }

  // Check if event has been modified
  async checkEventChange(eventId: string, etag: string): Promise<boolean> {
    const event = await this.calendar.events.get({
      calendarId: "primary",
      eventId: eventId,
    });
    if (event.etag !== etag) {
      console.log(`L'événement ${eventId} a été modifié.`);
      return true;
    } else {
      console.log(`L'événement ${eventId} n'a pas été modifié.`);
      return false;
    }
  }

  async checkEventCreated(
    calendarId: string,
    eventId: string
  ): Promise<boolean> {
    try {
      await this.calendar.events.get({ calendarId, eventId });
      console.log(`L'événement ${eventId} existe.`);
      return true;
    } catch (error) {
      if (error.code === 404) {
        console.log(`L'événement ${eventId} n'existe pas.`);
        return false;
      } else {
        throw error;
      }
    }
  }
}

export { Calendar };
