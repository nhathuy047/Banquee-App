import { useRouter } from "next/router";
import { blogPosts } from "../../../../utils/content";
import Image from "next/image";

import { ShareSection } from "../../../../core/Share";
import { Blog } from "../../../../components/MainPage/Blog";
import { useEffect, useState } from "react";


const BlogPost = ({ blogPostData }) => {
  const router = useRouter();
  const { blogPost } = router.query;
  const [blogPosts, setBlogPosts] = useState([])

  async function getBlogs() {
    try {
      const response = await fetch(`https://c2t-api.onrender.com/interior/news/${blogPost}`);
  
    
      const data = await response.json(); // Assuming the API returns JSON data
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return null; // You can handle the error case as needed
    }
  }
  useEffect(() => {
    const fetchData = async () => {
      const data = await getBlogs();
      if (data) {
        setBlogPosts(Array(data));
      }
    };

    fetchData();
  });
  return (
    <>
    {blogPosts.map((blog)=>{
      return(
<section key={blog?.id} className="flex flex-col items-center gap-16 py-4 px-5 md:px-20  lg:py-24  2xl:px-60">
    <div className="flex flex-col items-center gap-8">
      <div className="flex flex-col items-center gap-4 text-center">
        <div className="flex gap-1">
        
            <span
              className="rounded-md bg-primary-light px-3 py-1 font-medium capitalize text-primary"
             
            >
              {blog.category}
            </span>
        </div>
        <h2 className="font-heading text-[2.5rem]  leading-tight tracking-tight sm:text-5xl lg:w-4/5">
        {blog?.title}
        </h2>
      </div>
      
    </div>
    <image
      src= {blog.image}
      alt={blog.title}
      className="rounded-2xl"
    />
    <div className="flex flex-col gap-8 lg:w-3/5">
      <h4 className=" font-heading text-2xl leading-tight tracking-tight">
        {blog.content}
      </h4>
      <h4 className=" font-heading text-2xl leading-tight tracking-tight">
        {blog.content}
      </h4>
      <p className="text-lg leading-relaxed">{blog.description}</p>
    </div>
    <ShareSection />
  </section>
      )
      
    })}
    
    </>
  );
};


export default BlogPost;
