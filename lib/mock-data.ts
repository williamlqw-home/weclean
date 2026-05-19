import type { Booking, Cleaner, Customer, Payment, Review } from "./types";

const reviews: Review[] = [
  {
    id: "review-1",
    customerName: "Priya S.",
    rating: 5,
    date: "2026-04-18",
    comment: "Arrived early, brought a clear checklist, and left the kitchen sparkling."
  },
  {
    id: "review-2",
    customerName: "Marcus L.",
    rating: 5,
    date: "2026-04-06",
    comment: "Very professional and careful around our pets and furniture."
  },
  {
    id: "review-3",
    customerName: "Elena R.",
    rating: 4,
    date: "2026-03-28",
    comment: "Great deep clean and helpful communication before the appointment."
  }
];

export const cleaners: Cleaner[] = [
  {
    id: "cln-1",
    slug: "maya-chen",
    name: "Maya Chen",
    photo:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80",
    location: "Downtown",
    serviceAreas: ["Downtown", "Midtown", "Riverfront"],
    rating: 4.9,
    reviewsCount: 128,
    hourlyRate: 28,
    experienceYears: 6,
    skills: ["Deep cleaning", "Kitchen reset", "Eco products", "Pet-friendly"],
    bio: "Detail-focused cleaner with hotel housekeeping experience and a calm, organized style.",
    cleaningTypes: ["Standard cleaning", "Deep cleaning", "Laundry add-on"],
    availability: [
      { day: "Mon", times: ["09:00", "13:00", "16:00"] },
      { day: "Wed", times: ["10:00", "14:00"] },
      { day: "Sat", times: ["08:00", "12:00"] }
    ],
    verified: true,
    status: "approved",
    profileCompletion: 100,
    portfolio: [
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=900&q=80"
    ],
    documents: {
      identity: "ID verified",
      backgroundCheck: "Cleared"
    },
    reviews
  },
  {
    id: "cln-2",
    slug: "sofia-martin",
    name: "Sofia Martin",
    photo:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=900&q=80",
    location: "Westside",
    serviceAreas: ["Westside", "Lakeshore", "Old Town"],
    rating: 4.8,
    reviewsCount: 94,
    hourlyRate: 32,
    experienceYears: 8,
    skills: ["Move-in cleaning", "Closet care", "Window detailing", "Ironing"],
    bio: "Independent housekeeper known for careful move-in cleans and friendly communication.",
    cleaningTypes: ["Standard cleaning", "Move-in cleaning", "Deep cleaning"],
    availability: [
      { day: "Tue", times: ["09:00", "12:00", "15:00"] },
      { day: "Thu", times: ["11:00", "16:00"] },
      { day: "Sun", times: ["09:00"] }
    ],
    verified: true,
    status: "approved",
    profileCompletion: 96,
    portfolio: [
      "https://images.unsplash.com/photo-1556911220-bda9f7f7597e?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&w=900&q=80"
    ],
    documents: {
      identity: "ID verified",
      backgroundCheck: "Cleared"
    },
    reviews: reviews.slice(0, 2)
  },
  {
    id: "cln-3",
    slug: "amina-rahman",
    name: "Amina Rahman",
    photo:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
    location: "North Park",
    serviceAreas: ["North Park", "Uptown", "Garden District"],
    rating: 4.7,
    reviewsCount: 76,
    hourlyRate: 24,
    experienceYears: 4,
    skills: ["Standard cleaning", "Child-safe products", "Laundry add-on"],
    bio: "Reliable part-time cleaner for recurring apartment and family home cleaning.",
    cleaningTypes: ["Standard cleaning", "Laundry add-on"],
    availability: [
      { day: "Mon", times: ["18:00"] },
      { day: "Fri", times: ["09:00", "13:00"] },
      { day: "Sat", times: ["10:00", "15:00"] }
    ],
    verified: true,
    status: "approved",
    profileCompletion: 92,
    portfolio: [
      "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1603712725038-e9334ae8f39f?auto=format&fit=crop&w=900&q=80"
    ],
    documents: {
      identity: "ID verified",
      backgroundCheck: "Cleared"
    },
    reviews: reviews.slice(1)
  },
  {
    id: "cln-4",
    slug: "lena-brooks",
    name: "Lena Brooks",
    photo:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=80",
    location: "East Village",
    serviceAreas: ["East Village", "Downtown"],
    rating: 4.6,
    reviewsCount: 61,
    hourlyRate: 30,
    experienceYears: 5,
    skills: ["Post-renovation", "Bathroom detailing", "Stain treatment"],
    bio: "Strong choice for detail-heavy cleans after renovation, events, or short-term rentals.",
    cleaningTypes: ["Deep cleaning", "Post-renovation", "Standard cleaning"],
    availability: [
      { day: "Wed", times: ["08:00", "12:00"] },
      { day: "Thu", times: ["09:00", "13:00"] },
      { day: "Sat", times: ["14:00"] }
    ],
    verified: true,
    status: "approved",
    profileCompletion: 89,
    portfolio: [
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=900&q=80"
    ],
    documents: {
      identity: "ID verified",
      backgroundCheck: "Cleared"
    },
    reviews
  },
  {
    id: "cln-5",
    slug: "nora-hill",
    name: "Nora Hill",
    photo:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80",
    location: "South Bay",
    serviceAreas: ["South Bay", "Lakeshore"],
    rating: 0,
    reviewsCount: 0,
    hourlyRate: 23,
    experienceYears: 2,
    skills: ["Standard cleaning", "Laundry add-on"],
    bio: "New marketplace applicant with previous residential cleaning references.",
    cleaningTypes: ["Standard cleaning", "Laundry add-on"],
    availability: [{ day: "Tue", times: ["10:00", "14:00"] }],
    verified: false,
    status: "pending",
    profileCompletion: 82,
    portfolio: [
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=80"
    ],
    documents: {
      identity: "Uploaded",
      backgroundCheck: "Pending"
    },
    reviews: []
  }
];

