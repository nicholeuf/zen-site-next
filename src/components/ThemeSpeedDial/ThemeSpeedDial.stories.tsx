import { Meta, StoryObj } from "@storybook/nextjs-vite";
import React from "react";
import { expect, fn, screen, userEvent, waitFor, within } from "storybook/test";

import ThemeSpeedDial from "./index";

const meta: Meta<typeof ThemeSpeedDial> = {
  title: "Components/ThemeSpeedDial",
  component: ThemeSpeedDial,
  parameters: { layout: "fullscreen" },
};

const setModeMock = fn();

export default meta;
type Story = StoryObj<React.ComponentProps<typeof ThemeSpeedDial>>;

export const Playground: Story = {
  render: (args) => <ThemeSpeedDial {...args} />,
  args: {
    mode: "light",
    setMode: setModeMock,
  },
};

export const HoverState: Story = {
  render: (args) => <ThemeSpeedDial {...args} />,
  args: {
    mode: "light",
    setMode: setModeMock,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // 1. Hover/click the main SpeedDial button to open it
    const mainButton = canvas.getByRole("button", {
      name: /theme switcher/i,
    });

    await userEvent.hover(mainButton); // or click if hover doesn't trigger in test

    // Small wait to let the actions appear
    await waitFor(() => {
      expect(canvas.getByLabelText(/dark mode/i)).toBeInTheDocument();
    });
  },
};

export const SelectDark: Story = {
  render: (args) => <ThemeSpeedDial {...args} />,
  args: {
    mode: "system",
    setMode: setModeMock,
  },
  globals: {
    // Start in system mode to test switching to dark
    muiMode: "system",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // 1. Hover/click the main SpeedDial button to open it
    const mainButton = canvas.getByRole("button", {
      name: /theme switcher/i,
    });

    await userEvent.hover(mainButton); // or click if hover doesn't trigger in test

    // Small wait to let the actions appear
    await waitFor(() => {
      expect(canvas.getByLabelText(/dark mode/i)).toBeInTheDocument();
    });

    // Step 2: Click the Dark action using getByLabelText (most reliable)
    const darkButton = canvas.getByRole("menuitem", { name: /dark mode/i });
    await userEvent.click(darkButton, { pointerEventsCheck: 0 });

    // Step 3: Verify
    await waitFor(() => {
      expect(setModeMock).toHaveBeenCalledWith("dark");
    });
  },
};

export const SelectLight: Story = {
  render: (args) => <ThemeSpeedDial {...args} />,
  args: {
    mode: "dark",
    setMode: setModeMock,
  },
  globals: {
    // Start in dark mode to test switching to light
    muiMode: "dark",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // 1. Hover/click the main SpeedDial button to open it
    const mainButton = canvas.getByRole("button", {
      name: /theme switcher/i,
    });

    await userEvent.hover(mainButton); // or click if hover doesn't trigger in test

    // Small wait to let the actions appear
    await waitFor(() => {
      expect(canvas.getByLabelText(/light mode/i)).toBeInTheDocument();
    });

    // Step 2: Click the Light action using getByLabelText (most reliable)
    const lightButton = canvas.getByRole("menuitem", { name: /light mode/i });
    await userEvent.click(lightButton, { pointerEventsCheck: 0 });

    // Step 3: Verify
    await waitFor(() => {
      expect(setModeMock).toHaveBeenCalledWith("light");
    });
  },
};

export const SelectSystem: Story = {
  render: (args) => <ThemeSpeedDial {...args} />,
  args: {
    mode: "dark",
    setMode: setModeMock,
  },
  globals: {
    // Start in dark mode to test switching to system
    muiMode: "dark",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // 1. Hover/click the main SpeedDial button to open it
    const mainButton = canvas.getByRole("button", {
      name: /theme switcher/i,
    });

    await userEvent.hover(mainButton); // or click if hover doesn't trigger in test

    // Small wait to let the actions appear
    await waitFor(() => {
      expect(canvas.getByLabelText(/system mode/i)).toBeInTheDocument();
    });

    // Step 2: Click the System action using getByLabelText (most reliable)
    const systemButton = canvas.getByRole("menuitem", { name: /system mode/i });
    await userEvent.click(systemButton, { pointerEventsCheck: 0 });

    // Step 3: Verify
    await waitFor(() => {
      expect(setModeMock).toHaveBeenCalledWith("system");
    });
  },
};
