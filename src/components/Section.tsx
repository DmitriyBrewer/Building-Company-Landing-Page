import React from "react";

interface SectionProps {
  children: any;
}

const Section: React.FC<SectionProps> = ({ children }) => {
  return (
    <section
      style={{
        margin: "0px 0 00px 0"
      }}
    >
      {children}
    </section>
  );
};

export default Section;
