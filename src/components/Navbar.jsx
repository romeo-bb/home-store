import "./Navbar.css";
import LogoImg2 from "../img/newlogo2.png";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import CartWithItems from "./CartWithItems";
import EmptyCart from "./EmptyCart";
import { CartContext } from "../pages/ProductPage";
import { IconMenu2, IconShoppingCart, IconX } from "@tabler/icons-react";

function Navbar() {
  const [sticky, setSticky] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);
  const [cart, setCart] = useState(false);

  const { cartItem } = useContext(CartContext);

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  const openCart = () => {
    setCart(!cart);
  };

  window.addEventListener("scroll", handleScroll);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleNav = () => {
    setMobileNav(!mobileNav);
  };
   // Define your navigation links
  const links = [
    { to: '/', label: 'Home'},
    { to: '/categories/all', label: 'Categories' },
    { to: '/categories/lamps', label: 'Lamps' },
    { to: '/ContactUs', label: 'Contact Us'},
  ];

  return (
    <>

        {/* Mobile menu dropdown */}
      <div onClick={handleNav}  style={{ transition: 'transform 1s', transform: mobileNav ? 'translateY(0)' : 'translateY(-100%)', backgroundColor: "white", opacity: 0.9}} className={mobileNav ? ' text-black left-0 top-32 w-full px-4 py-7 flex flex-col z-50 rounded-b-[30px] drop-shadow-lg fixed' : 'absolute left-[-100%] transition duration-1000'}>
        <ul className="py-4 pt-10 text-center">
          {links.map((link, index) => (
            <Link to={link.to} key={index}>
              <li
                className="text-6xl py-4"
              >
                {link.label}
              </li>
            </Link>
          ))}
        </ul>
      </div>
      

      {/* overlay */}
      <div
        onClick={openCart}
        className={`page-overlay ${cart ? "open-flex" : "closed-flex"}`}
      ></div>

      {/* cart */}
      <div className={`cart-div ${cart ? "open-cart" : "closed-cart"}`}>
        <div className="cart-title-btn">
          <h2 className="cart-full-h2">
            Your Shopping Cart ({cartItem.length})
          </h2>
          <IconX onClick={openCart} />
        </div>

        <div className="cart-body">
          {cartItem.length < 1 ? (
            <EmptyCart openCart={openCart} />
          ) : (
            <CartWithItems />
          )}
        </div>
      </div>

      <nav className="navbar">
        <div className="container">
          <div className={`nav-container ${sticky ? "cont-sticky" : ""}`}>
            <Link to="/">
              <img
                onClick={scrollToTop}
                src={LogoImg2}
                alt="logo"
                className="logo-img"
              />
            </Link>
            <div className="nav-links">
            <Link onClick={() => window.scrollTo(0, 0)} to="/">
                Home
              </Link>
              <Link onClick={() => window.scrollTo(0, 0)} to="/categories/all">
                categories
              </Link>
              <Link
                onClick={() => window.scrollTo(0, 0)}
                to="/ContactUs"
              >
                Contact Us
              </Link>
              <i
                data-array-length={cartItem.length}
                onClick={openCart}
                className={`${
                  cartItem.length < 1 ? "cart-icon" : "cart-icon with-items"
                }`}
              >
                <IconShoppingCart />
              </i>
            </div>
            <div className="hamburger-menu">
              <i
                data-array-length={cartItem.length}
                onClick={openCart}
                className={`hamburger-cart ${
                  cartItem.length < 1 ? "cart-icon" : "cart-icon with-items"
                }`}
              >
                <IconShoppingCart />
              </i>
              <i
                onClick={handleNav}
                className="hamburger-hamb"
              >
                {mobileNav ? <IconX /> : <IconMenu2 />}
              </i>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
