import { clsx, type ClassValue } from "clsx";
import { cleaners } from "./mock-data";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function formatCurrency(amount: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0
  }).format(amount);
}

export function getCleanerBySlug(slug: string) {
  return cleaners.find((cleaner) => cleaner.slug === slug);
}

export function calculateBookingTotal(hourlyRate: number, hours: number) {
  const subtotal = hourlyRate * hours;
  const serviceFee = Math.round(subtotal * 0.12);
  return {
    subtotal,
    serviceFee,
    total: subtotal + serviceFee
  };
}
