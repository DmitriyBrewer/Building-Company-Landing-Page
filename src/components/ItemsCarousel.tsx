import "semantic-ui-css/semantic.min.css";
import "react-multi-carousel/lib/styles.css";
import React, { Fragment } from "react";
import Simple from "./Simple";
import Section from "./Section";

interface CaruselProps {
  deviceType?: any;
}

const ItemCarusel: React.FC<CaruselProps> = ({ deviceType }) => {
  return (
    <Fragment>
      <Section>
        <Simple deviceType={deviceType} />
      </Section>
    </Fragment>
  );
};
export default ItemCarusel;
