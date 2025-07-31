import React, { useState } from "react";
import { NavLink as RouterNavLink } from "react-router-dom";
import * as S from "./styles";
import logo from "../../assets/logo.svg";

interface MenuItem {
  label: string;
  to: string;
}

const menuItems: MenuItem[] = [
  {
    label: "Obras",
    to: "/",
  },
  {
    label: "Favoritas",
    to: "/favorites",
  },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <S.Container>
      <S.Content>
        <S.LogoSection>
          <S.Logo src={logo} alt="Art Explorer Logo" />
          <S.LogoText>Art Explorer</S.LogoText>
        </S.LogoSection>

        <S.MobileMenuButton onClick={toggleMobileMenu}>☰</S.MobileMenuButton>

        <S.DesktopNav>
          <S.Nav>
            {menuItems.map((item) => (
              <RouterNavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                style={() => ({
                  textDecoration: "none",
                })}
              >
                {({ isActive }) => (
                  <S.NavLink $isActive={isActive}>{item.label}</S.NavLink>
                )}
              </RouterNavLink>
            ))}
          </S.Nav>
        </S.DesktopNav>
      </S.Content>

      <S.MobileNav $isOpen={isMobileMenuOpen}>
        {menuItems.map((item) => (
          <RouterNavLink
            key={item.to}
            to={item.to}
            end={item.to === "/"}
            style={() => ({
              textDecoration: "none",
            })}
          >
            {({ isActive }) => (
              <S.NavLink $isActive={isActive}>{item.label}</S.NavLink>
            )}
          </RouterNavLink>
        ))}
      </S.MobileNav>
    </S.Container>
  );
}
