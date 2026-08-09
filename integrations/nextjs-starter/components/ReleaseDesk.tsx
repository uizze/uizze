"use client";

import { useState } from "react";

type ViewState = "ready" | "loading" | "empty" | "error" | "complete";

const reviewItems = [
  { name: "Checkout confirmation", route: "/checkout/success", status: "Needs review" },
  { name: "Team invitation", route: "/settings/team", status: "Reviewed" },
  { name: "Payment failure", route: "/billing/retry", status: "Reviewed" },
];

const contractChecks = [
  { id: "hierarchy", label: "Primary action stays dominant at both viewports" },
  { id: "states", label: "Loading, empty, error, and success states are inspectable" },
  { id: "keyboard", label: "Keyboard order and focus indicators were checked" },
];

export function ReleaseDesk() {
  const [view, setView] = useState<ViewState>("ready");
  const [checked, setChecked] = useState<string[]>(["hierarchy"]);
  const [note, setNote] = useState("");
  const [message, setMessage] = useState("One screen still needs review.");

  const allChecked = checked.length === contractChecks.length;

  function retry() {
    setView("loading");
    setMessage("Reloading release evidence.");
    window.setTimeout(() => {
      setView("ready");
      setMessage("Release evidence restored.");
    }, 650);
  }

  function toggleCheck(id: string) {
    setChecked((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id],
    );
  }

  function approve() {
    if (!allChecked) {
      setMessage("Complete every finish-gate check before approval.");
      return;
    }
    setView("complete");
    setMessage("Release 142 is approved for merge.");
  }

  async function copyReviewLink() {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setMessage("Review link copied.");
    } catch {
      setMessage("The link could not be copied. Copy it from the browser address bar.");
    }
  }

  function requestChanges() {
    if (note.trim().length < 10) {
      setMessage("Add a specific review note before requesting changes.");
      return;
    }
    setMessage("Changes requested with the current review note.");
  }

  return (
    <div className="app-shell">
      <header className="topbar">
        <a className="wordmark" href="#main">Release Desk</a>
        <div className="release-context">
          <span>northstar/web</span>
          <strong>release-142</strong>
        </div>
        <button className="button button-quiet" type="button" onClick={copyReviewLink}>
          Copy review link
        </button>
      </header>

      <nav className="state-switcher" aria-label="Example UI states">
        <span>Preview state</span>
        {(["ready", "loading", "empty", "error"] as const).map((state) => (
          <button
            aria-pressed={view === state}
            key={state}
            type="button"
            onClick={() => setView(state)}
          >
            {state}
          </button>
        ))}
      </nav>

      <main id="main" className="review-layout">
        <section className="review-heading" aria-labelledby="review-title">
          <div>
            <p className="eyebrow">UI finish gate · pull request #142</p>
            <h1 id="review-title">Stop UI slop before it hits main.</h1>
            <p>Review the checkout flow against the product contract, then make one explicit merge decision.</p>
          </div>
          <div className="review-count" aria-label="Review progress">
            <strong>{checked.length}/{contractChecks.length}</strong>
            <span>checks verified</span>
          </div>
        </section>

        <p className="status-line" role="status" aria-live="polite">{message}</p>

        {view === "loading" ? <LoadingState /> : null}
        {view === "empty" ? <EmptyState onCreate={() => setView("ready")} /> : null}
        {view === "error" ? <ErrorState onRetry={retry} /> : null}
        {view === "complete" ? <CompleteState onReopen={() => setView("ready")} /> : null}

        {view === "ready" ? (
          <div className="review-columns">
            <section className="screen-queue" aria-labelledby="queue-title">
              <div className="section-heading">
                <div><p className="eyebrow">Evidence</p><h2 id="queue-title">Screens in this release</h2></div>
                <span>3 changed</span>
              </div>
              <ol className="screen-list">
                {reviewItems.map((item, index) => (
                  <li key={item.route} className={index === 0 ? "screen-active" : undefined}>
                    <button type="button" onClick={() => setMessage(`${item.name} selected for review.`)}>
                      <span className="screen-index">0{index + 1}</span>
                      <span><strong>{item.name}</strong><small>{item.route}</small></span>
                      <em>{item.status}</em>
                    </button>
                  </li>
                ))}
              </ol>

              <div className="screen-preview" aria-label="Checkout confirmation review specimen">
                <div className="preview-browser"><span /><span /><span /><small>app.northstar.test/checkout/success</small></div>
                <div className="preview-body">
                  <p className="preview-kicker">Order NS-4819</p>
                  <h3>Deployment credits added.</h3>
                  <p>2,000 credits are ready for the Northstar production workspace.</p>
                  <dl>
                    <div><dt>Workspace</dt><dd>Northstar production</dd></div>
                    <div><dt>Receipt</dt><dd>maya@northstar.test</dd></div>
                  </dl>
                  <button type="button" onClick={() => setMessage("Workspace action inspected.")}>Open workspace</button>
                </div>
              </div>
            </section>

            <aside className="finish-panel" aria-labelledby="contract-title">
              <div className="section-heading">
                <div><p className="eyebrow">Design contract</p><h2 id="contract-title">Merge checks</h2></div>
                <span>Required</span>
              </div>
              <fieldset>
                <legend className="sr-only">Finish-gate checks</legend>
                {contractChecks.map((check) => (
                  <label key={check.id}>
                    <input
                      type="checkbox"
                      checked={checked.includes(check.id)}
                      onChange={() => toggleCheck(check.id)}
                    />
                    <span>{check.label}</span>
                  </label>
                ))}
              </fieldset>
              <label className="note-field" htmlFor="review-note">
                Review note <span>Optional</span>
              </label>
              <textarea
                id="review-note"
                value={note}
                onChange={(event) => setNote(event.target.value)}
                placeholder="Record a decision another reviewer can verify."
                rows={4}
              />
              <div className="decision-actions">
                <button className="button button-quiet" type="button" onClick={requestChanges}>
                  Request changes
                </button>
                <button className="button button-primary" type="button" onClick={approve} aria-disabled={!allChecked}>
                  Approve UI
                </button>
              </div>
              {!allChecked ? <p className="gate-hint">Verify all three checks to approve this release.</p> : null}
            </aside>
          </div>
        ) : null}
      </main>
    </div>
  );
}

