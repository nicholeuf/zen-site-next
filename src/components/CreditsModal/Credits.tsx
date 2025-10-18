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
            Home page asset: Illustration by&nbsp;
            <ExternalLink href="https://unsplash.com/@lucilanaves?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Lucila Naves
            </ExternalLink>
            &nbsp;on&nbsp;
            <ExternalLink href="https://unsplash.com/illustrations/monstera-leaves-are-illustrated-in-black-and-white-fMEFsbfHWw4?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Unsplash
            </ExternalLink>
          </Typography>
        </DashListItem>

        <DashListItem>
          <Typography>
            Contact Page and Not Found Page asset: Illustration by&nbsp;
            <ExternalLink href="https://unsplash.com/@lucilanaves?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Lucila Naves
            </ExternalLink>
            &nbsp;on&nbsp;
            <ExternalLink href="https://unsplash.com/illustrations/a-plant-with-leaves-cascading-downward-o5zKF1LOoXk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Unsplash
            </ExternalLink>
          </Typography>
        </DashListItem>
      </List>
    </>
  );
};

export default Credits;
