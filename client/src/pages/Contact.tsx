import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { post } from "../api/client";
import { COMPANY, CONTACT, Shell } from "./Legal";

// Stored with each opt-in as the consent record, so keep it identical to the label shown below.
const SMS_CONSENT_TEXT = `I agree to receive information messages (appointment reminders, account notifications, etc.) from ${COMPANY} at the mobile number provided. Message frequency varies. Message and data rates may apply. For help, reply HELP or email us at ${CONTACT.email}. You can opt out at any time by replying STOP. Consent is not a condition of purchase. See our Terms of Use (infinitylabstechnology.com/terms) and Privacy Policy (infinitylabstechnology.com/privacy).`;

const emptyForm = { fullName: "", email: "", phone: "", message: "", smsConsent: false };

export default function Contact() {
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [error, setError] = useState("");

  const update = (field: keyof typeof emptyForm, value: string | boolean) => setForm(f => ({ ...f, [field]: value }));

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    if (form.smsConsent && !form.phone.trim()) {
      setError("Please enter your mobile number to receive text messages.");
      return;
    }
    setStatus("sending");
    try {
      await post("/contact", { ...form, smsConsentText: form.smsConsent ? SMS_CONSENT_TEXT : undefined });
      setStatus("sent");
      setForm(emptyForm);
    } catch (err) {
      setStatus("idle");
      setError(err instanceof Error ? err.message.replace(/ \(API .*\)$/, "") : "Something went wrong. Please try again.");
    }
  };

  return <Shell title="Contact Us" eyebrow="CONTACT / SMS UPDATES" subtitle="We usually reply within one business day.">
    <p className="legal-intro">Send us a question about a project, NexusFlow, or our services. You can also choose to receive text message updates from {COMPANY}, such as appointment reminders and account notifications, at your mobile number.</p>

    {status === "sent" ? (
      <div className="contact-success" role="status">
        <strong>Thank you — your request has been received.</strong>
        <p>Our team will follow up shortly. If you opted in to text messages, you can reply STOP at any time to opt out or HELP for help.</p>
        <button type="button" className="contact-submit" onClick={() => setStatus("idle")}>Send another message</button>
      </div>
    ) : (
      <form className="contact-form" onSubmit={submit} noValidate>
        <label>Full name<input required autoComplete="name" value={form.fullName} onChange={e => update("fullName", e.target.value)} /></label>
        <label>Email address<input required type="email" autoComplete="email" value={form.email} onChange={e => update("email", e.target.value)} /></label>
        <label>Mobile phone number <small>(optional; required for text messages)</small><input type="tel" autoComplete="tel" placeholder="(808) 555-0123" value={form.phone} onChange={e => update("phone", e.target.value)} /></label>
        <label>How can we help?<textarea rows={5} value={form.message} onChange={e => update("message", e.target.value)} /></label>

        <label className="contact-consent">
          <input type="checkbox" checked={form.smsConsent} onChange={e => update("smsConsent", e.target.checked)} />
          <span>I agree to receive information messages (appointment reminders, account notifications, etc.) from {COMPANY} at the mobile number provided. Message frequency varies. Message and data rates may apply. For help, reply HELP or email us at <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>. You can opt out at any time by replying STOP. Consent is not a condition of purchase. See our <Link to="/terms#sms">Terms of Use</Link> and <Link to="/privacy#sms">Privacy Policy</Link>.</span>
        </label>

        {error && <p className="contact-error" role="alert">{error}</p>}
        <button type="submit" className="contact-submit" disabled={status === "sending"}>{status === "sending" ? "Sending…" : "Submit"}</button>
      </form>
    )}

    <h2>Other ways to reach us</h2>
    <p>Email <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a> or call {CONTACT.phone}. You can also opt in to text messages by texting <strong>START</strong> to {CONTACT.phone}. Mobile opt-in information, including phone numbers and SMS consent, will not be shared with third parties for marketing purposes.</p>
  </Shell>;
}
