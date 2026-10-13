import { createContactRequest } from "./contact.repository.js";

interface CreateContactRequestInput {
  fullName?: string;
  email?: string;
  phone?: string;
  message?: string;
  smsConsent?: boolean;
  smsConsentText?: string;
}

interface RequestMeta {
  ipAddress: string | null;
  userAgent: string | null;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const normalizePhone = (phone: string) => {
  const digits = phone.replace(/\D/g, "");

  if (digits.length === 10) return `+1${digits}`;
  if (digits.length === 11 && digits.startsWith("1")) return `+${digits}`;

  return null;
};

export const submitContactRequest = async (
  input: CreateContactRequestInput,
  meta: RequestMeta
) => {
  const fullName = input.fullName?.trim();
  const email = input.email?.trim().toLowerCase();
  const rawPhone = input.phone?.trim();
  const message = input.message?.trim() || null;
  const smsConsent = input.smsConsent === true;
  const smsConsentText = input.smsConsentText?.trim() || null;

  if (!fullName) {
    throw new Error("Full name is required");
  }

  if (!email || !EMAIL_PATTERN.test(email)) {
    throw new Error("A valid email address is required");
  }

  const phone = rawPhone ? normalizePhone(rawPhone) : null;

  if (rawPhone && !phone) {
    throw new Error("Enter a valid US mobile number");
  }

  if (smsConsent && !phone) {
    throw new Error("A mobile number is required to receive text messages");
  }

  if (smsConsent && !smsConsentText) {
    throw new Error("SMS consent text is required");
  }

  return createContactRequest({
    fullName,
    email,
    phone,
    message,
    smsConsent,
    smsConsentText: smsConsent ? smsConsentText : null,
    ipAddress: meta.ipAddress,
    userAgent: meta.userAgent,
  });
};
