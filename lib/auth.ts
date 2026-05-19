export type AuthRole = "customer" | "cleaner" | "admin";

export type AuthSession = {
  role: AuthRole;
  name: string;
  email: string;
};

type DemoAccount = AuthSession & {
  password: string;
  redirectTo: string;
};

export const AUTH_STORAGE_KEY = "weclean-session";
export const AUTH_CHANGE_EVENT = "weclean-auth-change";

export const demoAccounts: Record<AuthRole, DemoAccount> = {
  customer: {
    role: "customer",
    name: "Priya Shah",
    email: "priya@example.com",
    password: "password",
    redirectTo: "/dashboard/customer"
  },
  cleaner: {
    role: "cleaner",
    name: "Maya Chen",
    email: "maya@weclean.test",
    password: "password",
    redirectTo: "/dashboard/cleaner"
  },
  admin: {
    role: "admin",
    name: "Admin",
    email: "admin@weclean.test",
    password: "password",
    redirectTo: "/dashboard/admin"
  }
};

export function authenticate(role: AuthRole, email: string, password: string) {
  const account = demoAccounts[role];

  if (
    email.trim().toLowerCase() === account.email.toLowerCase() &&
    password === account.password
  ) {
    return {
      role: account.role,
      name: account.name,
      email: account.email
    };
  }

  return null;
}

export function getStoredSession(): AuthSession | null {
  if (typeof window === "undefined") {
    return null;
  }

  const raw = window.localStorage.getItem(AUTH_STORAGE_KEY);

  if (!raw) {
    return null;
  }

  try {
    return JSON.parse(raw) as AuthSession;
  } catch {
    window.localStorage.removeItem(AUTH_STORAGE_KEY);
    return null;
  }
}

export function saveSession(session: AuthSession) {
  window.localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(session));
  window.dispatchEvent(new Event(AUTH_CHANGE_EVENT));
}

export function clearSession() {
  window.localStorage.removeItem(AUTH_STORAGE_KEY);
  window.dispatchEvent(new Event(AUTH_CHANGE_EVENT));
}

export function dashboardForRole(role: AuthRole) {
  return demoAccounts[role].redirectTo;
}

export function loginPathForRole(role: AuthRole) {
  if (role === "cleaner") {
    return "/login/cleaner";
  }

  if (role === "admin") {
    return "/login/admin";
  }

  return "/login";
}
