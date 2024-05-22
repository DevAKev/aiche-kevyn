export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <h2>Built with ❤️ by DevAKev © {year}</h2>

      {/* <div className="social-links">
        <a
          href="
                https://www.linkedin.com/in/kevyn-aiche-0a6b5b1a1/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <i className="fab fa-linkedin"></i>
        </a>
      </div> */}
    </footer>
  );
}
