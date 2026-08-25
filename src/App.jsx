import "./styles.css";

const tessaUrl =
  "https://chatgpt.com/g/g-69c130a52b908191ae8c5897e1293d41-tessa";

const bookUrl = "https://doi.org/10.1007/978-3-032-15207-7";

const capabilities = [
  {
    index: "01",
    title: "Identify your role",
    text: "Clarify whether your organisation acts as a provider, deployer, importer, or distributor.",
  },
  {
    index: "02",
    title: "Understand the risk",
    text: "Explore how the EU AI Act’s risk-based approach may apply to your AI use case.",
  },
  {
    index: "03",
    title: "Turn rules into actions",
    text: "Receive practical, role-aware guidance and clear compliance-oriented checklists.",
  },
  {
    index: "04",
    title: "Follow reviewed updates",
    text: "Ask about recent EU AI Act developments drawn from TESSA’s reviewed update workflow.",
  },
];

const audiences = ["SMEs", "Start-ups", "AI teams", "Researchers & students"];

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" width="18" height="18">
      <path d="M4 10h11M11 6l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" width="16" height="16">
      <path d="M8 5H5.8A1.8 1.8 0 0 0 4 6.8v7.4A1.8 1.8 0 0 0 5.8 16h7.4a1.8 1.8 0 0 0 1.8-1.8V12M11 4h5v5M9 11l7-7" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function App() {
  return (
    <main>
      <header className="site-header">
        <a className="header-brand" href="#top" aria-label="TESSA home">
          <img className="header-logo" src="./brand/tessa-logo.png" alt="TESSA" />
        </a>
        <nav aria-label="Main navigation">
          <a href="#what">What it does</a>
          <a href="#evidence">Evidence</a>
          <a href="#about">About</a>
        </nav>
        <a className="header-cta" href={tessaUrl} target="_blank" rel="noreferrer">
          Try TESSA <ArrowIcon />
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="hero-name">TESSA</p>
          <p className="eyebrow"><span /> Research-based EU AI Act support</p>
          <h1>Make the EU AI Act <em>actionable.</em></h1>
          <p className="hero-lead">
            TESSA helps small and medium-sized enterprises understand AI roles,
            risks, and practical next steps—without requiring specialised legal expertise.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href={tessaUrl} target="_blank" rel="noreferrer">
              Start with TESSA <ArrowIcon />
            </a>
            <a className="button button-secondary" href={bookUrl} target="_blank" rel="noreferrer">
              Read the open-access guide <ExternalIcon />
            </a>
          </div>
          <p className="helper">Available through ChatGPT · Educational guidance, not legal advice</p>
        </div>

        <div className="hero-visual" aria-label="Example TESSA guidance flow">
          <div className="visual-glow" />
          <div className="prompt-card">
            <div className="prompt-topline">
              <div className="mini-brand"><span>T</span> TESSA</div>
              <span className="status"><i /> Ready</span>
            </div>
            <p className="prompt-label">YOUR AI USE CASE</p>
            <p className="prompt-question">“We use AI to screen job applications. What should we consider?”</p>
            <div className="guidance-path">
              <div><span>1</span><p><b>Role</b><small>Likely deployer</small></p></div>
              <i />
              <div><span>2</span><p><b>Risk</b><small>High-risk context</small></p></div>
              <i />
              <div><span>3</span><p><b>Next step</b><small>Review obligations</small></p></div>
            </div>
            <div className="response-preview">
              <span className="spark">✦</span>
              <p>TESSA explains the reasoning and turns it into a practical checklist.</p>
            </div>
          </div>
          <div className="visual-note note-one">Clear language</div>
          <div className="visual-note note-two">Role-aware</div>
        </div>
      </section>

      <section className="trust-strip" aria-label="TESSA highlights">
        <div><strong>Research-based</strong><span>Grounded in an open-access guide</span></div>
        <div><strong>SME-focused</strong><span>Built around practical business needs</span></div>
        <div><strong>3 languages</strong><span>English · Finnish · Swedish</span></div>
        <div><strong>Human-reviewed</strong><span>Evaluated with legal expertise</span></div>
        <div><strong>Human-validated updates</strong><span>Automatically detects and collects recent AI Act updates for human approval</span></div>
      </section>

      <section className="section capabilities-section" id="what">
        <div className="section-heading">
          <p className="eyebrow"><span /> From uncertainty to a next step</p>
          <h2>Practical guidance for real AI use cases.</h2>
          <p>Describe what your organisation does with AI. TESSA structures the regulatory questions that matter.</p>
        </div>
        <div className="capability-grid">
          {capabilities.map((item) => (
            <article className="capability-card" key={item.index}>
              <span className="card-index">{item.index}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section flow-section">
        <div className="flow-copy">
          <p className="eyebrow light"><span /> Designed for conversation</p>
          <h2>You bring the use case. TESSA helps organise the compliance journey.</h2>
          <p>
            Start in everyday language. If details are missing, TESSA asks focused questions before offering a practical response.
          </p>
          <div className="audience-list">
            {audiences.map((audience) => <span key={audience}>{audience}</span>)}
          </div>
        </div>
        <ol className="steps">
          <li><span>01</span><div><h3>Describe</h3><p>Explain how your business uses or plans to use AI.</p></div></li>
          <li><span>02</span><div><h3>Clarify</h3><p>Answer focused questions about your role, context, and affected people.</p></div></li>
          <li><span>03</span><div><h3>Act</h3><p>Receive a structured explanation and prioritised next steps.</p></div></li>
        </ol>
      </section>

      <section className="section evidence-section" id="evidence">
        <div className="evidence-intro">
          <p className="eyebrow"><span /> Evaluated as a research artefact</p>
          <h2>Built on evidence, tested against a baseline.</h2>
          <p>
            TESSA was evaluated using a structured benchmark and expert validation to examine governance alignment and response consistency.
          </p>
          <a className="text-link" href="https://www.tuni.fi/en/tau/news-and-events/new-ai-assistant-helps-companies-apply-eu-ai-legislation" target="_blank" rel="noreferrer">
            Read the Tampere University story <ArrowIcon />
          </a>
        </div>
        <div className="evidence-panel">
          <div className="metric metric-primary"><strong>91%</strong><span>TESSA governance alignment</span></div>
          <div className="metric"><strong>100</strong><span>benchmark scenarios</span></div>
          <div className="metric"><strong>3×</strong><span>consistency runs</span></div>
          <p className="evidence-note">Results reflect the lawyer-validated assessment used in the TESSA research evaluation.</p>
        </div>
      </section>

      <section className="section book-section" id="about">
        <a className="book-cover-link" href={bookUrl} target="_blank" rel="noreferrer" aria-label="Open Navigating Compliance on SpringerLink">
          <img
            className="book-cover"
            src="./brand/book-cover.png"
            alt="Book cover of Navigating Compliance: Strategic Guidance for SMEs under the EU AI Act"
            loading="lazy"
          />
        </a>
        <div className="book-copy">
          <p className="eyebrow"><span /> The foundation</p>
          <h2>Grounded in an open-access SpringerBrief.</h2>
          <p>
            TESSA translates the research-based guidance in <cite>Navigating Compliance: Strategic Guidance for SMEs under the EU AI Act</cite> into a conversational experience for business contexts.
          </p>
          <a className="button button-dark" href={bookUrl} target="_blank" rel="noreferrer">
            Open the book <ExternalIcon />
          </a>
        </div>
      </section>

      <section className="aura-section" aria-labelledby="aura-title">
        <div className="aura-inner">
          <div className="aura-mark" aria-hidden="true">
            <span>A</span>
            <b>AURA</b>
            <i>IN DEVELOPMENT</i>
          </div>
          <div className="aura-copy">
            <p className="eyebrow"><span /> Coming next from GPT-Lab</p>
            <span className="development-badge">In development</span>
            <h2 id="aura-title">Meet AURA.</h2>
            <h3>AI Universal Regulation Assistant</h3>
            <p>
              AURA is being developed to help organisations explore the broader regulations and standards relevant to AI systems and applications, including AI agents and agentic AI solutions, as well as the tools used to build and deploy them. It extends beyond the EU AI Act to support navigation across interconnected legal, regulatory, and standardisation requirements.
            </p>
            <div className="aura-tags" aria-label="AURA focus areas">
              <span>Broad regulatory scope</span>
              <span>AI systems · agents · agentic AI</span>
              <span>Regulations &amp; standards</span>
            </div>
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div>
          <p className="eyebrow light"><span /> Start a practical conversation</p>
          <h2>What does the EU AI Act mean for your AI system?</h2>
        </div>
        <a className="button button-white" href={tessaUrl} target="_blank" rel="noreferrer">
          Ask TESSA <ArrowIcon />
        </a>
      </section>

      <footer>
        <div className="partner-strip" aria-label="Project and funding partners">
          <div className="partner-logos">
            <div className="partner-logo-item" aria-label="Co-funded by the European Union">
              <img className="partner-logo partner-logo-eu" src="./brand/eu-cofunded.jpg" alt="European Union co-funded" loading="lazy" />
            </div>
            <a href="https://www.tuni.fi/en" target="_blank" rel="noreferrer" aria-label="Tampere University">
              <img className="partner-logo partner-logo-tuni" src="./brand/tampere-university.jpg" alt="Tampere University" loading="lazy" />
            </a>
            <div className="partner-logo-item" aria-label="Generative Artificial Intelligence in Business Support project">
              <img className="partner-logo partner-logo-gent" src="./brand/gent-logo.png" alt="GENT - Generative Artificial Intelligence in Business Support" loading="lazy" />
            </div>
          </div>
        </div>
        <div className="footer-main">
          <a className="brand footer-brand" href="#top"><span className="brand-mark">T</span><span>TESSA</span></a>
          <p>Built by GPT-Lab at Tampere University, Finland, as part of the Generative Artificial Intelligence (GENT) project, co-funded by the European Union.</p>
        </div>
        <div className="footer-links">
          <a href="https://gpt-lab.eu/" target="_blank" rel="noreferrer">GPT-Lab</a>
          <a href="https://www.tuni.fi/en" target="_blank" rel="noreferrer">Tampere University</a>
          <details className="contact-details">
            <summary>Contact <span aria-hidden="true">+</span></summary>
            <div className="contact-card">
              <p className="contact-heading">Contact TESSA</p>
              <div className="contact-person">
                <strong>Chalisa Veesommai Sillberg, Ph.D.</strong>
                <a href="mailto:chalisa.sillberg@tuni.fi">chalisa.sillberg@tuni.fi</a>
                <small>English</small>
              </div>
              <div className="contact-person">
                <strong>Kai-Kristian Kemell, Ph.D.</strong>
                <a href="mailto:kai-kristian.kemell@tuni.fi">kai-kristian.kemell@tuni.fi</a>
                <small>Finnish</small>
              </div>
            </div>
          </details>
        </div>
        <p className="disclaimer">TESSA provides educational and informational guidance. It does not provide legal advice or replace assessment by a qualified professional.</p>
      </footer>
    </main>
  );
}
