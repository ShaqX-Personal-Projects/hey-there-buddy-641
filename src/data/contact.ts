import { ContactPageData } from "@/types/cms";

export const contactPageData: ContactPageData = {
  introText: "We'd love to hear from you",
  address: {
    street: "Boulevarden 22",
    city: "9000 Aalborg",
    country: "Denmark",
  },
  phone: "26 23 22 49",
  email: "Hairbygranit@hotmail.com",
  byAppointmentOnly: true,
  mapEmbed: {
    enabled: false,
    url: undefined,
  },
  hours: {
    monday: "09:00-21:00",
    tuesday: "09:00-21:00",
    wednesday: "09:00-21:00",
    thursday: "09:00-21:00",
    friday: "09:00-21:00",
    saturday: "09:00-19:00",
    sunday: "Lukket",
  },
  social: {
    instagram: "https://www.instagram.com/hairbygashi_/",
    facebook: "https://www.facebook.com/hairbygashi",
  },
};
