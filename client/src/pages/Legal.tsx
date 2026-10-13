import { useEffect, type ReactNode } from "react";
import { ArrowLeft } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

// Official company details shown on the legal and contact pages. SMS campaign reviewers
// check that these match the details submitted with the Zoom Phone campaign.
export const COMPANY = "Infinity Labs Technologies LLC";
export const CONTACT = {
  email: "support@infinitylabstechnology.com",
  privacyEmail: "privacy@infinitylabstechnology.com",
  phone: "+1 (808) 663-2580",
  address: "520 Lunalilo Home Road, Honolulu, HI 96825, United States",
  state: "the State of Hawaii",
};
const LAST_UPDATED = "October 13, 2026";

export const Shell = ({ title, eyebrow, subtitle = `Last updated: ${LAST_UPDATED}`, children }: { title: string; eyebrow: string; subtitle?: string; children: ReactNode }) => {
  const { hash } = useLocation();
  useEffect(() => {
    if (hash) document.getElementById(hash.slice(1))?.scrollIntoView();
    else window.scrollTo(0, 0);
  }, [hash]);
  return <main className="legal-page">
    <header className="legal-nav">
      <Link to="/" className="intro-brand"><span className="brand-symbol">∞</span><span><strong>Infinity Labs</strong><small>Technologies LLC</small></span></Link>
      <Link to="/" className="legal-back"><ArrowLeft size={15}/> Back to company</Link>
    </header>
    <section className="legal-hero"><span>{eyebrow}</span><h1>{title}</h1><p>{subtitle}</p></section>
    <article className="legal-content">{children}</article>
  </main>;
};

const ContactBlock = ({ email }: { email: string }) => (
  <address className="legal-contact">
    <strong>{COMPANY}</strong>
    <span>{CONTACT.address}</span>
    <span>Email: <a href={`mailto:${email}`}>{email}</a></span>
    <span>Phone / SMS: <a href={`tel:${CONTACT.phone.replace(/[^\d+]/g, "")}`}>{CONTACT.phone}</a></span>
  </address>
);

