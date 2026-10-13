import { useEffect, type ReactNode } from "react";
import { ArrowLeft } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

// Official company details shown on the legal pages. Fill these in before publishing —
// SMS campaign reviewers verify that a real support email, phone number, and address are listed.
const COMPANY = "Infinity Labs Technologies LLC";
const CONTACT = {
  email: "support@infinitylabstechnology.com",
  privacyEmail: "privacy@infinitylabstechnology.com",
  phone: "+1 (808) 663-2580",
  address: "520 Lunalilo Home Road, Honolulu, HI 96825, United States",
  state: "the State of Hawaii",
};
const LAST_UPDATED = "October 13, 2026";

const Shell = ({ title, eyebrow, children }: { title: string; eyebrow: string; children: ReactNode }) => {
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
<<<<<<< Updated upstream
    <section className="legal-hero"><span>{eyebrow}</span><h1>{title}</h1><p>Last updated: {LAST_UPDATED}</p></section>
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
      <li><strong>How you opt in.</strong> You consent to receive text messages from Infinity Labs when you provide your mobile number and check the SMS consent box on our website contact or registration form, when you expressly request text communication from our team in writing or verbally, or when you text our business number first. Consent to receive text messages is not a condition of any purchase or service.</li>
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
=======
    <section className="legal-hero"><span>{eyebrow}</span><h1>{title}</h1><p>Last updated: October 8, 2026</p></section>
    <article className="legal-content">{children}<p className="legal-notice"><strong>Important:</strong> This page is a general product-policy draft, not legal advice. Before publishing, confirm the company details, contact address, applicable jurisdictions, and operational practices with qualified counsel.</p></article>
  </main>
);

