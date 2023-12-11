"use client"

import { useEffect, useState } from "react";
import { AnimationContainer } from "../../core/AnimationContainer";
import { BlogItemPreview } from "../../core/BlogItemPreview";
import { CategoriesList } from "../CategoriesList";
async function getBlogs() {
  try {
    const response = await fetch("https://c2t-api.onrender.com/interior/news");
  
    const data = await response.json(); // Assuming the API returns JSON data
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null; // You can handle the error case as needed
  }
}

export const MainBlog =  () => {
  const [blogPosts, setBlogPosts] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const data = await getBlogs();
      if (data) {
        setBlogPosts(data);
      }
    };

    fetchData();
  }, []);
  return (
    <section className="flex flex-col  items-start gap-16 px-5 pb-20 md:px-20  2xl:px-60">
      <CategoriesList />
      <AnimationContainer
        amount="0.1"
        className="grid grid-cols-1 gap-8 sm:grid-cols-2  lg:grid-cols-3"
      >
        {blogPosts.map((el, i) => (
          <BlogItemPreview
            img={el.image}
            title={el.title}
            categories={el.category}
            id={el.id}
            key={el.id}
          />
        ))}
      </AnimationContainer>
    </section>
  );
};
