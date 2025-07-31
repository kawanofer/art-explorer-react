import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  background-color: #f7f8fa;
  padding: 24px;
`;

export const Content = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

export const Title = styled.h2`
  font-size: 2.25rem;
  font-weight: bold;
  color: #111827;
  margin-bottom: 32px;
  text-align: center;
`;

export const ArtworkGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
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
  transition: all 0.3s ease;
  transform: translateY(0);

  &:hover {
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    transform: translateY(-4px);
  }
`;

export const ImageContainer = styled.div`
  aspect-ratio: 1;
  overflow: hidden;
`;

export const ArtworkImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
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
`;

export const InfoLabel = styled.span`
  font-weight: 500;
  color: #374151;
`;
