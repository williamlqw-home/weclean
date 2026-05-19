import { DashboardLayout } from "@/components/DashboardLayout";
import { CleanerDashboard } from "@/components/CleanerDashboard";

const navItems = [
  { label: "Overview", href: "/dashboard/cleaner", active: true },
  { label: "Booking requests", href: "/dashboard/cleaner#requests" },
  { label: "Profile upload", href: "/register/cleaner" },
  { label: "Public listing", href: "/cleaners/maya-chen" }
];

export default function CleanerDashboardPage() {
  return (
    <DashboardLayout role="Cleaner" title="Maya Chen" navItems={navItems}>
      <CleanerDashboard />
    </DashboardLayout>
  );
}
