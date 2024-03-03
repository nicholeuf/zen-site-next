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
          <Typography>
            Favicon and open graph asset:&nbsp;
            <ExternalLink href="https://icons8.com/icon/35926/lotus">
              Lotus
            </ExternalLink>
            &nbsp;icon by&nbsp;
            <ExternalLink href="https://icons8.com">Icons8</ExternalLink>
          </Typography>
        </DashListItem>
        <DashListItem>
          <Typography>
            Home page asset: Photo by&nbsp;
            <ExternalLink href="https://unsplash.com/@andreislobtsov?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
              Andrei Slobtsov
            </ExternalLink>
            &nbsp;on&nbsp;
            <ExternalLink href="https://unsplash.com/photos/green-leaves-painting-Med3Kuxz97c?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
              Unsplash
            </ExternalLink>
          </Typography>
        </DashListItem>
        <DashListItem>
          <Typography>
            Contact page asset:&nbsp;
            <ExternalLink href="https://icons8.com/illustrations/illustration/shine-stephania-plant-in-plant-pot">
              Stephania Plant in Plant Pot
            </ExternalLink>
            &nbsp;illustration by&nbsp;
            <ExternalLink href="https://icons8.com/illustrations/author/zD2oqC8lLBBA">
              Icons8
            </ExternalLink>
          </Typography>
        </DashListItem>
        <DashListItem>
          <Typography>
            Not found page asset:&nbsp;
            <ExternalLink href="https://icons8.com/illustrations/illustration/dizzy-plant-chlorophytum">
              Dizzy Plant Chlorophytum
            </ExternalLink>
            &nbsp;illustration by&nbsp;
            <ExternalLink href="https://icons8.com/illustrations/author/zD2oqC8lLBBA">
              Icons8
            </ExternalLink>
          </Typography>
        </DashListItem>
      </List>
    </>
  );
};

export default Credits;
