import { useEffect, useState } from "react";
import ProductCard from "./components/product-card/ProductCard";
import { products as mockProducts, Product } from "./data/products";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [priceFilter, setPriceFilter] = useState("all");
  const [filteredProducts, setFilteredProducts] =
    useState<Product[]>(mockProducts);

  useEffect(() => {
    let result = mockProducts.filter((p) =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (priceFilter !== "all") {
      result = result.filter((p) => {
        if (priceFilter === "<500k") return p.price < 500000;
        if (priceFilter === "500kto1m")
          return p.price >= 500000 && p.price < 1000000;
        if (priceFilter === ">1m") return p.price >= 1000000;
        return true;
      });
    }
    setFilteredProducts(result);
  }, [searchTerm, priceFilter]);

  return (
    <>
      <Header />
      <div className="app-container">
        <h1 className="app-title">🎓 Danh sách các khóa học</h1>

        <div className="filters">
          <input
            type="text"
            placeholder="Tìm kiếm sản phẩm..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            value={priceFilter}
            onChange={(e) => setPriceFilter(e.target.value)}
          >
            <option value="all">Tất cả mức giá</option>
            <option value="<500k">Dưới 500k</option>
            <option value="500kto1m">Từ 500k đến 1 triệu</option>
            <option value=">1m">Trên 1 triệu</option>
          </select>
        </div>

        <div className="product-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onViewDetail={() => {}}
              />
            ))
          ) : (
            <p className="not-found-text">Không tìm thấy khóa học phù hợp</p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