export function TermsOfService() {
  return <Shell title="Terms of Use" eyebrow="LEGAL / TERMS">
    <p className="legal-intro">These Terms of Use (“Terms”) govern your access to and use of the websites, software, applications, communications, and professional services provided by {COMPANY} (“Infinity Labs,” “we,” “us,” or “our”), including the NexusFlow platform and our SMS messaging program (collectively, the “Services”). By accessing or using the Services, you agree to these Terms on behalf of yourself or the organization you represent. If you do not agree, do not use the Services.</p>

    <h2>1. About us</h2><p>{COMPANY} is a software development and IT services company. We design, build, and support custom software, web and mobile applications, AI-enabled solutions, and business platforms such as NexusFlow for clients and their teams.</p>

    <h2>2. Eligibility and authority</h2><p>You must be at least 18 years old and legally able to enter into a binding agreement to use the Services. If you use the Services on behalf of a company or other organization, you represent that you have authority to bind that organization to these Terms. You agree to provide accurate information and keep it up to date.</p>

    <h2>3. Accounts and security</h2><p>You are responsible for safeguarding your login credentials, limiting access to authorized individuals, and promptly notifying us or your workspace administrator of any suspected unauthorized access. You are responsible for activities performed through your account. Workspace administrators may invite users, assign roles, and manage access for their organization.</p>

    <h2>4. Acceptable use</h2><p>You may use the Services only for lawful business purposes. You agree not to:</p>
    <ul>
      <li>access another user's account or data without authorization;</li>
      <li>probe, scan, disrupt, or overload the Services or circumvent security controls;</li>
      <li>upload or transmit malware or other harmful code;</li>
      <li>reverse engineer the Services except to the extent permitted by law;</li>
      <li>infringe intellectual-property or privacy rights of others; or</li>
      <li>use the Services for fraud, harassment, spam, unlawful surveillance, or any other illegal activity.</li>
    </ul>

    <h2>5. Customer content</h2><p>You and your organization retain all rights in the content you submit to the Services, including customer records, project information, tasks, appointments, and files (“Customer Content”). You grant us a limited license to host, process, transmit, back up, and display Customer Content solely as necessary to provide, secure, maintain, and support the Services, or as otherwise instructed by your organization or required by law. You are responsible for ensuring you have the rights and permissions needed to submit Customer Content.</p>

    <h2>6. Professional services</h2><p>Where we perform software development, consulting, or IT services for you, the scope, deliverables, timelines, fees, acceptance criteria, and ownership of work product are governed by the applicable statement of work, proposal, or services agreement. If such an agreement conflicts with these Terms, the agreement controls for those services.</p>

    <h2 id="sms">7. SMS messaging program</h2>
    <p className="legal-consent">You agree to receive information messages (appointment reminders, account notifications, etc.) from {COMPANY}. Message frequency varies. Message and data rates may apply. For help, reply HELP or email us at <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>. You can opt out at any time by replying STOP.</p>
    <p>Infinity Labs operates an SMS text messaging program (the “Program”) through our business phone system, powered by Zoom Phone, to communicate with clients, prospective clients, and NexusFlow users. By opting in, you agree to the following terms:</p>
    <ul>
      <li><strong>Program description.</strong> Messages are conversational and service-related, including responses to your inquiries, project and support updates, appointment scheduling, confirmations and reminders, and account or service notifications. The Program is not used to send marketing or promotional messages.</li>
      <li><strong>How you opt in.</strong> You opt in by entering your mobile number on our contact form at <Link to="/contact">infinitylabstechnology.com/contact</Link> and checking the SMS consent box, which is not pre-checked. You may also opt in by texting <strong>START</strong> to {CONTACT.phone}. Consent to receive text messages is not a condition of any purchase or service.</li>
      <li><strong>Message frequency.</strong> Message frequency varies based on your interactions with us, such as active projects, support requests, and scheduled appointments.</li>
      <li><strong>Costs.</strong> Message and data rates may apply. Contact your wireless carrier for details about your plan.</li>
      <li><strong>Opting out.</strong> You can cancel at any time by replying <strong>STOP</strong> to any message. You may also reply CANCEL, END, QUIT, UNSUBSCRIBE, or STOPALL. After you opt out, you will receive one final message confirming your request, and no further messages will be sent unless you opt in again. To resume messages, reply <strong>START</strong>.</li>
      <li><strong>Help.</strong> For assistance, reply <strong>HELP</strong> to any message or contact us at <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a> or {CONTACT.phone}.</li>
      <li><strong>Carrier disclaimer.</strong> Wireless carriers are not liable for delayed or undelivered messages. Delivery depends on your carrier and device and is not guaranteed.</li>
      <li><strong>Your number.</strong> You represent that you are the account holder or an authorized user of the mobile number you provide. If you change or deactivate your number, please notify us so we can update our records.</li>
      <li><strong>Privacy.</strong> We handle your mobile number and messaging data as described in our <Link to="/privacy#sms">Privacy Policy</Link>. We do not sell or share your mobile number or SMS opt-in consent with third parties for marketing or promotional purposes.</li>
    </ul>

    <h2>8. Privacy</h2><p>Our collection and use of personal information is described in our <Link to="/privacy">Privacy Policy</Link>, which is incorporated into these Terms. Organizations using NexusFlow are responsible for providing any notices and obtaining any permissions required for personal information they enter into their workspace.</p>

    <h2>9. Intellectual property</h2><p>The Services, including software, source code we provide as a hosted service, visual design, trademarks, and documentation, are owned by {COMPANY} or its licensors and are protected by intellectual-property laws. Subject to these Terms, we grant you a limited, non-exclusive, non-transferable, revocable right to use the Services for your internal business purposes. Ownership of custom work product delivered under a services agreement is governed by that agreement.</p>

    <h2>10. Third-party services</h2><p>The Services may integrate with or rely on third-party products and infrastructure, such as cloud hosting and communications providers. Third-party services are governed by their own terms and policies, and we are not responsible for services we do not control.</p>

    <h2>11. Availability and changes</h2><p>We work to keep the Services reliable and secure, but we do not guarantee uninterrupted or error-free operation. We may perform maintenance, release updates, address security issues, or modify features. We will provide reasonable notice of material changes that significantly affect your use of the Services.</p>

    <h2>12. Fees</h2><p>Fees for paid plans or professional services, including billing periods, taxes, renewals, and cancellation terms, are set out in the applicable order form, proposal, or services agreement presented before purchase.</p>

    <h2>13. Suspension and termination</h2><p>You may stop using the Services at any time. We may suspend or terminate access if reasonably necessary to protect the Services or other users, respond to a security incident, comply with law, address a material breach of these Terms, or resolve non-payment. Where practical, we will provide notice and an opportunity to cure.</p>

    <h2>14. Disclaimers</h2><p>To the maximum extent permitted by law, the Services are provided “as is” and “as available,” without warranties of any kind, whether express or implied, including warranties of merchantability, fitness for a particular purpose, and non-infringement, except as expressly stated in a written agreement with us.</p>

    <h2>15. Limitation of liability</h2><p>To the maximum extent permitted by law, neither party will be liable for any indirect, incidental, special, consequential, or punitive damages, or for any loss of profits, revenue, goodwill, or data, arising out of or related to the Services. Except for obligations that cannot be limited by law, our total liability for any claim relating to the Services will not exceed the amounts you paid to us for the Services in the twelve (12) months preceding the claim.</p>

    <h2>16. Indemnification</h2><p>You agree to indemnify and hold harmless {COMPANY} from claims arising out of your unlawful use of the Services, your violation of these Terms, or Customer Content that infringes the rights of a third party, to the extent permitted by law.</p>

    <h2>17. Governing law</h2><p>These Terms are governed by the laws of {CONTACT.state} and applicable United States federal law, without regard to conflict-of-law principles. Any dispute will be resolved in the state or federal courts located in that state, unless otherwise agreed in writing. Nothing in these Terms limits any rights you have under mandatory consumer-protection law.</p>

    <h2>18. Changes to these Terms</h2><p>We may update these Terms from time to time. The “Last updated” date at the top of this page reflects the latest version. If we make material changes, we will take reasonable steps to notify you. Your continued use of the Services after an update takes effect constitutes acceptance of the revised Terms.</p>

    <h2>19. Contact us</h2><p>If you have questions about these Terms or our SMS program, please contact:</p>
    <ContactBlock email={CONTACT.email} />
  </Shell>;
}

