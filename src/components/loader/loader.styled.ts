import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.8);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const IconWrapper = styled.div`
  font-size: 5rem;
  width: 50px;
  height: 50px;
`;
