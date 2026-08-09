const app = document.querySelector('#app');
const state = new URLSearchParams(window.location.search).get('state') || 'default';

app.innerHTML = `
  <h1>Billing</h1>
  <p>This route is intentionally incomplete. Implement the requested billing workflow for the <strong>${state}</strong> state.</p>
`;
