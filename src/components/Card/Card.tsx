import React from "react";
import {
  CardContainer,
  CardHeader,
  CardBody,
  CardFooter,
} from "./styles/Card.styles";
import { CardProps } from "./types/Card.types";

const Card: React.FC<CardProps> = ({ header, children, footer }) => {
  return (
    <CardContainer>
      {header && <CardHeader>{header}</CardHeader>}
      <CardBody>{children}</CardBody>
      {footer && <CardFooter>{footer}</CardFooter>}
    </CardContainer>
  );
};

export default Card;
