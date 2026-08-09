# Task: finish the deployment diagnosis dashboard

You are working on Launchpad, a deployment platform. Turn the provided starter
into a polished diagnosis screen for the failed production deployment shown.

Keep every supplied deployment fact. The user must be able to:

- identify the failing service, environment, commit, author, and duration;
- see that the build succeeded and the release failed during migration;
- find the first useful error without reading the entire log;
- copy the error and commit SHA;
- retry the deployment or roll back with clear consequences;
- use the workflow at desktop and mobile widths.

Requirements:

- Work only in the provided `index.html`, `styles.css`, and `app.js`.
- Use plain HTML, CSS, and JavaScript; add no packages or network requests.
- Make the screen work at 1440×900 and 390×844.
- Preserve visible focus, native labels, keyboard operation, and useful states.
- Do not invent uptime, incident impact, logs, deployment history, or metrics.
- Do not add gradients, decorative charts, fake activity, or placeholder numbers.

Finish when an on-call developer can confidently take the next action.
