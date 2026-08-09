> **_If your UI screams AI, your app is dead._**

# Stop Making UI Slop

Build distinctive UI with 800,000+ real web and iOS screens via [UIZZE](https://uizze.com).

![Stop Making UI Slop with UIZZE](https://uizze.com/landing/anti-ui-slop-skill-banner.png)

## UIZZE Finish Gate for Storybook

**STOP UI SLOP before the component library makes it permanent.**

`storybook-addon-uizze` adds a local finish-gate panel to every selected Storybook story. It turns the story's job, primary action, real interface references, required states, rejected patterns, and acceptance criteria into a visible contract reviewers can enforce.

The addon is free, accountless, and local. It does not transmit source, DOM, screenshots, args, story metadata, or analytics. UIZZE appears only as an explicit link after the panel has done useful work.

## Install

Install the verified GitHub release package:

```sh
npm install --save-dev https://github.com/uizze/uizze/releases/download/v1.2.7/storybook-addon-uizze-0.1.1.tgz
```

The package is not on npm yet. Verify the downloaded archive against the matching [SHA-256 checksum](https://github.com/uizze/uizze/releases/download/v1.2.7/storybook-addon-uizze-0.1.1.tgz.sha256) when your dependency policy requires it.

Add the package to `.storybook/main.ts`:

```ts
import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  addons: ['storybook-addon-uizze'],
};

export default config;
```

Storybook 9 and 10 are supported. The first tested framework is React with Vite; other framework claims are added only after their build fixtures pass.

## Put a finish contract on a story

```ts
import type { Meta } from '@storybook/react-vite';
import { ReleaseReview } from './ReleaseReview';

const meta: Meta<typeof ReleaseReview> = {
  component: ReleaseReview,
  parameters: {
    uizze: {
      screenJob: 'Let a reviewer approve a release without losing risk context.',
      primaryAction: 'Approve release',
      references: [
        {
          label: 'Release workflow reference',
          url: 'https://uizze.com',
          note: 'Used for hierarchy and state coverage, never copied as an asset.',
        },
      ],
      requiredStates: ['ready', 'loading', 'empty', 'error', 'permission denied'],
      forbiddenPatterns: ['Filler metrics', 'Equal-weight card grid', 'Inert secondary actions'],
      acceptanceCriteria: [
        'Keyboard focus reaches the primary action before secondary metadata.',
        'Every failure preserves enough context to recover.',
      ],
    },
  },
};

export default meta;
```

Open the **UIZZE Finish Gate** panel. A story passes only when it documents:

- the user outcome and primary action;
- at least one valid `http` or `https` interface reference;
- ready, loading, empty, and error states;
- the generic patterns this story must reject;
- an observable rendered or behavioral acceptance criterion.

The panel can copy the normalized contract as Markdown for a PR or design-review record.

## Parameter API

| Field                | Type                      | Meaning                                                                                |
| -------------------- | ------------------------- | -------------------------------------------------------------------------------------- |
| `disable`            | `boolean`                 | Disable the finish gate for one story.                                                 |
| `screenJob`          | `string`                  | The user outcome the screen must make possible.                                        |
| `primaryAction`      | `string`                  | The single action the hierarchy must protect.                                          |
| `references`         | `{ label, url, note? }[]` | Real interface evidence and why it matters. Only `http` and `https` URLs are accepted. |
| `requiredStates`     | `string[]`                | States reviewers must see. Defaults to ready, loading, empty, and error.               |
| `forbiddenPatterns`  | `string[]`                | Product-inappropriate patterns that fail the review.                                   |
| `acceptanceCriteria` | `string[]`                | Observable behaviors or rendered results required to finish.                           |

Inputs are bounded before rendering or Markdown export: at most 12 items per list, 240 characters per text value, and 2,048 characters per URL.

## Privacy and security

- No background network calls, telemetry, cookies, or local storage.
- No story source, DOM, screenshots, args, parameters, or metadata leave Storybook.
- External navigation and clipboard access happen only after an explicit click.
- Reference URLs must parse as `http` or `https`; `javascript:` and other active schemes are rejected.
- Links open with `noopener noreferrer`; content is rendered through React without raw HTML.
- The addon does not change the builder, preview, framework, or remote-script configuration.

Report vulnerabilities privately through [GitHub security advisories](https://github.com/uizze/uizze/security/advisories/new). See [SECURITY.md](./SECURITY.md).

## Why UIZZE

The panel is useful on its own. When the team needs stronger reference evidence, [UIZZE](https://uizze.com) provides 800,000+ real web and iOS screens plus an optional full MCP workflow for coding agents.

## License

MIT
