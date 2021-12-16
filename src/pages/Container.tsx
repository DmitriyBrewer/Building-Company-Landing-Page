import React, { useState } from "react";
import background from "./Background.svg";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
import ItemCarousel from "../components/ItemsCarousel";
import emailjs from "emailjs-com";

export default function Containers() {
  const [modal, setModal] = useState<boolean>(false);

  const sendEmail = (e: any) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_28vgfqu",
        "template_02om1d9",
        e.target,
        "user_ZjbCnTFn7SPfdzP2nefaQ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  const handleClickModal = () => {
    setModal(true);
  };
  const handleClickExitModal = () => {
    setModal(false);
  };
  return (
    <div>
      {modal ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            background: `url(${background})`,
            height: "380px",
            margin: "0px",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            border: "1px solid",
            borderColor: "#05303C"
          }}
        >
          <Box
            style={{ marginTop: "30px" }}
            sx={{
              width: 300,
              height: 300
            }}
          >
            <form onSubmit={sendEmail}>
              <List>
                <ListItem
                  style={{
                    display: "flex",
                    justifyContent: "right",
                    textAlign: "right",
                    alignContent: "right"
                  }}
                >
                  <CancelPresentationIcon
                    onClick={handleClickExitModal}
                    style={{ width: "30px", height: "30px", color: "darkred" }}
                  />
                </ListItem>
                <ListItemText>
                  <TextField
                    name="name"
                    type="text"
                    size="small"
                    id="outlined-basic"
                    label="Имя"
                    variant="outlined"
                    margin="dense"
                  />
                </ListItemText>
                <ListItemText>
                  <TextField
                    name="email"
                    type="email"
                    size="small"
                    id="outlined-basic"
                    label="Почта"
                    variant="outlined"
                    margin="dense"
                  />
                </ListItemText>
                <ListItemText>
                  <TextField
                    name="telephone"
                    type="telephone"
                    size="small"
                    id="outlined-basic"
                    label="Телефон"
                    variant="outlined"
                    margin="dense"
                  />
                </ListItemText>
                <ListItem style={{ justifyContent: "center" }}>
                  <Button
                    type="submit"
                    variant="contained"
                    style={{
                      background: "#FFD400",
                      borderColor: "black",
                      border: "2px solid",
                      borderRadius: "20px",
                      color: "black"
                    }}
                  >
                    Отправить
                  </Button>
                </ListItem>
              </List>
            </form>
          </Box>
        </div>
      ) : (
        <div
          style={{
            background: `url(${background})`,
            height: "380px",
            margin: "0px",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            border: "1px solid",
            borderColor: "#05303C"
          }}
        >
          <h1 style={{ fontSize: "22px", marginTop: "120px" }}>
            АРХИТЕКТУРНО-СТРОИТЕЛЬНОЕ БЮРО
          </h1>
          <p>Проектируем и строим дома по индивидуальному проекту</p>
          <Button
            variant="contained"
            onClick={handleClickModal}
            style={{
              background: "#FFD400",
              borderColor: "black",
              border: "2px solid",
              borderRadius: "20px",
              color: "black"
            }}
          >
            Бесплатная консультация
          </Button>
        </div>
      )}
      <ItemCarousel />
    </div>
  );
}
