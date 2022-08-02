import styled from "styled-components";
import { experimentalStyled as muiStyled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { device } from "styles/device";

export const CardItem = muiStyled(Paper)(({ theme }) => ({
  backgroundColor: "#eee",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.primary,
  fontSize: 16,
}));

export const ContentWrapper = styled.div`
  display: flex;
  height: 100%;
  justify-content: space-between;
  position: relative;
`;

export const Content = styled.div<{ sideBarWidth?: string }>`
  width: ${({ sideBarWidth }) =>
    sideBarWidth ? `calc(100% - ${sideBarWidth})` : "100%"};
  padding: 2rem;

  @media ${device.tablet} {
    width: 100%;
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
