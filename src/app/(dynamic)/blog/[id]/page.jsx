"use client";
import { useState, useContext, useEffect } from "react";
import { IoStar } from "react-icons/io5";
import { CartContext } from "@/Context/CartContext";
import { ProductContext } from "@/Context/ProductContext";
import { useParams } from "next/navigation";
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

function Post() {
  const { addToCart } = useContext(CartContext);
  const { products, setProductId } = useContext(ProductContext);
  const { id } = useParams();

  useEffect(() => {
    setProductId(id);
  }, [id, setProductId]);

  const [mainImage, setMainImage] = useState("");

  useEffect(() => {
    const selectedProduct = products.find((item) => item.id === parseInt(id));
    setMainImage(selectedProduct ? selectedProduct.thumbnail : "");
  }, [id, products]);

  const updateMainImage = (newImage) => {
    setMainImage(newImage);
  };

  const fetchData = async () => {
    try {
      const res = await fetch(`https://dummyjson.com/products/${id}`);

      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }

      const productData = await res.json();
      setMainImage(productData.thumbnail);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  if (!mainImage) {
    return <p>Loading...</p>;
  }

  const selectedProduct = products.find((item) => item.id === parseInt(id));

  return (
    <div>
      <div className={styles.tags}>
        <p>
          <Link href={"/"}>Home Page</Link>{" "}
        </p>
        <span>/</span>
        <p>
          {" "}
          {selectedProduct ? selectedProduct.category : "No Category Available"}
        </p>
        <span>/</span>
        <p>{selectedProduct ? selectedProduct.brand : "No Brand Avalable"}</p>
        <span>/</span>
        <p>{selectedProduct ? selectedProduct.title : "No Title Available"}</p>
      </div>
      <div className={styles.container}>
        <div className={styles.product_img}>
          <div className={styles.content}>
            <div className={styles.gallery}>
              {selectedProduct &&
                selectedProduct.images &&
                selectedProduct.images.map((image, index) => (
                  <Image
                    className={styles.image_gallery}
                    src={image}
                    alt={selectedProduct.title}
                    width={120}
                    height={120}
                    key={index}
                    onClick={() => updateMainImage(image)}
                  />
                ))}
            </div>
          </div>
          <div className={styles.imageContainer}>
            <Image
              className={styles.image}
              src={mainImage}
              alt={
                selectedProduct ? selectedProduct.title : "No Title Available"
              }
              fill={true}
            />
            <span className={styles.author}>
              {selectedProduct
                ? selectedProduct.category
                : "No Category Available"}
            </span>
          </div>
        </div>

        <header className={styles.header}>
          <div className={styles.info}>
            <h1 className={styles.title}>
              {selectedProduct ? selectedProduct.title : "No Title Available"}
            </h1>
            <p className={styles.desc}>
              {selectedProduct
                ? selectedProduct.description
                : "No Description Available"}
            </p>
          </div>

          <div className={styles.ratingContainer}>
            <p className={styles.textContainer}>
              Rating :{" "}
              {selectedProduct ? selectedProduct.rating : "No Rating Available"}
            </p>
            <div className={styles.starContainer}>
              {Array.from({
                length: selectedProduct ? selectedProduct.rating : 0,
              }).map((_, index) => (
                <IoStar size={20} key={index} />
              ))}
            </div>
          </div>
          <div>
            <p className={styles.price}>
              Price : $
              {selectedProduct ? selectedProduct.price : "No Price Avalable"}
            </p>
          </div>
          <div>
            <p className={styles.brand}>
              {" "}
              Brand :{" "}
              {selectedProduct ? selectedProduct.brand : "No brand Avalable"}
            </p>
          </div>
          <div>
            <p className={styles.text}>
              HEXASHOP offers a diverse range of quality products. From
              cutting-edge electronics like smartphones and laptops to exquisite
              fragrances and skincare essentials, we cater to various needs.
              Explore our curated selection of groceries, home decorations, and
              more. Our user-friendly website ensures a seamless shopping
              experience. Discover top-notch items, enjoy competitive prices,
              and benefit from our efficient delivery services. Elevate your
              shopping journey with HEXASHOP - where quality meets convenience.
            </p>
          </div>
          <div className={styles.content}>
            <p className={styles.text}>
              {selectedProduct
                ? selectedProduct.additionalText
                : "No Additional Text Available"}
            </p>
          </div>
          <div>
            <button
              className={styles.button}
              onClick={() =>
                addToCart(
                  selectedProduct,
                  selectedProduct ? selectedProduct.id : null
                )
              }
            >
              Add To Cart
            </button>
          </div>
        </header>
      </div>
      <div className={styles.shopDesc}>
        <h4 className={styles.shopDesc_h}>Our Shop</h4>
        <p className={styles.shopDesc_p}>
          HexaShop is a unique store offering a distinctive shopping experience.
          With a wide range of high-quality products, it focuses on modern
          design and innovation. HexaShop provides customers with an easy and
          convenient shopping experience, accompanied by exceptional customer
          service. The name HexaShop reflects the spirit of six, delivering a
          diverse and comprehensive array of products. Discover quality and
          style in every corner with HexaShop.
        </p>
      </div>
    </div>
  );
}

export default Post;
