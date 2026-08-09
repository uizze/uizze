# Ledgerly billing seed

This dependency-free local seed provides a deliberately incomplete billing route and a small semantic-token settings shell. Both conditions must start from the exact same git commit produced by `../scripts/prepare-runs.mjs`.

Allowed implementation files: `index.html`, `styles.css`, `app.js`.

Do not change `verify.mjs`, this README, or `package.json`. The app must work from `index.html?state=default|loading|empty|failed|success` with no server and no network.
