"use client";
import { useContext, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import { ProductContext } from "@/Context/ProductContext";
import { IoMdLaptop } from "react-icons/io";
import { TbPerfume } from "react-icons/tb";
import {
  MdOutlineMedicalServices,
  MdProductionQuantityLimits,
  MdPhoneIphone,
} from "react-icons/md";
import { BiFoodMenu } from "react-icons/bi";
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";
import { IoStar } from "react-icons/io5";

function Blog() {
  const { getAllProducts, categories, getProductsByCategory } =
    useContext(ProductContext);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isCategoryListVisible, setCategoryListVisible] = useState(false);

  const toggleCategoryList = () => {
    setCategoryListVisible(!isCategoryListVisible);
  };

  const productsToShow = selectedCategory
    ? getProductsByCategory(selectedCategory)
    : getAllProducts();

  const getIconForCategory = (category) => {
    switch (category) {
      case "smartphones":
        return <MdPhoneIphone size={22} />;
      case "laptops":
        return <IoMdLaptop size={22} />;
      case "fragrances":
        return <TbPerfume size={22} />;
      case "skincare":
        return <MdOutlineMedicalServices size={22} />;
      case "groceries":
        return <BiFoodMenu size={22} />;
      case "home-decoration":
        return <MdProductionQuantityLimits size={22} />;
      default:
        return null;
    }
  };

  const getCustomCategoryName = (category) => {
    const categorySettings = {
      smartphones: "phones",
      laptops: "computers",
      fragrances: "perfumes",
      skincare: "skin care",
      groceries: "grocery items",
      "home-decoration": "decorations",
    };

    return categorySettings[category] || category;
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.toggle_1}>
        <p> Our Shop Categories</p>
        <div className={styles.toggleButton} onClick={toggleCategoryList}>
          {isCategoryListVisible ? (
            <IoIosArrowDropup size={30} />
          ) : (
            <IoIosArrowDropdown size={30} />
          )}
        </div>
      </div>
      <div className={styles.toggle_2}>
        <p>Prodct 1-30 :</p>
      </div>
      <div
        className={`${styles.categoriesContainer} ${
          isCategoryListVisible ? styles.visible : ""
        }`}
      >
        <ul className={styles.categoryList}>
          {categories.map((category) => (
            <li
              key={category}
              className={`${styles.category} ${
                selectedCategory === category ? styles.selectedCategory : ""
              }`}
              onClick={() => {
                setSelectedCategory(category);
                setCategoryListVisible(false);
              }}
            >
              <span className={styles.icon}>
                {getIconForCategory(category)}
              </span>
              {getCustomCategoryName(category)}
            </li>
          ))}
        </ul>
      </div>

      {productsToShow.map((product) => (
        <Link
          key={product.id}
          href={`/blog/${product.id}`}
          className={styles.post}
        >
          <div className={styles.imageContainer}>
            <Image
              className={styles.image}
              src={product.thumbnail}
              width={350}
              height={250}
              alt="post image"
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
  );
}

export default Blog;
