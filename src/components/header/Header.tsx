import React, { useEffect, useState } from "react";
import "./Header.css";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">EduAI</div>

        <nav className="nav">
          <a href="#">Trang chủ</a>
          <a href="#">Khóa học</a>
          <a href="#">Tài liệu</a>
          <a href="#">Giới thiệu</a>
          <a href="#">Blog</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
