import * as React from "react";
import { Link } from "react-router-dom";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";

export default function MenuPopupState() {
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <IconButton
            {...bindTrigger(popupState)}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            style={{ background: "#FFD400", color: "black", marginLeft: "2px" }}
          >
            <MenuIcon />
          </IconButton>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={popupState.close}>
              <Link
                to="/about"
                style={{ textDecoration: "none", color: "black" }}
              >
                О Компании
              </Link>
            </MenuItem>
            <MenuItem onClick={popupState.close}>
              <Link
                to="/project"
                style={{ textDecoration: "none", color: "black" }}
              >
                Проекты{" "}
              </Link>
            </MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}
