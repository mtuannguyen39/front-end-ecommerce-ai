import React from "react";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>@{new Date().getFullYear()} EduAI. All right reserved.</p>
        <div className="footer-links">
          <a href="#">Liên hệ</a>
          <a href="#">Chính sách</a>
          <a href="#">Hỗ trợ</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
