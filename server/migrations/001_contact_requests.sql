BEGIN;

CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- ============================================================
-- CONTACT REQUESTS (public website form + SMS opt-in records)
-- ============================================================

CREATE TABLE IF NOT EXISTS contact_requests (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    full_name VARCHAR(150) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(30),
    message TEXT,

    sms_consent BOOLEAN NOT NULL DEFAULT FALSE,
    sms_consent_text TEXT,
    sms_consented_at TIMESTAMPTZ,

    ip_address VARCHAR(64),
    user_agent TEXT,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_contact_requests_phone ON contact_requests(phone);
CREATE INDEX IF NOT EXISTS idx_contact_requests_created_at ON contact_requests(created_at);

COMMIT;
