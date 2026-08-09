import React, { useState } from 'react';

import './release-review.css';

export type ReleaseReviewStatus = 'ready' | 'loading' | 'empty' | 'error' | 'permission-denied';

export interface ReleaseReviewProps {
  status: ReleaseReviewStatus;
  onApprove?: () => void;
  onRequestChanges?: () => void;
  onRetry?: () => void;
  onSelectRelease?: () => void;
  onRequestAccess?: () => void;
}

export function ReleaseReview({
  status,
  onApprove,
  onRequestChanges,
  onRetry,
  onSelectRelease,
  onRequestAccess,
}: ReleaseReviewProps) {
  const [decision, setDecision] = useState<'approved' | 'changes-requested' | null>(null);

  const approve = () => {
    setDecision('approved');
    onApprove?.();
  };

  const requestChanges = () => {
    setDecision('changes-requested');
    onRequestChanges?.();
  };

  return (
    <main className="release-shell">
      <header className="release-header">
        <span className="release-wordmark">Release control</span>
        <span className="release-environment">Production</span>
      </header>

      <section className="release-panel" aria-live="polite">
        {status === 'loading' && (
          <div className="release-state" role="status">
            <span className="release-spinner" aria-hidden="true" />
            <p className="release-kicker">Loading release evidence</p>
            <h1>Checking the build, migrations, and affected services.</h1>
            <p>Release controls stay unavailable until every required signal has loaded.</p>
          </div>
        )}

        {status === 'empty' && (
          <div className="release-state">
            <p className="release-kicker">No release selected</p>
            <h1>Choose a candidate before starting the review.</h1>
            <p>The decision record will remain empty until a release is attached.</p>
            <button className="release-button release-button--primary" type="button" onClick={onSelectRelease}>
              Choose release
            </button>
          </div>
        )}

        {status === 'error' && (
          <div className="release-state" role="alert">
            <p className="release-kicker release-kicker--danger">Evidence unavailable</p>
            <h1>Deployment checks could not be loaded.</h1>
            <p>No decision has been recorded. Retry without losing the selected release.</p>
            <button className="release-button release-button--primary" type="button" onClick={onRetry}>
              Retry checks
            </button>
          </div>
        )}

        {status === 'permission-denied' && (
          <div className="release-state">
            <p className="release-kicker release-kicker--danger">Approval required</p>
            <h1>Your role can inspect this release, but cannot approve it.</h1>
            <p>Ask a production owner for temporary approval access. The review evidence stays visible.</p>
            <button className="release-button release-button--secondary" type="button" onClick={onRequestAccess}>
              Request access
            </button>
          </div>
        )}

        {status === 'ready' && (
          <>
            <div className="release-title-row">
              <div>
                <p className="release-kicker">Release candidate</p>
                <h1>Checkout recovery · v2.18.0</h1>
                <p>Commit 4c19b8a · prepared 12 minutes ago by Checkout Platform</p>
              </div>
              <span className="release-risk">Medium risk</span>
            </div>

            <dl className="release-facts">
              <div>
                <dt>Checks</dt>
                <dd>18 / 18 passed</dd>
              </div>
              <div>
                <dt>Affected services</dt>
                <dd>Checkout, payments</dd>
              </div>
              <div>
                <dt>Database</dt>
                <dd>1 reversible migration</dd>
              </div>
            </dl>

            <section className="release-change">
              <p className="release-kicker">What changes</p>
              <h2>Failed payment retries preserve the cart and recovery context.</h2>
              <p>
                The release changes the retry transition only. The rollback restores the previous state machine without
                removing stored carts.
              </p>
            </section>

            {decision && (
              <p className="release-decision" role="status">
                {decision === 'approved'
                  ? 'Release approved. The deployment queue now owns the next step.'
                  : 'Changes requested. The release remains blocked with this review attached.'}
              </p>
            )}

            <footer className="release-actions">
              <button className="release-button release-button--secondary" type="button" onClick={requestChanges}>
                Request changes
              </button>
              <button className="release-button release-button--primary" type="button" onClick={approve}>
                Approve release
              </button>
            </footer>
          </>
        )}
      </section>
    </main>
  );
}
