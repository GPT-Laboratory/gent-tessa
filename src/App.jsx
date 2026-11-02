193
194
195
196
197
198
199
200
201
202
203
204
205
206
207
208
209
210
211
212
213
214
215
216
217
218
219
220
221
222
223
224
225
226
227
228
229
230
231
232
233
234
235
236
237
238
239
240
241
242
243
244
245
246
247
248
249
250
251
252
253
254
255
256
257
258
259
260
261
262
263
264
265
266
267
268
269
270
271
272
273
274
275
276
277
278
279
280
281
282
283
284
285
286
287
288
289
290
291
292
293
294
295
296
297
298
299
300
301
302
303
304
305
306
307
308
309
310
311
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
          <div className="metric metric-primary"><strong>91%</strong><span>TESSA GOVERNANCE ALIGNMENT (LLM-ASSISTED PRELIMINARY ASSESSMENT)</span></div>
          <div className="metric"><strong>100</strong><span>benchmark scenarios</span></div>
          <div className="metric"><strong>3×</strong><span>consistency runs</span></div>
          <p className="evidence-note">The 91% score reflects the preliminary LLM-assisted assessment. Separate lawyer validation found 71% governance alignment.</p>
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

