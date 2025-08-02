import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.background};
  padding: 24px;
`;

export const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const SearchInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.surface};
  padding: 16px 24px;
  border-radius: 8px;
  margin-bottom: 24px;
  border: 1px solid ${({ theme }) => theme.border};

  span {
    color: ${({ theme }) => theme.textPrimary};
    font-weight: 500;
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 12px;
    text-align: center;
  }
`;

export const BackButton = styled.button`
  background-color: ${({ theme }) => theme.interactivePrimary};
  color: ${({ theme }) => theme.white};
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.interactiveHover};
    transform: translateY(-1px);
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 12px 16px;
  }
`;
