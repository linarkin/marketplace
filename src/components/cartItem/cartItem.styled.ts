import styled from "styled-components";

export const CartItemStyled = styled.div`
  padding: 2rem;
  border: 1px solid ${({ theme }) => theme?.color?.border};
  border-radius: 7px;
  margin-bottom: 1rem;
`;

export const QuantityElement = styled.div`
  padding: 1rem 0;
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Credits = styled.div`
  padding-bottom: 2rem;
  color: ${({ theme }) => theme?.color?.secondary};
`;
