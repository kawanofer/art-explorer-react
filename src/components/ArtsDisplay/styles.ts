import styled from "styled-components";
import { Card as MuiCard, CardContent, Button } from "@mui/material";

export const Container = styled.div`
  width: 100%;
`;

export const Card = styled(MuiCard)`
  background-color: ${({ theme }) => theme.white};
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`;

export const CardWrapper = styled.div`
  padding: 16px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const CardMedia = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 8px;
`;

export const InfoLabel = styled.div`
  font-size: 1.1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.textPrimary};
  margin-bottom: 16px;
  font-family: ${({ theme }) => theme.fontFamilySerif};
`;

export const InfoText = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.textSecondary};
  font-weight: normal;
`;

export const StyledFavoriteIconContainer = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  background-color: ${({ theme }) => theme.white};
  border-radius: 50%;
  padding: 4px;
  backdrop-filter: blur(4px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  border: 1px solid ${({ theme }) => theme.border};
`;

export const StyledCard = styled(Card)`
  background-color: ${({ theme }) => theme.white} !important;
  color: ${({ theme }) => theme.textPrimary} !important;
  border: 1px solid ${({ theme }) => theme.border} !important;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15) !important;
  }
`;

export const StyledCardContent = styled(CardContent)`
  background-color: ${({ theme }) => theme.white} !important;
  color: ${({ theme }) => theme.textPrimary} !important;
`;

export const LoadMoreContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 32px;
  padding: 24px 0;
`;

export const LoadMoreButton = styled(Button)`
  background-color: ${({ theme }) => theme.interactivePrimary} !important;
  color: ${({ theme }) => theme.white} !important;
  padding: 12px 32px !important;
  font-size: 1rem !important;
  font-weight: 600 !important;
  border-radius: 8px !important;
  text-transform: none !important;
  min-width: 200px !important;

  &:hover {
    background-color: ${({ theme }) => theme.interactiveHover} !important;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2) !important;
  }

  &:disabled {
    background-color: ${({ theme }) => theme.grey} !important;
    color: ${({ theme }) => theme.textSecondary} !important;
    cursor: not-allowed !important;

    &:hover {
      transform: none !important;
      box-shadow: none !important;
    }
  }

  transition: all 0.2s ease !important;
`;