export function TermsOfService() {
  return <Shell title="Terms of Service" eyebrow="LEGAL / TERMS">
    <p className="legal-intro">These Terms explain the rules for accessing and using websites, applications, and services provided by Infinity Labs Technologies LLC, including NexusFlow (collectively, the “Services”). By accessing or using the Services, you agree to these Terms on behalf of yourself or the organization you represent. If you do not agree, do not use the Services.</p>
    <h2>1. Eligibility and authority</h2><p>You must be legally able to enter into a binding agreement to use the Services. If you use NexusFlow for a company or other organization, you confirm that you have authority to accept these Terms for that organization. You must provide accurate account information and keep it reasonably up to date.</p>
    <h2>2. Accounts and workspace security</h2><p>You are responsible for protecting your credentials, limiting access to authorized people, and notifying your workspace administrator promptly if you suspect unauthorized access. You are responsible for activities performed through your account, except where applicable law provides otherwise. Workspace administrators may invite users, assign roles, and manage organizational access.</p>
    <h2>3. Acceptable use</h2><p>You may use the Services only for lawful business and collaboration purposes. You must not attempt to access another user's account or data without authorization; probe, disrupt, or overload the platform; introduce malware; reverse engineer or circumvent security controls except where law permits; use the Services to infringe rights; or use them for fraud, harassment, unlawful surveillance, or other illegal activity.</p>
    <h2>4. Workspace content and data</h2><p>Your organization and its users retain their rights in content they submit, including customer records, project information, tasks, appointments, and files (“Customer Content”). You authorize us to host, process, transmit, back up, and display Customer Content only as reasonably necessary to provide, protect, maintain, and support the Services and as otherwise instructed by your organization or permitted by law. You are responsible for ensuring that you have the rights and permissions needed to submit the content.</p>
    <h2>5. Privacy and personal information</h2><p>Our handling of personal information is described in the Privacy Policy. Organizations using NexusFlow should ensure they have an appropriate legal basis and required notices or permissions for information entered into their workspace. Do not submit sensitive personal information unless the Services are expressly configured and authorized to handle it.</p>
    <h2>6. Intellectual property</h2><p>The Services, software, visual design, branding, and related materials are owned by Infinity Labs Technologies LLC or its licensors and are protected by applicable intellectual-property laws. Subject to these Terms, we grant you a limited, non-exclusive, non-transferable right to use the Services for your internal business purposes during your authorized access. No ownership is transferred to you.</p>
    <h2>7. Third-party services</h2><p>The Services may interoperate with third-party products, websites, or infrastructure. Third-party services are governed by their own terms and policies. We are not responsible for third-party services that we do not control, and their availability may affect certain features.</p>
    <h2>8. Availability, maintenance, and changes</h2><p>We aim to keep NexusFlow reliable and secure, but we do not guarantee uninterrupted or error-free availability. We may perform maintenance, update features, address security issues, or modify parts of the Services. Where reasonably practical, we will provide notice of material changes that significantly affect normal use.</p>
    <h2>9. Fees and subscriptions</h2><p>If a feature or plan has a fee, the applicable pricing, billing period, taxes, renewal, and cancellation terms will be presented separately before purchase. Unless an applicable order or written agreement says otherwise, paid features are subject to those disclosed terms. No payment obligation should be inferred from this section alone.</p>
    <h2>10. Suspension and termination</h2><p>You may stop using the Services at any time. We may suspend or restrict access when reasonably necessary to protect the Services or users, respond to a security incident, comply with law, address a material breach, or resolve a payment issue under applicable plan terms. Where appropriate and practical, we will provide notice and an opportunity to remedy the issue.</p>
    <h2>11. Disclaimers</h2><p>To the extent permitted by law, the Services are provided on an “as available” basis. We do not warrant that every feature will meet every business requirement or that all defects can be corrected immediately. Nothing in these Terms excludes a warranty or right that cannot lawfully be excluded.</p>
    <h2>12. Limitation of liability</h2><p>To the extent permitted by applicable law, neither party will be liable for indirect, incidental, special, consequential, or punitive losses, or loss of profits, revenue, goodwill, or data arising from use of the Services. Any limits or exclusions apply only to the extent enforceable under the law that governs the relationship and do not exclude liability that cannot legally be limited.</p>
    <h2>13. Indemnity</h2><p>To the extent permitted by law, you are responsible for claims arising from your unlawful use of the Services, your violation of these Terms, or Customer Content that infringes another party's rights. This section does not apply where the law prohibits such an allocation of responsibility.</p>
    <h2>14. Changes to these Terms</h2><p>We may revise these Terms as the Services evolve or legal requirements change. The updated date will appear at the top of this page. If a change is material, we will take reasonable steps to notify users. Continued use after an effective update means you accept the revised Terms, where permitted by law.</p>
    <h2>15. Governing law and disputes</h2><p>The governing law, venue, and dispute-resolution process must be specified in the final version of these Terms based on the company's actual legal arrangements and applicable law. Nothing here removes any mandatory consumer or other rights that apply by law.</p>
    <h2>16. Contact</h2><p>For questions about these Terms, contact Infinity Labs Technologies LLC through the official contact channel published on the company website. Replace this instruction with a monitored legal or support email and the appropriate business address before publication.</p>
>>>>>>> Stashed changes
  </Shell>;
}

