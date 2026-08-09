# Task: finish Ledgerly billing settings

Complete the existing billing-settings route without changing its product shell or adding dependencies.

Users must be able to:

1. understand their current plan and renewal timing;
2. replace their payment method;
3. retry a failed payment;
4. inspect invoices by date, amount, status, and stable invoice identity;
5. download a receipt for each eligible invoice.

Implement independently reachable `default`, `loading`, `empty`, `failed`, and `success` states through `?state=<name>`.

Only edit `index.html`, `styles.css`, and `app.js`. Do not edit `verify.mjs`, `verify.test.mjs`, or `package.json`; add dependencies; use external services; or invent analytics and customer claims. Preserve the exact verification markers documented in `AGENTS.md`; they are the local test contract, not analytics hooks.
