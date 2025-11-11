import { ContactPageData } from "@/types/cms";

export const contactPageData: ContactPageData = {
  introText: "We'd love to hear from you",
  address: {
    area: "Copenhagen",
    country: "Denmark",
  },
  email: "info@hairbygashi.dk",
  byAppointmentOnly: true,
  mapEmbed: {
    enabled: false,
    url: undefined,
  },
  hours: {
    text: "We operate by appointment only to ensure a private, unhurried experience.",
    note: "Book your consultation to discuss availability",
  },
};
