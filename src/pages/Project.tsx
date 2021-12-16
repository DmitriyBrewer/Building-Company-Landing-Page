import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import background from "./Background.svg";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import StarBorderIcon from "@mui/icons-material/StarBorder";

function srcset(
  image: string,
  width: number,
  height: number,
  rows = 1,
  cols = 1
) {
  return {
    src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${width * cols}&h=${
      height * rows
    }&fit=crop&auto=format&dpr=2 2x`
  };
}

export default function CustomImageList() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          background: `url(${background})`,
          margin: "0px",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          border: "1px solid",
          borderColor: "#05303C"
        }}
      >
        <ImageList
          sx={{
            width: 600,
            height: 450,
            transform: "translateZ(0)"
          }}
          rowHeight={200}
          gap={1}
        >
          {itemData.map((item:any) => {
            const cols = item.featured ? 2 : 1;
            const rows = item.featured ? 2 : 1;

            return (
              <ImageListItem key={item.img} cols={cols} rows={rows}>
                <img
                  {...srcset(item.img, 250, 200, rows, cols)}
                  alt={item.title}
                  loading="lazy"
                />
                <ImageListItemBar
                  sx={{
                    background:
                      "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
                      "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"
                  }}
                  title={item.title}
                  position="top"
                />
              </ImageListItem>
            );
          })}
        </ImageList>
      </div>
      <a
        href="https://swhouse.pro/portfolio"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none" }}
      >
        <Button
          variant="contained"
          style={{
            background: "#FFD400",
            borderColor: "black",
            border: "2px solid",
            borderRadius: "20px",
            color: "black",
            margin: "15px"
          }}
        >
          Подробнее о проектах
        </Button>
      </a>
    </div>
  );
}

const itemData = [
  {
    img:
      "https://static.wixstatic.com/media/f1ed8b_c33d119ae6ca4d8cb469bb5668387f58~mv2_d_3264_2448_s_4_2.jpg/v1/fill/w_283,h_212,al_c,q_80,usm_0.66_1.00_0.01/f1ed8b_c33d119ae6ca4d8cb469bb5668387f58~mv2_d_3264_2448_s_4_2.webp",
    title: "Комбинированный дом"
  },
  {
    img:
      "https://static.wixstatic.com/media/f1ed8b_3aff6fdaeda640b2b08535b537e8d1d0~mv2.png/v1/fill/w_283,h_212,al_c,q_85,usm_0.66_1.00_0.01/f1ed8b_3aff6fdaeda640b2b08535b537e8d1d0~mv2.webp",
    title: "Каркасный дом"
  },
  {
    img:
      "https://static.wixstatic.com/media/f1ed8b_efa4fe4a155c4d70bf5c6de4b144cb55~mv2_d_1600_1200_s_2.jpg/v1/fill/w_283,h_212,al_c,q_80,usm_0.66_1.00_0.01/f1ed8b_efa4fe4a155c4d70bf5c6de4b144cb55~mv2_d_1600_1200_s_2.webp",
    title: "Норд"
  },

  {
    img:
      "https://static.wixstatic.com/media/f1ed8b_c13cfcee33614645bed706fec482ec2a~mv2_d_2880_1920_s_2.jpg/v1/fill/w_283,h_212,al_c,q_80,usm_0.66_1.00_0.01/f1ed8b_c13cfcee33614645bed706fec482ec2a~mv2_d_2880_1920_s_2.webp",
    title: "Гармоничный"
  },
  {
    img:
      "https://static.wixstatic.com/media/f1ed8b_1483089615b24d2b86be3cc437d3a224~mv2_d_2880_1920_s_2.jpg/v1/fill/w_283,h_212,al_c,q_80,usm_0.66_1.00_0.01/f1ed8b_1483089615b24d2b86be3cc437d3a224~mv2_d_2880_1920_s_2.webp",
    title: "Очаровательный"
  },
  {
    img:
      "https://static.wixstatic.com/media/f1ed8b_c0442f72afaa496a856ce4487b1d0ac3~mv2_d_2880_1920_s_2.jpg/v1/fill/w_283,h_212,al_c,q_80,usm_0.66_1.00_0.01/f1ed8b_c0442f72afaa496a856ce4487b1d0ac3~mv2_d_2880_1920_s_2.webp",
    title: "Комфортный"
  },
  {
    img:
      "https://static.wixstatic.com/media/f1ed8b_c89c9992a44d4b028cffef9d1ca8fcaa~mv2_d_2880_1920_s_2.jpg/v1/fill/w_283,h_212,al_c,q_80,usm_0.66_1.00_0.01/f1ed8b_c89c9992a44d4b028cffef9d1ca8fcaa~mv2_d_2880_1920_s_2.webp",
    title: "Удобный"
  },
  {
    img:
      "https://static.wixstatic.com/media/f1ed8b_947b2b503c5f4bb8bafbaf90a35dd2ef~mv2_d_2880_1920_s_2.jpg/v1/fill/w_283,h_212,al_c,q_80,usm_0.66_1.00_0.01/f1ed8b_947b2b503c5f4bb8bafbaf90a35dd2ef~mv2_d_2880_1920_s_2.webp",
    title: "Уютный"
  }
];
