import type { Booking, Cleaner } from "./types";

export async function createMockBooking(booking: Booking) {
  // TODO: Replace with POST /api/bookings once the backend is connected.
  return Promise.resolve({ ...booking, id: `BK-${Date.now()}` });
}

export async function createMockPaymentIntent(amount: number) {
  // TODO: Replace with Stripe/Adyen/etc. payment intent creation on the server.
  return Promise.resolve({
    clientSecret: `mock_secret_${amount}_${Date.now()}`,
    status: "Pending"
  });
}

export async function submitCleanerApplication(cleaner: Partial<Cleaner>) {
  // TODO: Persist profile fields and upload documents/photos to secure storage.
  return Promise.resolve({ ...cleaner, status: "pending" });
}
