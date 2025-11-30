import { BookingPageData } from "@/types/cms";

export const bookingPageData: BookingPageData = {
  policies: [
    {
      title: "Appointment Policy",
      description: "Please note our booking guidelines",
      points: [
        "By appointment only — We operate on a private appointment basis to ensure your complete comfort and privacy.",
        "Consultation included — Every service begins with a personal consultation and color analysis.",
        "Premium time blocks — We allocate sufficient time for each appointment to guarantee an unhurried, exceptional experience.",
      ],
    },
    {
      title: "Cancellation Policy",
      description: "We kindly ask for your consideration",
      points: [
        "48-hour notice required — Please provide at least 48 hours' notice for cancellations or rescheduling.",
        "Late cancellations — Cancellations with less than 48 hours' notice may incur a fee of 50% of the service price.",
        "No-show policy — Missed appointments without notice will be charged at 100% of the service price.",
      ],
    },
  ],
  primaryCTA: {
    label: "Book Appointment",
    url: "https://hair-by-gashi.planway.com/",
  },
  ctaSubtext: "Click the button above to access our booking system",
};
