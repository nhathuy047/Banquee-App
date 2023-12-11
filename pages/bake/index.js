import BannerLu from "../../components/BannerLu";
import FooterLuxu from "../../components/FooterLuxu";
import ProductBox from "../../components/ProductBox";
import HeaderLuxury from '../../components/HeaderLuxury'
const BlogPage = () => {
  return (
    <>
    <HeaderLuxury />
    <div>
      <BannerLu/>

    </div>
   <div className="pb-20 flex justify-center gap-32 items-center bg-black-bg ">
   <ProductBox />
    <ProductBox />
    <ProductBox />
   </div>
   <div className=" ">
    <img className="h-[400px] w-full object-cover" src="https://imgs.vietnamnet.vn/Images/vnn/2015/06/29/10/20150629103528-1.jpg" />
   </div>
   <FooterLuxu /></>
  );
};

export default BlogPage;
