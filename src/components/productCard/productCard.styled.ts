import styled from "styled-components";
import { experimentalStyled as muiStyled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

export const CardStyled = muiStyled(Paper)(({ theme }) => ({
  backgroundColor: "#eee",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.primary,
  fontSize: 16,
  minHeight: 170,
  display: "flex",
  flexDirection: "column",
  alignItems: "stretch",
  justifyContent: "space-between",
}));

export const Title = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 2rem;
`;

export const Credits = styled.div`
  margin-bottom: 2rem;
`;

export const ImageWrapper = styled.div`
  margin-bottom: 2rem;

  img {
    width: 100%;
  }
`;