function LoadingState() {
  return (
    <section className="inline-state" aria-busy="true" aria-live="polite">
      <p className="eyebrow">Loading</p>
      <h2>Checking changed screens</h2>
      <p>Reading release evidence and the current design contract.</p>
      <div className="loading-line" aria-hidden="true" />
    </section>
  );
}

function EmptyState({ onCreate }: { onCreate: () => void }) {
  return (
    <section className="inline-state">
      <p className="eyebrow">Nothing to review</p>
      <h2>No frontend changes were found</h2>
      <p>Add a route or component to the release, then run the finish gate again.</p>
      <button className="button button-primary" type="button" onClick={onCreate}>Open example review</button>
    </section>
  );
}

function ErrorState({ onRetry }: { onRetry: () => void }) {
  return (
    <section className="inline-state inline-state-error">
      <p className="eyebrow">Review unavailable</p>
      <h2>Release evidence could not be loaded</h2>
      <p>The design contract is still safe. Retry without discarding the current review.</p>
      <button className="button button-primary" type="button" onClick={onRetry}>Retry evidence</button>
    </section>
  );
}

function CompleteState({ onReopen }: { onReopen: () => void }) {
  return (
    <section className="inline-state inline-state-success">
      <p className="eyebrow">Finish gate passed</p>
      <h2>Release 142 is ready to merge</h2>
      <p>The required states, hierarchy, and keyboard path were recorded as reviewed.</p>
      <button className="button button-quiet" type="button" onClick={onReopen}>Reopen review</button>
    </section>
  );
}
