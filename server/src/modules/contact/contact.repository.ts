import pool from "../../database/pool.js";

export interface CreateContactRequestData {
  fullName: string;
  email: string;
  phone: string | null;
  message: string | null;
  smsConsent: boolean;
  smsConsentText: string | null;
  ipAddress: string | null;
  userAgent: string | null;
}

export const createContactRequest = async (
  data: CreateContactRequestData
) => {
  const result = await pool.query(
    `
    INSERT INTO contact_requests (
      full_name,
      email,
      phone,
      message,
      sms_consent,
      sms_consent_text,
      sms_consented_at,
      ip_address,
      user_agent
    )
    VALUES ($1, $2, $3, $4, $5, $6, CASE WHEN $5 THEN NOW() END, $7, $8)
    RETURNING
      id,
      sms_consent,
      created_at
    `,
    [
      data.fullName,
      data.email,
      data.phone,
      data.message,
      data.smsConsent,
      data.smsConsentText,
      data.ipAddress,
      data.userAgent,
    ]
  );

  return result.rows[0];
};
