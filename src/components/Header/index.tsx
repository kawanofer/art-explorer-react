import React, { useState } from "react";
import { NavLink as RouterNavLink, useNavigate } from "react-router-dom";

import logo from "../../assets/logo.svg";

import ThemeToggle from "../ThemeToggle";
import * as S from "./styles";

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
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <S.Container>
      <S.Content>
        <S.LogoSection onClick={handleLogoClick}>
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
          <ThemeToggle />
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
        <ThemeToggle />
      </S.MobileNav>
    </S.Container>
  );
}
