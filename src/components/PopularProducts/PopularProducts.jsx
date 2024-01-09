"use client";
import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./PopularProducts.module.css";
import {
  CarouselProvider,
  Slider,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { ProductContext } from "@/Context/ProductContext";
import { IoStar } from "react-icons/io5";
import { images } from "./data";
const PopularProducts = () => {
  const { products } = useContext(ProductContext);
  const [visibleSlides, setVisibleSlides] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 600) {
        setVisibleSlides(1);
      } else if (screenWidth >= 600 && screenWidth < 930) {
        setVisibleSlides(2);
      } else if (screenWidth >= 930 && screenWidth < 1224) {
        setVisibleSlides(3);
      } else if (screenWidth >= 1224) {
        setVisibleSlides(4);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={styles.popular_products}>
      <p className={styles.main_title}>
        Our Popular <span>Products</span>
      </p>

      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={products.length}
        visibleSlides={visibleSlides}
        lockOnWindowScroll={true}
      >
        <div className={styles.arrow}>
          <div className={styles.arrow_main}>
            <ButtonBack className={styles.arrow_slider}>
              <FaArrowLeft size={20} />
            </ButtonBack>
            <ButtonNext className={styles.arrow_slider}>
              <FaArrowRight size={20} />{" "}
            </ButtonNext>
          </div>
        </div>
        <Slider>
          <div className={styles.mainContainer}>
            {products.map((product) => (
              <Link
                key={product.id}
                href={`/blog/${product.id}`}
                className={styles.post}
              >
                <div className={styles.imageContainer}>
                  <Image
                    className={styles.image}
                    src={product.thumbnail}
                    width={visibleSlides === 1 ? 250 : 350}
                    height={visibleSlides === 1 ? 180 : 250}
                    alt="product image"
                  />
                  <div className={styles.content}>
                    <h1 className={styles.title}>{product.title}</h1>
                    <div className={styles.rating}>
                      <p>{product.rating}</p>
                      <div>
                        {" "}
                        <IoStar size={16} />
                      </div>
                    </div>
                    <p className={styles.text}>{product.description}</p>
                    <p className={styles.price}>${product.price}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Slider>
      </CarouselProvider>
      <div className={styles.spicial_products}>
        {images.map((image) => (
          <div key={image.id} className={styles.product_content}>
            <Link href={"/blog"}>
              <div className={styles.content}>
                <h2 className={styles.title}>{image.title}</h2>
                <p className={styles.disc}>{image.disc}</p>
                <p className={styles.text}>{image.text}</p>
              </div>
              <Image
                src={`/images/fetures/${image.name}.jpg`}
                alt={image.name}
                width={300}
                height={300}
                className={styles.content_image}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;
