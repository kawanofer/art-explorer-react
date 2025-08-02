import styled from "styled-components";

export const Card = styled.div`
  background-color: ${({ theme }) => theme.white};
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.border};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  max-width: 100%;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 25px -5px rgba(0, 0, 0, 0.2);
  }
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  width: 100%;
  margin: 0 auto;
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
  background-color: ${({ theme }) => theme.background};
  border-radius: 50%;
  padding: 4px;
  backdrop-filter: blur(4px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
`;
