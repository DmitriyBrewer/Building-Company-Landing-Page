import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../navbar/Logo";
import InstagramIcon from "@mui/icons-material/Instagram";
import CallIcon from "@mui/icons-material/Call";
import Menu from "./Menu";
import "../../../styles.css";

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar style={{ background: "#15323C" }}>
          <Menu />

          <a
            href="https://swhouse.pro/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <Typography className="Typography_more">Узнать больше</Typography>
          </a>

          <Logo />
          <a
            href="https://www.instagram.com/swhouse.pro/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon
              style={{ color: "#FFD400", marginRight: "6px" }}
            ></InstagramIcon>
          </a>
          <a href="tel:+74957402237">
            <CallIcon style={{ color: "white", marginRight: "6px" }}></CallIcon>
          </a>
          <a href="tel:+74957402237" style={{ textDecoration: "none" }}>
            <Typography className="Typography_number">
              +7(495)740-22-37
            </Typography>
          </a>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
