import Box from "@mui/material/Box";

import { footerLinks } from "./constants";
import NavigationItem from "./NavigationItem";
import NavigationList from "./NavigationList";

const Navigation: React.FC = () => {
  return (
    <Box
      component="nav"
      data-testid="footer-nav"
      aria-label="External Navigation"
      sx={{
        height: "100%",
      }}
    >
      <NavigationList>
        {footerLinks.map((item) => (
          <NavigationItem key={item.slug} {...item}>
            <item.icon sx={{ color: "background.default" }} />
          </NavigationItem>
        ))}
      </NavigationList>
    </Box>
  );
};

export default Navigation;