export function PrivacyPolicy() {
  return <Shell title="Privacy Policy" eyebrow="LEGAL / PRIVACY">
<<<<<<< Updated upstream
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
=======
    <p className="legal-intro">This Privacy Policy describes how Infinity Labs Technologies LLC handles information in connection with its websites and NexusFlow services. It explains the types of information that may be processed, why it is used, and the choices available to users. The exact practices should be confirmed against the live product and applicable privacy laws before this policy is published.</p>
    <h2>1. Scope and roles</h2><p>This Policy applies to information processed through the company website and NexusFlow. Depending on the situation, your organization may decide why workspace information is processed, while Infinity Labs may process it to provide the platform. The roles and obligations of each party should be documented in applicable customer agreements.</p>
    <h2>2. Information we may collect</h2><p>Information may include account details such as name, email address, authentication records, organization and role; workspace information such as customers, projects, tasks, appointments, notifications, and activity logs; communications you send to support; and technical data such as browser type, device information, diagnostic events, and security logs. Only collect fields and telemetry that the product actually uses.</p>
    <h2>3. How we use information</h2><p>Information may be used to create and administer accounts, authenticate users, provide workspace features, associate users with organizations, respond to support requests, maintain service reliability, detect abuse, protect security, troubleshoot errors, comply with legal obligations, and improve the product. We should not use customer workspace content for unrelated purposes without an appropriate basis and notice.</p>
    <h2>4. Legal bases and permissions</h2><p>Where required by law, processing must rely on an applicable legal basis, such as providing a requested service, meeting a legal obligation, pursuing legitimate interests, or obtaining consent. The appropriate basis depends on the data, the user, the organization, and the jurisdiction. Consent can be withdrawn where consent is the basis, subject to legal limitations.</p>
    <h2>5. Workspace and customer data</h2><p>Workspace content is processed to provide the features requested by the organization and its users. Organization administrators may be able to access or manage workspace content according to their role and product permissions. Users should avoid entering information they are not authorized to share and should follow their organization's retention and access policies.</p>
    <h2>6. Cookies and similar technologies</h2><p>The website or application may use essential storage or similar technologies to maintain sessions, remember preferences, and protect accounts. If analytics, advertising, or other non-essential technologies are added, this Policy and any required consent controls should be updated to describe them accurately.</p>
    <h2>7. Sharing and service providers</h2><p>Information may be shared with authorized infrastructure, hosting, security, support, or other service providers only as needed to operate the Services; with your organization and authorized workspace administrators; when required by law or valid legal process; or in connection with a business reorganization subject to appropriate safeguards. We do not sell personal information unless a future practice and applicable law are explicitly disclosed here.</p>
    <h2>8. International transfers</h2><p>Information may be processed in countries other than where a user lives, depending on hosting and service-provider locations. Where cross-border transfer rules apply, appropriate safeguards and transfer mechanisms must be put in place and described as required by law.</p>
    <h2>9. Security</h2><p>We aim to use reasonable technical and organizational measures to protect information, such as access controls, authentication safeguards, monitoring, and secure operational practices. No system can be guaranteed completely secure. Users and administrators should protect credentials, use appropriate permissions, and report suspected incidents promptly.</p>
    <h2>10. Retention and deletion</h2><p>Information should be retained only for as long as reasonably needed for the purposes described in this Policy, contractual requirements, security, dispute resolution, and legal obligations. Retention periods may differ by data type. Workspace administrators should understand how account closure, export, backup retention, and deletion operate in the deployed product; these details must be confirmed before publication.</p>
    <h2>11. Your privacy rights and choices</h2><p>Depending on your location and applicable law, you may have rights to request access to, correction of, deletion of, restriction of, or a portable copy of personal information, or to object to certain processing. You may also have the right to complain to a data-protection authority. Requests concerning organization-managed workspace data may need to be coordinated with your employer or workspace administrator.</p>
    <h2>12. Children</h2><p>NexusFlow is intended for business use and is not designed for children to create independent accounts. If you believe a child has provided personal information inappropriately, contact the company so the situation can be reviewed and handled as required by law.</p>
    <h2>13. Third-party links and integrations</h2><p>The Services may link to third-party websites or integrate with external tools. Their privacy practices are governed by their own policies, and we encourage users to review those policies before sharing information with them.</p>
    <h2>14. Changes to this Policy</h2><p>We may update this Policy when product features, data practices, or legal requirements change. We will update the date at the top of the page and, where required, provide additional notice or obtain consent.</p>
    <h2>15. Contact and requests</h2><p>For privacy questions or requests, contact Infinity Labs Technologies LLC through the official contact channel on the company website. Before launch, publish a monitored privacy email or request form and add any required company address and data-protection contact details.</p>
>>>>>>> Stashed changes
  </Shell>;
}
