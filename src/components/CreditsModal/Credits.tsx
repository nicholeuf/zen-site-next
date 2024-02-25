import Typography from '@mui/material/Typography';
import List from '@mui/material/List';

import DashListItem from '@/components/DashListItem';
import ExternalLink from '@/components/ExternalLink';

interface CreditsProps {
  titleId: string;
  descriptionId: string;
}

const Credits: React.FC<CreditsProps> = ({ titleId, descriptionId }) => {
  return (
    <>
      <Typography variant="h3" id={titleId} gutterBottom>
        Credits
      </Typography>
      <Typography id={descriptionId}>
        The following assets were used on the site:{' '}
      </Typography>
      <List>
        <DashListItem>
          Favicon and open graph image: &nbsp;
          <ExternalLink href="https://icons8.com/icon/35926/lotus">
            Lotus
          </ExternalLink>
          &nbsp;icon by&nbsp;
          <ExternalLink href="https://icons8.com">Icons8</ExternalLink>
        </DashListItem>
        <DashListItem>
          Home page background: Photo by&nbsp;
          <ExternalLink href="https://unsplash.com/@scottwebb?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
            Scott Webb
          </ExternalLink>
          &nbsp;on&nbsp;
          <ExternalLink href="https://unsplash.com/photos/rubber-plant-5mIcH3q7tIk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
            Unsplash
          </ExternalLink>
        </DashListItem>
      </List>
    </>
  );
};

export default Credits;
