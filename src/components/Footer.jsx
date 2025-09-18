function Footer() {
  return (
    <footer style={{
      background: "#f4f4f4",
      padding: "20px",
      textAlign: "center",
      marginTop: "40px"
    }}>
      <p>© {new Date().getFullYear()} Jesús Santana Álvarez</p>
      <p>
        📧 <a href="mailto:jesus.santanaalvarez12@gmail.com">
          jesus.santanaalvarez12@gmail.com
        </a>
      </p>
      <p>
        📱 <a href="tel:+34606092069">606092069</a>
      </p>
      <p>
        🔗 <a
          href="https://www.linkedin.com/in/jesús-santana-á lvarez-20b634220"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </p>
    </footer>
  );
}

export default Footer;
