import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { within } from "@testing-library/dom";
import { usePathname } from "next/navigation";
import { expect, mocked, userEvent } from "storybook/test";
import StoryAppLayout from "utils/StoryAppLayout";
import routes from "@/app/lib/routes";
import WorkPage from "./WorkPage";

const meta: Meta<typeof WorkPage> = {
  title: "Pages/Work",
  component: WorkPage,
  parameters: { layout: "fullscreen" },
  decorators: [
    (Story) => {
      // Ensure the WorkPage component is rendered within the app layout, which provides necessary context like theme and router.
      return (
        <StoryAppLayout>
          <Story />
        </StoryAppLayout>
      );
    },
  ],
};

export default meta;

type Story = StoryObj<React.ComponentProps<typeof WorkPage>>;

const WithWorkRoute: Story = {
  beforeEach: () => {
    mocked(usePathname).mockReturnValue(routes.work.href);
  },
  afterEach: () => {
    mocked(usePathname).mockReset();
  },
};

export const Default: Story = {
  ...WithWorkRoute,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement as HTMLElement);
    const user = userEvent.setup();

    const heading = canvas.getByRole("heading", { level: 1 });
    expect(heading).toBeVisible();
    expect(heading).toHaveTextContent("Work");

    const portfolioHeading2 = canvas.getByRole("heading", { level: 2 });
    expect(portfolioHeading2).toBeVisible();
    expect(portfolioHeading2).toHaveTextContent("thecodingyogi.me | Developer");
  },
};

export const ImperfectFoodsTab: Story = {
  ...WithWorkRoute,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement as HTMLElement);
    const user = userEvent.setup();

    const imperfectTab = canvas.getByRole("tab", {
      name: "Imperfect Foods",
    });
    expect(imperfectTab).toBeVisible();

    await user.click(imperfectTab);

    const imperfectHeading2 = canvas.getByRole("heading", {
      name: "Imperfect Foods | Full-Stack Developer",
    });
    expect(imperfectHeading2).toBeVisible();
  },
};

export const DoorToDoorOrganicsTab: Story = {
  ...WithWorkRoute,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement as HTMLElement);
    const user = userEvent.setup();

    const doorToDoorOrganicsTab = canvas.getByRole("tab", {
      name: "Door to Door Organics",
    });
    expect(doorToDoorOrganicsTab).toBeVisible();

    await user.click(doorToDoorOrganicsTab);
    const doorToDoorOrganicsHeading2 = canvas.getByRole("heading", {
      name: "Door to Door Organics | Lead Front-End Developer",
    });
    expect(doorToDoorOrganicsHeading2).toBeVisible();
  },
};

export const Mobile: Story = {
  ...WithWorkRoute,
  globals: {
    viewport: { value: "mobile2", isRotated: false },
  },
};

export const Tablet: Story = {
  ...WithWorkRoute,
  globals: {
    viewport: { value: "tablet", isRotated: false },
  },
};
