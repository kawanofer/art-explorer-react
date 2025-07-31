import styled from "styled-components";

export const PaginationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin-top: 32px;
  padding: 24px 0;
`;

export const PaginationComponent = styled.div`
  display: flex;
  justify-content: center;
`;

export const PaginationInfo = styled.div`
  font-size: 0.875rem;
  color: #6b7280;
  text-align: center;

  span {
    font-weight: 500;
  }
`;
