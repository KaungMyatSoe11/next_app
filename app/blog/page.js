import view_photo from "@/assets/images/view1.jpg";
import Image from "next/image";

const Blog = () => {
  console.log(view_photo);
  console.log(process.env.NEXT_PUBLIC_ANALYTICS_ID);
  console.log(process.env.API_KEY);
  return (
    <div>
      Blog page
      <br />
      {process.env.NEXT_PUBLIC_ANALYTICS_ID}
      <Image src={view_photo} alt="beach view photo"  />
    </div>
  );
};

export default Blog;
