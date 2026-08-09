# Security policy

## Supported versions

Security fixes are provided for the latest released minor version.

## Report a vulnerability

Use the repository's private vulnerability-reporting form:

https://github.com/uizze/uizze/security/advisories/new

Do not include secrets, private Storybook URLs, customer source, or screenshots in a public issue.

## Data boundary

The addon is manager-only and performs no background network requests. It does not collect, persist, or transmit story source, DOM, screenshots, args, parameters, metadata, or analytics. Clipboard writes and external navigation require an explicit user click.
