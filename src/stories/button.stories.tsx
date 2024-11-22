import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../components/ui/button.tsx';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const FirstStory: Story = {
  args: {
    children: 'Click me',
    variant: 'default',
    size: 'default',
  },
};

export const SecondaryButton: Story = {
  args: {
    children: 'Secondary Button',
    variant: 'secondary',
    size: 'sm',
  },
};

export const DestructiveButton: Story = {
  args: {
    children: 'Delete',
    variant: 'destructive',
    size: 'lg',
  },
};