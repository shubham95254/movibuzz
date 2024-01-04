import "./style.scss";

import React, { useState, useEffect } from "react";
import { HiOutlineSearch as SearchIcon } from "react-icons/hi";
import { SlMenu as MenuIcon } from "react-icons/sl";
import { VscChromeClose as CloseIcon } from "react-icons/vsc";
import { useNavigate, useLocation } from "react-router-dom";

import ContentWrapper from "../contentWrapper/contentWrapper";
import logo from "../../assets/logo.svg";

const Header = () => {
  const [show, setShow] = useState("top");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [query, setQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const openSearch = () => {
    setShowSearch(true);
    setMobileMenu(false);
  };
  const openMobileMenu = () => {
    setShowSearch(false);
    setMobileMenu(true);
  };
  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
      setTimeout(() => {
        setShowSearch(false);
      }, 100);
    }
  };
  const searchBtnClickHandler = () => {
    if (query.length > 0) {
      navigate(`/search/${query}`);
    }
  };
  const navigationHandle = (type) => {
    if (type === "movies") {
      navigate("/explore/movies");
    } else {
      navigate("/explore/tv");
    }
    setMobileMenu(false);
  };

  const controlHeader = () => {
    console.log(window.scrollY);
    if (window.scrollY > 300) {
      if (window.scrollY > lastScrollY && !mobileMenu) {
        setShow("hide");
      } else setShow("show");
    } else setShow("top");
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlHeader);

    return () => {
      window.removeEventListener("scroll", controlHeader);
    };
  }, [lastScrollY]);

  useEffect(() => {
    window.scrollTo(0,0);
  }, [location])
  
  return (
    <header className={`header ${mobileMenu ? "mobileView" : ""} ${show}`}>
      <ContentWrapper>
        <div className="logo">
          <img src={logo} alt="movibuzz Logo" onClick={() => navigate("/")} />
        </div>
        <ul className="menuItems">
          <li
            className="menuItem"
            onClick={() => {
              navigationHandle("movies");
            }}
          >
            Movies
          </li>
          <li className="menuItem" onClick={() => navigationHandle()}>
            TV Shows
          </li>
          <li className="menuItem">
            {showSearch ? (
              <CloseIcon
                onClick={() => {
                  setShowSearch(false);
                }}
              />
            ) : (
              <SearchIcon
                onClick={() => {
                  openSearch();
                }}
              />
            )}
          </li>
        </ul>

        {/* {showSearch ? (<CloseIcon onClick={() => { setShowSearch(false) }} />) : <SearchIcon onClick={() => { openSearch() }} />} */}
        <div className="mobileMenuItems">
          {mobileMenu ? (
            <CloseIcon
              onClick={() => {
                setMobileMenu(false);
              }}
            />
          ) : (
            <MenuIcon
              onClick={() => {
                openMobileMenu();
              }}
            />
          )}
          {showSearch ? (
            <CloseIcon
              onClick={() => {
                setShowSearch(false);
              }}
            />
          ) : (
            <SearchIcon
              onClick={() => {
                openSearch();
              }}
            />
          )}
        </div>
      </ContentWrapper>

      {showSearch ? (
        <div className="searchBar">
          <ContentWrapper>
            <div className="searchInput">
              <input
                type="text"
                placeholder="Search for a movie or tv show...."
                onChange={(e) => setQuery(e.target.value)}
                onKeyUp={searchQueryHandler}
              />
              {/* <CloseIcon onClick={() => { setShowSearch(false) }} /> */}
              <SearchIcon
                onClick={searchBtnClickHandler}
              />
              {/* <button id="searchbtnHeader">Search</button> */}
            </div>
          </ContentWrapper>
        </div>
      ) : (
        ""
      )}
    </header>
  );
};

export default Header;
