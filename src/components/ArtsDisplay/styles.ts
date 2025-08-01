import styled from "styled-components";

export const ArtworkGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
`;

export const ArtworkCard = styled.div`
  flex: 1;
  min-width: 300px;
  max-width: 400px;
  background: white;
  border-radius: 12px;
  box-shadow:
    0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  cursor: pointer;
`;

export const ImageContainer = styled.div`
  position: relative;
  aspect-ratio: 1;
  overflow: hidden;
`;

export const FavoriteIconContainer = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  z-index: 2;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 50%;
  padding: 4px;
  backdrop-filter: blur(4px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
`;

export const ArtworkImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const CardContent = styled.div`
  padding: 20px;
`;

export const ArtworkTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 12px;
  color: #111827;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const InfoText = styled.p`
  font-size: 0.875rem;
  color: #6b7280;
  font-weight: 400;
`;

export const InfoLabel = styled.div`
  font-weight: 500;
  color: #374151;
`;
