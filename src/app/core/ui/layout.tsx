import type { ReactNode } from "react";

import Navbar from "./navbar";
import Footer from "./footer";

export type LayoutProps = {
  children: ReactNode;
};

export default function Layout(props: LayoutProps) {
  return (
    <>
      <Navbar>
        <Navbar.Link className="font-bold" to="/">
          jakubszpil
        </Navbar.Link>
        <Navbar.Menu>
          <Navbar.Link to="/">🏠 Strona główna</Navbar.Link>
          <Navbar.Link to="/blog">📝 Blog</Navbar.Link>
          <Navbar.Link to="/learning">🏫 Learning</Navbar.Link>
          <Navbar.Link to="/portfolio">🛠️ Portfolio</Navbar.Link>
          <Navbar.Link to="/me">🙋‍♂️ O mnie</Navbar.Link>
        </Navbar.Menu>
      </Navbar>
      <main>{props.children}</main>
      <Footer>
        <Footer.Link to="/">🏠 Strona główna</Footer.Link>
        <Footer.Link to="/blog">📝 Blog</Footer.Link>
        <Footer.Link to="/learning">🏫 Learning</Footer.Link>
        <Footer.Link to="/portfolio">🛠️ Portfolio</Footer.Link>
        <Footer.Link to="/me">🙋‍♂️ O mnie</Footer.Link>
        <Footer.Link to="/szukaj">🔍 Wyszukaj</Footer.Link>
      </Footer>
    </>
  );
}
