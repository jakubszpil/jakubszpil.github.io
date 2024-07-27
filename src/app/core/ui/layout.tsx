import type { ReactNode } from "react";
import { IconLoader } from "@tabler/icons-react";
import { useNavigation } from "react-router-dom";

import Navbar from "./navbar";
import Footer from "./footer";

export interface LayoutProps {
  children: ReactNode;
}

const { connection } = navigator as Navigator & {
  connection: { effectiveType: string; downlink: number };
};

const showLoader =
  connection.effectiveType !== "4g" || connection.downlink < 10;

export default function Layout(props: LayoutProps) {
  const navigation = useNavigation();

  const loading =
    showLoader && ["loading", "submitting"].includes(navigation.state);

  return (
    <>
      <Navbar>
        <Navbar.Link className="font-bold" to="/">
          jakubszpil
        </Navbar.Link>
        <div className="flex-1">
          {loading && (
            <IconLoader className="animate-spin" aria-label="Trwa ładowanie" />
          )}
        </div>
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
        <Footer.Link to="/search">🔍 Szukaj</Footer.Link>
      </Footer>
    </>
  );
}
