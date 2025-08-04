import styled from "styled-components";

export const Container = styled.header`
  background-color: ${({ theme }) => theme.red};
  color: #fff;
  padding: 0;
  box-shadow: 0 2px 8px rgba(228, 0, 43, 0.3);
  position: sticky;
  top: 0;
  z-index: 1000;
`;

export const Content = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
`;

export const LogoSection = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.8;
  }
`;

export const Logo = styled.img`
  width: 40px;
  height: 40px;
  filter: brightness(0) invert(1);
`;

export const LogoText = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
  letter-spacing: -0.5px;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const NavLink = styled.span<{ $isActive?: boolean }>`
  color: #fff;
  text-decoration: none;
  padding: 12px 20px;
  border-radius: 8px;
  font-weight: 500;
  transition: all 0.2s ease;
  position: relative;

  ${({ $isActive }) =>
    $isActive
      ? `
        font-weight: bold;
      `
      : `
        &:hover {
          background-color: rgba(255, 255, 255, 0.1);
          transform: translateY(-1px);
        }
      `}
`;

export const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 8px;
  border-radius: 4px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

export const DesktopNav = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MobileNav = styled.div<{ $isOpen: boolean }>`
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: ${({ theme }) => theme.red};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  padding: 16px;
  flex-direction: column;
  gap: 8px;
  align-items: stretch;

  ${({ $isOpen }) =>
    $isOpen &&
    `
    display: flex;
  `}

  @media (max-width: 768px) {
    display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
  }
`;
