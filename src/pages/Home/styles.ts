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
  border: 1px solid ${({ theme }) => theme.colorDivider};

  span {
    color: ${({ theme }) => theme.colorTextPrimary};
    font-weight: 500;
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 12px;
    text-align: center;
  }
`;
