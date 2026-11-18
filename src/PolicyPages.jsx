import "./policy-pages.css";

const people = [
  { name: "Chalisa Veesommai Sillberg", email: "chalisa.sillberg@tuni.fi", languages: "English" },
  { name: "Kai-Kristian Kemell", email: "kai-kristian.kemell@tuni.fi", languages: "English, Finnish" },
];

function Contacts() {
  return (
    <div className="tessa-policy-contacts">
      {people.map(({ name, email, languages }) => (
        <div key={email}>
          <strong>{name}</strong>
          <a href={`mailto:${email}`}>{email}</a>
          <span>{languages}</span>
        </div>
      ))}
    </div>
  );
}

function Introduction({ name }) {
  return <p>
    TESSA is an AI-powered educational artifact for understanding the EU Artificial Intelligence Act
    (Regulation (EU) 2024/1689), developed by Chalisa Veesommai Sillberg in association with GPT-Lab
    at Tampere University, Finland. GPT-Lab is the proposed responsible publisher of {name};
    the legally responsible entity and institutional approval remain to be confirmed.
  </p>;
}

function Privacy() {
  return <>
    <Introduction name="TESSA" />
    <h2>1. Scope of this notice</h2>
    <p>This draft concerns the use of TESSA through ChatGPT. Other versions, including Copilot and locally installed software, may have different data-processing arrangements and require separate or supplementary notices.</p>
    <h2>2. Information and processing</h2>
    <p>Under the current implementation, TESSA does not automatically transmit users' questions, conversation histories, email addresses, or feedback to a separate GPT-Lab database. User inputs and generated responses are processed through the ChatGPT platform under the applicable platform arrangements. Do not assume that the ChatGPT platform itself stores no data.</p>
    <p>When you voluntarily contact the TESSA support team by email, the submitted message and contact details are processed in the recipients' university email systems to handle the enquiry. The arrangements for retention, access, and deletion of support correspondence are subject to institutional confirmation.</p>
    <p>Website hosting may generate technical logs, and any website analytics or cookies must be assessed separately before this draft is published.</p>
    <h2>3. Purpose of the service</h2>
    <p>TESSA generates educational guidance on AI system roles, AI Act risk classification, practical obligations and governance considerations. It is not intended to independently collect personal information for marketing or profiling.</p>
    <h2>4. External services and integrations</h2>
    <p>The ChatGPT version relies on the ChatGPT platform. TESSA's n8n approved-regulatory-update integration is not connected to the current Plugin. TESSA must not be described as retrieving live human-approved regulatory updates.</p>
    <p>For ChatGPT's own processing, see <a href="https://openai.com/policies/privacy-policy/" target="_blank" rel="noreferrer">OpenAI's Privacy Policy</a> and the terms relevant to your account.</p>
    <h2>5. Retention, security and rights</h2>
    <p>TESSA does not currently maintain an independent conversation-history database. The retention and security arrangements of ChatGPT, university support email and website hosting are separate and must be reviewed under their respective applicable policies.</p>
    <p>Applicable data-protection rights may include access, correction, erasure, restriction and objection. Requests relating to data held directly by the platform should use the platform's privacy channels. Other privacy requests will be directed to the responsible institutional contact once confirmed.</p>
    <h2>6. Contacts and responsibility</h2>
    <p><strong>Proposed publisher:</strong> GPT-Lab, Tampere University, Finland.</p>
    <p><strong>Legal data controller and institutional privacy contact:</strong> To be confirmed before publication. Neither TESSA support contact is designated as the university's Data Protection Officer by this notice.</p>
    <p>For preliminary enquiries, contact:</p>
    <Contacts />
    <h2>7. Changes</h2>
    <p>This notice will be reviewed when TESSA's integrations, hosting or other processing arrangements change.</p>
  </>;
}

