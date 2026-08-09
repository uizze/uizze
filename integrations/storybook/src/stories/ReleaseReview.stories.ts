import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { ReleaseReview } from './ReleaseReview';

const meta = {
  title: 'Release review',
  component: ReleaseReview,
  parameters: {
    layout: 'fullscreen',
    uizze: {
      screenJob: 'Let a production owner approve a release without losing risk, rollback, or test context.',
      primaryAction: 'Approve release',
      references: [
        {
          label: 'UIZZE release-workflow research',
          url: 'https://uizze.com',
          note: 'Used to compare hierarchy and state coverage; no product asset is copied.',
        },
      ],
      requiredStates: ['ready', 'loading', 'empty', 'error', 'permission denied'],
      forbiddenPatterns: [
        'Filler metrics that do not change the decision',
        'Equal-weight card grid',
        'Approval action detached from release risk',
      ],
      acceptanceCriteria: [
        'Approve and request-changes actions produce a visible decision record.',
        'Loading, empty, error, and permission states preserve the release context or next recovery action.',
        'Keyboard focus reaches the release decision after the supporting evidence.',
      ],
    },
  },
  args: {
    onApprove: fn(),
    onRequestChanges: fn(),
    onRetry: fn(),
    onSelectRelease: fn(),
    onRequestAccess: fn(),
  },
} satisfies Meta<typeof ReleaseReview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Ready: Story = { args: { status: 'ready' } };
export const Loading: Story = { args: { status: 'loading' } };
export const Empty: Story = { args: { status: 'empty' } };
export const Error: Story = { args: { status: 'error' } };
export const PermissionDenied: Story = { args: { status: 'permission-denied' } };
