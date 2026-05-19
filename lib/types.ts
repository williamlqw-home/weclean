export type CleanerStatus = "pending" | "approved" | "rejected" | "suspended";

export type BookingStatus =
  | "Pending cleaner confirmation"
  | "Confirmed"
  | "In progress"
  | "Completed"
  | "Cancelled"
  | "Refunded";

export type PaymentStatus = "Pending" | "Paid" | "Failed" | "Refunded";

export type CleaningType =
  | "Standard cleaning"
  | "Deep cleaning"
  | "Move-in cleaning"
  | "Post-renovation"
  | "Laundry add-on";

export type AvailabilitySlot = {
  day: string;
  times: string[];
};

export type Review = {
  id: string;
  customerName: string;
  rating: number;
  date: string;
  comment: string;
};

export type Cleaner = {
  id: string;
  slug: string;
  name: string;
  photo: string;
  location: string;
  serviceAreas: string[];
  rating: number;
  reviewsCount: number;
  hourlyRate: number;
  experienceYears: number;
  skills: string[];
  bio: string;
  cleaningTypes: CleaningType[];
  availability: AvailabilitySlot[];
  verified: boolean;
  status: CleanerStatus;
  profileCompletion: number;
  portfolio: string[];
  documents: {
    identity: string;
    backgroundCheck: string;
  };
  reviews: Review[];
};

export type Customer = {
  id: string;
  name: string;
  email: string;
  location: string;
};

export type Booking = {
  id: string;
  customerId: string;
  customerName: string;
  cleanerId: string;
  cleanerName: string;
  date: string;
  time: string;
  hours: number;
  cleaningType: CleaningType;
  address: string;
  mapTag?: string;
  instructions: string;
  bookingStatus: BookingStatus;
  paymentStatus: PaymentStatus;
  subtotal: number;
  serviceFee: number;
  total: number;
};

export type Payment = {
  id: string;
  bookingId: string;
  customerName: string;
  amount: number;
  status: PaymentStatus;
  commission: number;
  method: string;
  refundStatus: "Not requested" | "Requested" | "Approved" | "Declined";
};
