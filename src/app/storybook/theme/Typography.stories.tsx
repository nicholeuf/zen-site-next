import { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Typography, TypographyProps } from '@mui/material';
import Stack from '@mui/material/Stack';

const typographyVariants: TypographyProps['variant'][] = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'subtitle1',
  'subtitle2',
  'body1',
  'body2',
  'caption',
  'button',
  'overline',
  'inherit',
  // custom variant from mui-overrides.d.ts
  // @ts-ignore
  'sacramento',
];

const meta: Meta<typeof Typography> = {
  title: 'Theme/Typography',
  component: Typography,
  parameters: { layout: 'padded' },
  argTypes: {
    children: { control: 'text' },
    variant: {
      control: { type: 'select' },
      options: typographyVariants,
    },
    align: {
      control: { type: 'select' },
      options: ['inherit', 'left', 'center', 'right', 'justify'],
    },
    color: {
      control: { type: 'select' },
      options: [
        'initial',
        'inherit',
        'primary',
        'secondary',
        'error',
        'text.primary',
        'text.secondary',
      ],
    },
    display: {
      control: { type: 'select' },
      options: ['initial', 'block', 'inline'],
    },
    gutterBottom: { control: 'boolean' },
    noWrap: { control: 'boolean' },
    paragraph: { control: 'boolean' },
    sx: { control: 'object' },
  },
};

export default meta;

type Story = StoryObj<TypographyProps>;

const Template: Story = {
  render: ({ children, ...args }: TypographyProps) => (
    <Typography {...args}>{children}</Typography>
  ),
};

export const Playground: Story = {
  ...Template,
  args: {
    children: 'The quick brown fox jumps over the lazy dog.',
    variant: 'body1',
    align: 'inherit',
    color: 'initial',
    display: 'initial',
    gutterBottom: false,
    noWrap: false,
    paragraph: false,
    sx: {},
  },
};

export const AllVariants: Story = {
  args: { children: 'The quick brown fox jumps over the lazy dog.' },
  render: ({ children, ...args }: TypographyProps) => {
    return (
      <Stack spacing={2}>
        {typographyVariants.map((v) => (
          <Typography key={String(v)} variant={v} {...args}>
            {v} — {children}
          </Typography>
        ))}
      </Stack>
    );
  },
};

// individual variant stories using the template
const makeVariant = (
  variant: TypographyProps['variant'],
  text: string
): Story => ({
  ...Template,
  args: { children: text, variant },
});

export const H1 = makeVariant('h1', 'H1 — The quick brown fox.');
export const H2 = makeVariant('h2', 'H2 — The quick brown fox.');
export const H3 = makeVariant('h3', 'H3 — The quick brown fox.');
export const H4 = makeVariant('h4', 'H4 — The quick brown fox.');
export const H5 = makeVariant('h5', 'H5 — The quick brown fox.');
export const H6 = makeVariant('h6', 'H6 — The quick brown fox.');
export const Subtitle1 = makeVariant(
  'subtitle1',
  'Subtitle1 — Secondary heading.'
);
export const Subtitle2 = makeVariant(
  'subtitle2',
  'Subtitle2 — Secondary heading.'
);
export const Body1 = makeVariant('body1', 'Body1 — Main body text.');
export const Body2 = makeVariant('body2', 'Body2 — Secondary body text.');
export const Caption = makeVariant('caption', 'Caption — Small helper text.');
export const ButtonText = makeVariant(
  'button',
  'Button — Uppercase by default.'
);
export const Overline = makeVariant(
  'overline',
  'Overline — Small uppercase label.'
);
export const Inherit = makeVariant(
  'inherit',
  'Inherit — Inherits font from parent.'
);

export const Sacramento = makeVariant(
  // @ts-ignore
  'sacramento',
  'Sacramento — A custom font variant.'
);
