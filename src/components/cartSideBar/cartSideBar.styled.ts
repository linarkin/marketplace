import styled from "styled-components";
import { device } from "styles/device";

export const CartSideBarStyled = styled.div`
  top: 11rem;
  width: 100%;
  height: 100%;
  padding: 1.5rem;
  border-left: 1px solid ${({ theme }) => theme?.color?.border};
  min-height: 40rem;
  font-size: 2rem;

  @media ${device.tablet} {
    margin-top: 9rem;
  }
`;

export const CartItem = styled.div`
  padding: 2rem;
  border: 1px solid ${({ theme }) => theme?.color?.border};
  border-radius: 7px;
  margin-bottom: 1rem;
`;

export const Title = styled.div`
  padding-bottom: 2rem;
  font-weight: 600;
  font-size: 2rem;
`;

export const Credits = styled.div`
  padding: 2rem 0;
  font-size: 2rem;
  color: ${({ theme }) => theme?.color?.secondary};
`;
