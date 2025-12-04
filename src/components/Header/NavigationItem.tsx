import ListItem from "@mui/material/ListItem";
import NextLink from "@/components/NextLink";

interface NavigationItemProps {
  isActive: boolean;
  color: string;
  activeColor: string;
  href: string;
  name: string;
}

const NavigationItem: React.FC<NavigationItemProps> = ({
  isActive,
  color,
  activeColor,
  href,
  name,
}) => {
  return (
    <ListItem
      key={href}
      sx={{
        width: "120px",
        px: 1,
        // no transform here — animations handled on the link (color + underline)
      }}
    >
      <NextLink
        href={href}
        aria-current={isActive ? "page" : undefined}
        sx={{
          // use an absolutely-positioned ::after element as the active indicator
          position: "relative",
          // reserve a little extra bottom padding so the underline doesn't overlap text
          pb: 1.5,
          boxSizing: "border-box",
          letterSpacing: "1.25px",
          height: "100%",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textDecoration: "none",
          color,
          transition: "color 0.25s ease",
          "&:hover": {
            color: activeColor,
            textDecoration: "none",
          },
          // bottom indicator implemented as an absolutely-positioned pseudo element
          "&::after": {
            content: "''",
            position: "absolute",
            left: "50%",
            bottom: 0,
            height: "4px",
            width: "80%",
            // start collapsed (scaleX(0)) and transparent; translateX centers the element
            transform: isActive
              ? "translateX(-50%) scaleX(1)"
              : "translateX(-50%) scaleX(0)",
            transformOrigin: "center",
            backgroundColor: activeColor,
            opacity: isActive ? 1 : 0,
            transition:
              "transform 250ms ease-out, opacity 200ms ease, background-color 200ms ease",
            borderRadius: 2,
            // hint to the browser that this pseudo-element will animate transform/opacity
            willChange: "transform, opacity",
          },
          // reveal the indicator on hover (subtle preview for inactive items)
          "&:hover::after": {
            transform: "translateX(-50%) scaleX(1)",
            opacity: 0.35,
          },
        }}
      >
        {name}
      </NextLink>
    </ListItem>
  );
};

export default NavigationItem;
