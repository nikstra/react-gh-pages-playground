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
];

const isCurrentPage = ({ isActive }) => (isActive ? "current" : "");

const Navbar = () => {
  return (
    <NavUnlisted>
      {" "}
      {links.map((link, index) => (
        <NavLink key={index} to={link.path} end className={isCurrentPage}>
          <li>{link.name}</li>
        </NavLink>
      ))}
    </NavUnlisted>
  );
};

export default Navbar;
