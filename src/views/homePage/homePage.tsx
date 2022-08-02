import React, { useEffect, useState, useRef } from "react";
import { Header } from "components/header";
import { CartSideBar } from "components/cartSideBar";
import { Content, ContentWrapper, Container } from "./homePage.styled";
import { ProductCard } from "components/productCard";
import { Loader } from "components/loader";
import { Toast } from "components/toast";
import Masonry from "@mui/lab/Masonry";

import { useProductsStore, useCartStore } from "store";
import { ProductItemProp } from "types/product";

const HomePage: React.FC = () => {
  const { products, getProducts, loadingProducts, errorLoadingProducts } =
    useProductsStore();
  const { addItemToCart } = useCartStore();
  const contentWrapperRef = useRef(null);
  const [sideBarMobileOpen, setSideBarMobileOpen] = useState(false);

  const sideBarWidth = "27%";

  useEffect(() => {
    getProducts();
  }, []);

  const addToCart = (item: ProductItemProp) => {
    addItemToCart(item);
  };

  const handleToggleSidebar = () => {
    setSideBarMobileOpen(!sideBarMobileOpen);
  };

  return (
    <>
      <Container>
        <Header openSideBar={handleToggleSidebar} />
        <Loader isShown={loadingProducts} />
        <Toast isShown={errorLoadingProducts} severity="error" />
        <ContentWrapper ref={contentWrapperRef}>
          <Content sideBarWidth={sideBarWidth}>
            <Masonry columns={{ xs: 1, sm: 2, lg: 4 }} spacing={3}>
              {products &&
                products.map((item: ProductItemProp) => (
                  <ProductCard
                    key={item.id}
                    id={item.id}
                    name={item.displayName}
                    credits={
                      item.metadata?.blockPricingStrategy?.credits ?? 0
                    }
                    imageUrl={
                      item.metadata?.blockThumbnailUrl
                    }
                    buttonClicked={() => addToCart(item)}
                  />
                ))}
            </Masonry>
          </Content>
          <CartSideBar
            containerRef={contentWrapperRef}
            width={sideBarWidth}
            toggleStatus={sideBarMobileOpen}
            handleDrawerToggle={handleToggleSidebar}
          />
        </ContentWrapper>
      </Container>
    </>
  );
};

export default HomePage;
