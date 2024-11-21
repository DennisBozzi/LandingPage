import React from 'react';
import { MenuBarSheet } from "./menu-bar-sheet";
import { Footer } from "./footer";
import { WppButton } from "@/components/wpp-button"

const Layout = ({ children }) => (
  <>
    <MenuBarSheet />
    {children}
    <WppButton />
    <Footer />
  </>
);

export { Layout };