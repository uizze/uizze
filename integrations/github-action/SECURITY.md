# Security policy

## Supported versions

Security fixes will be applied to the latest major release. Consumers should pin the Action to a full commit SHA and use Dependabot or an equivalent process to review updates.

## Reporting a vulnerability

Use GitHub's private security-advisory flow for this repository. Do not open a public issue with exploit details or sensitive repository content. Include the affected release or commit, a minimal reproduction, impact, and any suggested mitigation. Maintainers should acknowledge a report within five business days and coordinate disclosure after a fix is available.

## Runtime boundaries

- The Action requests no token and documents only `contents: read`.
- It does not execute project source files.
- Git revisions are accepted only as hexadecimal object IDs and are passed to Git without a shell.
- Explicit file paths must remain inside `GITHUB_WORKSPACE`.
- Files over 1 MiB and dependency/generated directories are skipped.
- No source, screenshots, manifests, or results are transmitted over the network by the Action.

GitHub-hosted runners or other workflow steps may have their own network behavior; those are outside this Action's boundary.
