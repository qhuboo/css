import React from "react";
import styled from "styled-components/macro";

import { COLORS, WEIGHTS } from "../../constants";
import { formatPrice, pluralize, isNewShoe } from "../../utils";
import Spacer from "../Spacer";

const ShoeCard = ({
  slug,
  name,
  imageSrc,
  price,
  salePrice,
  releaseDate,
  numOfColors,
}) => {
  // There are 3 variants possible, based on the props:
  //   - new-release
  //   - on-sale
  //   - default
  //
  // Any shoe released in the last month will be considered
  // `new-release`. Any shoe with a `salePrice` will be
  // on-sale. In theory, it is possible for a shoe to be
  // both on-sale and new-release, but in this case, `on-sale`
  // will triumph and be the variant used.
  // prettier-ignore
  const variant = typeof salePrice === 'number'
    ? 'on-sale'
    : isNewShoe(releaseDate)
      ? 'new-release'
      : 'default'

  return (
    <Link href={`/shoe/${slug}`}>
      <Wrapper>
        <ImageWrapper>
          <Image alt="" src={imageSrc} />
          {variant === "new-release" ? (
            <JustReleasedFlag>Just released!</JustReleasedFlag>
          ) : variant === "on-sale" ? (
            <OnSaleFlag>Sale</OnSaleFlag>
          ) : (
            <></>
          )}
        </ImageWrapper>
        <Spacer size={12} />
        <Row>
          <Name>{name}</Name>
          <Price>
            {variant === "on-sale" ? (
              <Del>{formatPrice(price)}</Del>
            ) : (
              <p>{formatPrice(price)}</p>
            )}
          </Price>
        </Row>
        <Row>
          <ColorInfo>{pluralize("Color", numOfColors)}</ColorInfo>
          {variant === "on-sale" && (
            <SalePrice>{formatPrice(salePrice)}</SalePrice>
          )}
        </Row>
      </Wrapper>
    </Link>
  );
};

const Link = styled.a`
  text-decoration: none;
  color: inherit;
`;

const Wrapper = styled.article``;

const ImageWrapper = styled.div`
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  border-radius: 16px 16px 4px 4px;
`;

const Row = styled.div`
  font-size: 1rem;
  display: flex;
  justify-content: space-between;
`;

const Name = styled.h3`
  font-weight: ${WEIGHTS.medium};
  color: ${COLORS.gray[900]};
`;

const Price = styled.span``;

const ColorInfo = styled.p`
  color: ${COLORS.gray[700]};
`;

const SalePrice = styled.span`
  font-weight: ${WEIGHTS.medium};
  color: ${COLORS.primary};
`;

const JustReleasedFlag = styled.div`
  background-color: ${COLORS.secondary};
  position: absolute;
  border-radius: 2px;
  width: fit-content;
  top: 12px;
  right: -4px;
  padding: 10px;
  color: ${COLORS.white};
  font-family: "Raleway";
  font-weight: 700;
  font-size: ${14 / 16}rem;
`;

const OnSaleFlag = styled.div`
  background-color: ${COLORS.primary};
  position: absolute;
  border-radius: 2px;
  width: fit-content;
  top: 12px;
  right: -4px;
  padding: 10px;
  color: ${COLORS.white};
  font-family: "Raleway";
  font-weight: 700;
  font-size: ${14 / 16}rem;
`;

const Del = styled.del`
  color: ${COLORS.gray[700]};
`;
export default ShoeCard;
