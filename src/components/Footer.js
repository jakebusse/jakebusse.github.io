import "../assets/css/section.css";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="section" id="footer">
      &copy; {year} Jake Busse &ensp; | &ensp; Developed using React
    </div>
  );
}

export default Footer;
