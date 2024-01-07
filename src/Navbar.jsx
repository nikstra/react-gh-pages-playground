import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

const NavUnlisted = styled.ul`
  display: flex;

  a {
    text-decoration: none;
  }

  li {
    color: black;
    font-size: 1.3rem;
    list-style: none;
    margin: 0 0.8rem;
    position: relative;
  }

  .current {
    li {
      border-bottom: 2px solid black;
    }
  }
`;

const links = [
  { name: "Home", path: "/" },
  { name: "Jokes", path: "/jokes" },
  { name: "About", path: "/about" },
  //   { name: "⚙", path: "/settings", modal: true }, // html code: &#x2699;
  { name: "⚙️", path: "/settings", modal: true }, // html code: &#x2699;&#xfe0f;
];

const isCurrentPage = ({ isActive }) => (isActive ? "current" : "");

const Navbar = () => {
  return (
    <NavUnlisted>
      {" "}
      {links.map((link, index) => (
        <NavLink
          key={index}
          to={link.path}
          end
          className={isCurrentPage}
          state={link.modal ? { modal: link.modal } : null}
        >
          <li>{link.name}</li>
        </NavLink>
      ))}
    </NavUnlisted>
  );
};

export default Navbar;
