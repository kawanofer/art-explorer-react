import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 16px;
  }
`;

export const StyledCard = styled.div`
  background-color: ${({ theme }) => theme.colorCard};
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.colorDivider};
`;

export const StyledCardContent = styled.div`
  padding: 16px;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colorCard};
  color: ${({ theme }) => theme.colorTextPrimary};
`;

export const CardMedia = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 12px;
`;

export const InfoLabel = styled.div`
  font-size: 1.1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colorTextPrimary};
  margin-bottom: 8px;
  font-family: ${({ theme }) => theme.fontFamilySerif};
  line-height: 1.3;
`;

export const InfoText = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colorTextSecondary};
  font-weight: normal;
  margin: 4px 0;
  line-height: 1.4;
`;

export const StyledFavoriteIconContainer = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  background-color: ${({ theme }) => theme.colorBackground};
  border-radius: 50%;
  padding: 4px;
  backdrop-filter: blur(4px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  border: 1px solid ${({ theme }) => theme.colorDivider};
  z-index: 2;
`;

export const LoadMoreContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 32px;
  padding: 24px 0;
`;

export const LoadMoreButton = styled.button`
  background-color: ${({ theme }) => theme.colorPrimary};
  color: ${({ theme }) => theme.colorBackground};
  padding: 12px 32px;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  min-width: 200px;
  transition: all 0.2s ease;

  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.colorPrimaryHover};
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colorBorder};
    color: ${({ theme }) => theme.colorTextSecondary};
    cursor: not-allowed;

    &:hover {
      transform: none;
      box-shadow: none;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 300px;
  }
`;
