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
            Favicon and open graph image: &nbsp;
            <ExternalLink href="https://icons8.com/icon/35926/lotus">
              Lotus
            </ExternalLink>
            &nbsp;icon by&nbsp;
            <ExternalLink href="https://icons8.com">Icons8</ExternalLink>
          </Typography>
        </DashListItem>
        <DashListItem>
          <Typography>
            Home page background: Photo by&nbsp;
            <ExternalLink href="https://unsplash.com/@andreislobtsov?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
              Andrei Slobtsov
            </ExternalLink>
            &nbsp; on&nbsp;
            <ExternalLink href="https://unsplash.com/photos/green-leaves-painting-Med3Kuxz97c?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
              Unsplash
            </ExternalLink>
          </Typography>
        </DashListItem>
        <DashListItem>
          <Typography>
            Contact page asset: <strong>Stephania plant in plant pot</strong>
            &nbsp;Illustration by&nbsp;
            <ExternalLink href="https://icons8.com/illustrations/author/zD2oqC8lLBBA">
              Icons 8
            </ExternalLink>
            &nbsp; from&nbsp;
            <ExternalLink href="https://icons8.com/illustrations">
              Ouch!
            </ExternalLink>
          </Typography>
        </DashListItem>

        <DashListItem>
          <Typography>
            Not found page asset: <strong>Dizzy plant chlorophytum</strong>
            &nbsp;Illustration by&nbsp;
            <ExternalLink href="https://icons8.com/illustrations/author/zD2oqC8lLBBA">
              Icons 8
            </ExternalLink>
            &nbsp; from&nbsp;
            <ExternalLink href="https://icons8.com/illustrations">
              Ouch!
            </ExternalLink>
          </Typography>
        </DashListItem>
      </List>
    </>
  );
};

export default Credits;
