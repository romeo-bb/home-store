import "./Footer.css";

function Footer() {
  return (
    <>
      <footer>
        <div className="footer-links">
          <a href="https://twitter.com/mandalosy">About</a>
          <a href="https://twitter.com/mandalosy">Store locator</a>
          <a href="https://twitter.com/mandalosy">FAQs</a>
          <a href="https://twitter.com/mandalosy">News</a>
          <a href="https://twitter.com/mandalosy">Careers</a>
          <a href="https://twitter.com/mandalosy">Contact Us</a>
        </div>
        <p className="love">
        © Copyright 2024&nbsp; by{" "}
          <a
            target="_blank"
            rel="noreferrer"
            style={{ color: "white" }}
            href="https://twitter.com/mandalosy"
          >
            &nbsp; ANDALOSY
          </a>
        </p>
      </footer>
    </>
  );
}

export default Footer;
