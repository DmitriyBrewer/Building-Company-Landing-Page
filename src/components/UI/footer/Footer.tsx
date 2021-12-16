import { BottomNavigation } from "@mui/material";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import ListItem from "@mui/material/ListItem";

const Footer = () => {
  return (
    <BottomNavigation
      style={{
        background: "#15323C",
        display: "flex",
        textAlign: "center",
        justifyContent: "center"
      }}
    >
      <List style={{ marginRight: "4%" }}>
        <a
          href="mailto:info@swhouse.ru"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <ListItem>
            <MailOutlineIcon style={{ color: "white", marginRight: "2px" }} />
            <Typography style={{ color: "white" }}>swhouse@bk.ru</Typography>
          </ListItem>
        </a>
      </List>
    </BottomNavigation>
  );
};

export default Footer;
