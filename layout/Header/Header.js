import React from "react";
import LinkNext from "next/link";
import { Link } from "react-scroll";
import Navbar from "../../components/Navbar";
import { isSafariBrowser } from "../../ultis";

const listMenu = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Our team",
    path: "our-team",
  },
  {
    name: "Technologies",
    path: "technologies",
  },
  {
    name: "Industry Verticals",
    path: "industry",
  },
  {
    name: "FAQ",
    path: "faq",
  },
  {
    name: "Contact Us",
    path: "contact",
  },
];

const logo = "/static/assets/logo.png";

const Menu = () => {
  return (
    <div className="container navbar">
      <div className="navbar__logo">
        <LinkNext href="/">
          <img src={logo} alt="logo" />
        </LinkNext>
      </div>
      <div className="navbar__items">
        {listMenu.map((menu) => {
          if (menu.path.includes("/")) {
            return (
              <LinkNext key={menu.path} href={menu.path}>
                <div className="navbar__item">{menu.name}</div>
              </LinkNext>
            );
          }
          return (
            <Link
              key={menu.path}
              activeClass="active"
              to={menu.path}
              spy={true}
              smooth={true}
              duration={isSafariBrowser() ? 1000 : 0}
            >
              <div className="navbar__item ">{menu.name}</div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

const ItemWithHandleClick = React.forwardRef(({ onClick, item }, ref) => {
  return (
    <div className="navbar__item humburger" onClick={onClick} ref={ref}>
      {item.name}
    </div>
  );
});

const MenuHumburger = ({ setIsActive }) => {
  return listMenu.map((menu) => {
    if (menu.path.includes("/")) {
      return (
        <LinkNext key={menu.name} href={menu.path} passHref>
          <ItemWithHandleClick onClick={() => setIsActive(false)} item={menu} />
        </LinkNext>
      );
    }
    return (
      <Link
        key={menu.path}
        activeClass="active"
        to={menu.path}
        spy={true}
        smooth={true}
        duration={isSafariBrowser() ? 1000 : 0}
        onClick={() => setIsActive(false)}
      >
        <div className="navbar__item humburger">{menu.name}</div>
      </Link>
    );
  });
};

const WrapHumburger = () => {
  return (
    <div className="navbar__logo">
      <img src={logo} alt="logo" />
    </div>
  );
};

const Header = (props) => {
  return (
    <Navbar
      bgColorHumburger="#141229"
      bgColorNavbar="#141229"
      colorLine="black"
      renderHamburgerWrap={() => {
        return <WrapHumburger />;
      }}
      renderMenu={() => {
        return <Menu />;
      }}
      renderHamburgerMenu={(setIsActive) => {
        return <MenuHumburger setIsActive={setIsActive} />;
      }}
    />
  );
};
export default Header;
