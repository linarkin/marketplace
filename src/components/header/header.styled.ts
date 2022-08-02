import styled from "styled-components";
import { device } from "styles/device";

export const HeaderStyled = styled.div`
  position: sticky;
  top: 0;
  height: 8rem;
  padding: 2rem;
  text-align: center;
  border-bottom: 1px solid ${({ theme }) => theme?.color?.border};
  margin-bottom: 3rem;
  background: #fff;
  z-index: 9999;
  color: ${({ theme }) => theme?.color?.secondary};
`;

export const CartIconWrapper = styled.div`
  position: absolute;
  right: 2rem;
  top: 3rem;
  display: none;

  @media ${device.tablet} {
    display: block;
  }
`;
