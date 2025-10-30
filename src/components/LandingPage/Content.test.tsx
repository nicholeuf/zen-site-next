import { render, screen } from 'test-utils';
import Content from './Content';

describe('The Content component', () => {
  test('has expected copy', () => {
    render(
      <Content
        profileImageProps={{
          width: 200,
          height: 200,
          crop: 'thumb',
          zoom: '0.5',
          src: 'zensite/nf-profile-c-hibiscus',
          alt: 'Photo of website author',
          style: {
            border: '1px solid white',
            borderRadius: '20px',
          },
        }}
      />
    );

    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeVisible();
    expect(heading).toHaveTextContent("Hi, I'm Nichole");

    const subheading = screen.getByRole('heading', { level: 2 });
    expect(subheading).toBeVisible();
    expect(subheading).toHaveTextContent('Full-Stack Developer');

    const copy = screen.getByText(/Based in Orlando/i);
    expect(copy).toBeVisible();
  });
});