export function PrivacyPolicy() {
  return <Shell title="Privacy Policy" eyebrow="LEGAL / PRIVACY">
    <p className="legal-intro">This Privacy Policy explains how {COMPANY} (“Infinity Labs,” “we,” “us,” or “our”) collects, uses, shares, and protects personal information when you visit our websites, use the NexusFlow platform, engage our software development and IT services, or communicate with us by phone, email, or text message (collectively, the “Services”).</p>

    <h2>1. Information we collect</h2>
    <ul>
      <li><strong>Contact and account information:</strong> name, email address, phone number, company name, job title, login credentials, and role within your organization.</li>
      <li><strong>Workspace information:</strong> content you or your organization enter into NexusFlow, such as customers, projects, tasks, appointments, notifications, and activity logs.</li>
      <li><strong>Communications:</strong> messages, calls, emails, and text messages you exchange with us, including your mobile number and records of your SMS consent and opt-out requests.</li>
      <li><strong>Technical information:</strong> browser type, device information, IP address, log and diagnostic data, and security events generated when you use the Services.</li>
    </ul>

    <h2>2. How we use information</h2><p>We use personal information to:</p>
    <ul>
      <li>provide, operate, and maintain the Services and NexusFlow workspaces;</li>
      <li>create and administer accounts and authenticate users;</li>
      <li>respond to inquiries and deliver project, support, appointment, and account communications, including by text message where you have opted in;</li>
      <li>perform software development and IT services under our agreements with clients;</li>
      <li>monitor reliability, troubleshoot issues, and improve the Services;</li>
      <li>detect, prevent, and respond to fraud, abuse, and security incidents; and</li>
      <li>comply with legal obligations and enforce our agreements.</li>
    </ul>

    <h2 id="sms">3. SMS and text messaging</h2>
    <p className="legal-consent">Mobile opt-in information, including phone numbers and SMS consent, will not be shared with third parties for marketing purposes. We use it only to send the messages you asked for.</p>
    <p>When you opt in to receive text messages from us, we collect your mobile number and your consent records and use them only to send the service-related messages described in our <Link to="/terms#sms">Terms of Use</Link>, such as responses to inquiries, project and support updates, and appointment reminders. Message frequency varies. Message and data rates may apply. Reply <strong>STOP</strong> to opt out at any time or <strong>HELP</strong> for assistance.</p>
    <p><strong>No mobile information will be shared with third parties or affiliates for marketing or promotional purposes. All the above categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.</strong></p>
    <p>Our messaging is delivered through Zoom Phone and the wireless carriers, which process message data solely to transmit messages on our behalf.</p>

    <h2>4. How we share information</h2><p>We do not sell personal information. We share personal information only as follows:</p>
    <ul>
      <li><strong>Service providers</strong> that host, secure, support, or deliver communications for the Services, under contractual obligations to protect the information and use it only to provide services to us;</li>
      <li><strong>Your organization</strong> and its authorized workspace administrators, for information within a NexusFlow workspace;</li>
      <li><strong>Legal requirements</strong>, when required by law, subpoena, or other valid legal process, or to protect the rights, property, or safety of Infinity Labs, our users, or others; and</li>
      <li><strong>Business transfers</strong>, in connection with a merger, acquisition, or sale of assets, subject to equivalent privacy protections.</li>
    </ul>
    <p>Mobile phone numbers and SMS consent data are excluded from all of the sharing described above, except as strictly necessary for our messaging provider to deliver messages you have requested.</p>

    <h2>5. Client and workspace data</h2><p>When we process information on behalf of a client — for example, data stored in a client's NexusFlow workspace or data we access while performing development or IT services — we act as a service provider to that client and process the information according to the client's instructions and our agreement with them. Requests concerning such data should be directed to the relevant client organization, and we will assist them as required.</p>

    <h2>6. Cookies and local storage</h2><p>We use essential cookies and browser storage to keep you signed in, remember preferences, and protect accounts. We do not use advertising cookies. If we introduce analytics or other non-essential technologies, we will update this Policy and provide any required consent options.</p>

    <h2>7. Data security</h2><p>We use administrative, technical, and organizational safeguards designed to protect personal information, including encryption in transit, access controls, role-based permissions, authentication safeguards, and monitoring. No method of transmission or storage is completely secure, and we cannot guarantee absolute security.</p>

    <h2>8. Data retention</h2><p>We retain personal information only as long as necessary for the purposes described in this Policy, including to provide the Services, meet contractual commitments, resolve disputes, and comply with legal obligations. SMS opt-in and opt-out records are retained as needed to honor your preferences and demonstrate compliance. When information is no longer needed, we delete or de-identify it.</p>

    <h2>9. Your rights and choices</h2><p>Depending on where you live, you may have the right to request access to, correction of, deletion of, or a copy of your personal information, and to object to or restrict certain processing. You may opt out of text messages at any time by replying STOP, and out of non-essential emails by using the unsubscribe link or contacting us. To exercise your rights, contact us using the details below. We will not discriminate against you for exercising your privacy rights.</p>

    <h2>10. International transfers</h2><p>We are based in the United States, and information may be processed in the United States and other countries where we or our service providers operate. Where required, we use appropriate safeguards for cross-border transfers.</p>

    <h2>11. Children's privacy</h2><p>The Services are intended for businesses and individuals 18 years of age or older. We do not knowingly collect personal information from children under 13. If you believe a child has provided us personal information, please contact us and we will delete it.</p>

    <h2>12. Third-party links</h2><p>The Services may link to third-party websites or integrate with external tools whose privacy practices are governed by their own policies. We encourage you to review those policies.</p>

    <h2>13. Changes to this Policy</h2><p>We may update this Policy from time to time. The “Last updated” date at the top of this page reflects the latest version. If we make material changes, we will provide notice through the Services or by other appropriate means.</p>

    <h2>14. Contact us</h2><p>For privacy questions or to exercise your rights, please contact:</p>
    <ContactBlock email={CONTACT.privacyEmail} />
  </Shell>;
}
