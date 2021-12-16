import Carousel from "react-multi-carousel";
import { Image } from "semantic-ui-react";

interface SimpleProps {
  deviceType: any;
}

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    paritialVisibilityGutter: 60
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    paritialVisibilityGutter: 50
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    paritialVisibilityGutter: 30
  }
};
const images = [
  "https://static.wixstatic.com/media/f1ed8b_efa4fe4a155c4d70bf5c6de4b144cb55~mv2_d_1600_1200_s_2.jpg/v1/fill/w_1069,h_802,al_c,q_85,usm_0.66_1.00_0.01/f1ed8b_efa4fe4a155c4d70bf5c6de4b144cb55~mv2_d_1600_1200_s_2.webp",
  "https://static.wixstatic.com/media/f1ed8b_3aff6fdaeda640b2b08535b537e8d1d0~mv2.png/v1/fill/w_796,h_451,al_c,q_85/f1ed8b_3aff6fdaeda640b2b08535b537e8d1d0~mv2.webp",
  "https://static.wixstatic.com/media/f1ed8b_5ebb31247c7a428680536b9a2396dc08~mv2_d_2880_1920_s_2.jpg/v1/fill/w_1203,h_802,al_c,q_85,usm_0.66_1.00_0.01/f1ed8b_5ebb31247c7a428680536b9a2396dc08~mv2_d_2880_1920_s_2.webp",
  "https://static.wixstatic.com/media/f1ed8b_ee34ba74c65b4aa5bdf871c540c337a3~mv2_d_2880_1920_s_2.jpg/v1/fill/w_1203,h_802,al_c,q_85,usm_0.66_1.00_0.01/f1ed8b_ee34ba74c65b4aa5bdf871c540c337a3~mv2_d_2880_1920_s_2.webp'",
  "https://static.wixstatic.com/media/f1ed8b_3e675231110949c5b8246bf8ca5a4466~mv2_d_2880_1920_s_2.jpg/v1/fill/w_1203,h_802,al_c,q_85,usm_0.66_1.00_0.01/f1ed8b_3e675231110949c5b8246bf8ca5a4466~mv2_d_2880_1920_s_2.webp"
];

const Simple: React.FC<SimpleProps> = ({ deviceType }) => {
  return (
    <Carousel
      ssr
      partialVisbile
      deviceType={deviceType}
      itemClass="image-item"
      responsive={responsive}
    >
      {images.slice(0, 5).map((image) => {
        return (
          <Image
            draggable={false}
            style={{ width: "100%", height: "100%" }}
            src={image}
          />
        );
      })}
    </Carousel>
  );
};

export default Simple;