function Terms() {
  return <>
    <Introduction name="the service" />
    <h2>1. Educational purpose</h2>
    <p>TESSA supports SMEs, AI practitioners, researchers and other users with general educational information about AI roles, risk classification, governance and obligations under the EU AI Act.</p>
    <h2>2. No legal advice or certification</h2>
    <p>TESSA is not a lawyer, competent authority or official compliance assessment service. Its answers are not legal advice, proof of conformity, regulatory approval or a substitute for independent professional assessment.</p>
    <h2>3. Sources and currency</h2>
    <p>A central knowledge source is the open-access book <em>Navigating Compliance: Strategic Guidance for SMEs under the EU AI Act</em> (knowledge date: 18 March 2026). TESSA also uses an illustrative AI use-case reference file. AI-generated answers can be inaccurate, incomplete or outdated.</p>
    <p>The approved-update integration is not currently connected to the ChatGPT Plugin. TESSA cannot guarantee live access to the most recent legislation or guidance. Check <a href="https://eur-lex.europa.eu/" target="_blank" rel="noreferrer">EUR-Lex</a> and <a href="https://digital-strategy.ec.europa.eu/" target="_blank" rel="noreferrer">European Commission resources</a> when decisions depend on current legal requirements.</p>
    <h2>4. User responsibilities</h2>
    <p>Use TESSA lawfully, review its answers critically, and do not enter confidential or sensitive personal information unless you have assessed the relevant platform controls and are authorised to share that information. Do not represent TESSA's output as official legal approval.</p>
    <h2>5. Availability and third-party platforms</h2>
    <p>Availability and features may change, and use of ChatGPT is also subject to the applicable platform terms. The Copilot and local versions may have different conditions.</p>
    <h2>6. Research materials and attribution</h2>
    <p>Copyright and licensing for the book, website, software and other research materials are governed by their respective applicable licences. Publication of these draft terms does not grant rights beyond those licences.</p>
    <h2>7. Publisher, liability and governing terms</h2>
    <p><strong>Proposed responsible publisher:</strong> GPT-Lab, Tampere University, Finland. The contracting legal entity, applicable liability provisions, governing law and approval authority must be confirmed before public publication. No limitation of statutory user rights is intended by this draft.</p>
    <h2>8. Questions and revisions</h2>
    <Contacts />
    <p>The publisher may revise these terms to reflect material changes in functionality, legislation or project governance. The final version and its effective date will be published on the website after approval.</p>
  </>;
}

function Support() {
  return <>
    <Introduction name="the support service" />
    <h2>Get help</h2>
    <p>Contact the TESSA team for questions about using TESSA, technical difficulties, unclear AI Act guidance, corrections, improvement proposals, accessibility or research collaboration.</p>
    <Contacts />
    <h2>How to report a problem</h2>
    <p>Please describe the problem, the TESSA version or access method you used, and the expected behaviour. You may include a short example question, but remove personal, confidential or commercially sensitive information before sending it.</p>
    <h2>Current ChatGPT Plugin status</h2>
    <p><strong>Version:</strong> 0.1.2 (at the time this draft was prepared).</p>
    <p><strong>Languages:</strong> English, Finnish and Swedish (support email is available in English and Finnish as indicated above).</p>
    <p><strong>Approved regulatory-update integration:</strong> Not connected. Do not rely on TESSA for live updates.</p>
    <h2>Privacy enquiries</h2>
    <p>The institutional privacy contact and formal data controller are not yet confirmed. You may contact the support team for help routing an enquiry, but this does not designate either researcher as the institutional Data Protection Officer.</p>
    <h2>Important notice</h2>
    <p>TESSA is an AI-powered educational artifact. It provides information, not legal advice or an official EU AI Act compliance decision.</p>
  </>;
}

const content = {
  privacy: { title: "Privacy Policy", Component: Privacy },
  terms: { title: "Terms of Service", Component: Terms },
  support: { title: "Support & Contact", Component: Support },
};

export function getPolicyRoute() {
  const route = window.location.hash.replace(/^#\/?/, "").replace(/\/$/, "");
  return Object.hasOwn(content, route) ? route : null;
}

export default function PolicyPage({ page }) {
  const { title, Component } = content[page] || content.support;
  return <div className="tessa-policy-page">
    <header className="tessa-policy-header">
      <a className="tessa-policy-brand" href="/#top" aria-label="Return to TESSA home">TESSA</a>
      <a href="/#top">Back to website</a>
    </header>
    <main className="tessa-policy-main">
      <p className="tessa-policy-eyebrow">GPT-Lab · Tampere University</p>
      <h1>{title}</h1>
      <p className="tessa-policy-meta">Draft prepared 18 November 2026</p>
      <div className="tessa-policy-warning"><strong>Draft for institutional review — not an approved legal notice.</strong> The legally responsible entity, data controller, privacy office and website hosting arrangements must be confirmed before publication.</div>
      <div className="tessa-policy-content"><Component /></div>
    </main>
    <footer className="tessa-policy-footer">
      <a href="/#/privacy">Privacy Policy</a>
      <a href="/#/terms">Terms of Service</a>
      <a href="/#/support">Support &amp; Contact</a>
      <a href="/#top">TESSA home</a>
    </footer>
  </div>;
}