export const customers: Customer[] = [
  { id: "cus-1", name: "Priya Shah", email: "priya@example.com", location: "Downtown" },
  { id: "cus-2", name: "Marcus Lee", email: "marcus@example.com", location: "Westside" },
  { id: "cus-3", name: "Elena Rossi", email: "elena@example.com", location: "North Park" }
];

export const bookings: Booking[] = [
  {
    id: "BK-1048",
    customerId: "cus-1",
    customerName: "Priya Shah",
    cleanerId: "cln-1",
    cleanerName: "Maya Chen",
    date: "2026-05-14",
    time: "09:00",
    hours: 3,
    cleaningType: "Deep cleaning",
    address: "118 River Street, Apt 8",
    instructions: "Focus on kitchen appliances and guest bathroom.",
    bookingStatus: "Confirmed",
    paymentStatus: "Paid",
    subtotal: 84,
    serviceFee: 10,
    total: 94
  },
  {
    id: "BK-1032",
    customerId: "cus-2",
    customerName: "Marcus Lee",
    cleanerId: "cln-2",
    cleanerName: "Sofia Martin",
    date: "2026-05-03",
    time: "12:00",
    hours: 4,
    cleaningType: "Move-in cleaning",
    address: "402 Lakeshore Drive",
    instructions: "Empty apartment. Please bring supplies.",
    bookingStatus: "Completed",
    paymentStatus: "Paid",
    subtotal: 128,
    serviceFee: 15,
    total: 143
  },
  {
    id: "BK-1019",
    customerId: "cus-3",
    customerName: "Elena Rossi",
    cleanerId: "cln-3",
    cleanerName: "Amina Rahman",
    date: "2026-04-27",
    time: "15:00",
    hours: 2,
    cleaningType: "Standard cleaning",
    address: "76 Garden Lane",
    instructions: "No scented products please.",
    bookingStatus: "Cancelled",
    paymentStatus: "Refunded",
    subtotal: 48,
    serviceFee: 6,
    total: 54
  }
];

export const payments: Payment[] = [
  {
    id: "PAY-7781",
    bookingId: "BK-1048",
    customerName: "Priya Shah",
    amount: 94,
    status: "Paid",
    commission: 14,
    method: "Mock card",
    refundStatus: "Not requested"
  },
  {
    id: "PAY-7743",
    bookingId: "BK-1032",
    customerName: "Marcus Lee",
    amount: 143,
    status: "Paid",
    commission: 21,
    method: "Mock wallet",
    refundStatus: "Not requested"
  },
  {
    id: "PAY-7702",
    bookingId: "BK-1019",
    customerName: "Elena Rossi",
    amount: 54,
    status: "Refunded",
    commission: 0,
    method: "Mock card",
    refundStatus: "Approved"
  }
];

export const cleaningTypes = [
  "Standard cleaning",
  "Deep cleaning",
  "Move-in cleaning",
  "Post-renovation",
  "Laundry add-on"
] as const;

export const locations = [
  "Any location",
  "Downtown",
  "Westside",
  "North Park",
  "East Village",
  "South Bay"
];
