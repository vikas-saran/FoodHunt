import React, { useState } from "react";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";
// console.log(data.data[0].navbarLinks.link);
const HomeNavbar = () => {
  const [show, setShow] = useState(false);

  const navItem =  [
    {
        "id": 1,
        "title": "HOME",
        "link": "heroSection"
    },
    {
        "id": 2,
        "title": "ABOUT US",
        "link": "about"
    },
    {
        "id": 3,
        "title": "SERVICES",
        "link": "qualities"
    },
    {
        "id": 4,
        "title": "TEAM",
        "link": "team"
    },
    {
        "id": 5,
        "title": "RESERVATION",
        "link": "reservation"
    }
]
  return (
    <>
      <nav>
        <div className="logo">FoodHunt</div>
        <div className={show ? "navLinks showmenu" : "navLinks"}>
          <div className="links">
            {navItem.map((element) => (
              <Link
                to={element.link}
                spy={true}
                smooth={true}
                duration={500}
                key={element.id}
              >
                {element.title}
              </Link>
             )
             )}
          </div>
          <NavLink to={"/menu"}>
          <button className="menuBtn">OUR MENU</button>
          </NavLink>
        </div>
        <div className="hamburger" onClick={()=> setShow(!show)}>
                <GiHamburgerMenu/>
        </div>
      </nav>
    </>
  );
};

export default HomeNavbar;
