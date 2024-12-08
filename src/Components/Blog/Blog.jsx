import PropTypes from "prop-types";
import { CiBookmark } from "react-icons/ci";

const Blog = ({ blog, handleSavedBlogs, isSaved }) => {
  const {
    title,
    blog_image,
    writer_image,
    writer_name,
    writing_date,
    reading_time,
    level, category
  } = blog;
  return (
    <div className="mb-4 w-[850px] border-b-2">
      <img className='w-[850px] h-[500px]' src={blog_image} alt="" />
      <div className="flex justify-between w-[850px] mt-5">
        <div className="flex">
          <img className="w-12" src={writer_image} alt="" />
          <div className="mx-5">
            <h5 className="font-bold">{writer_name}</h5>
            <p className="text-sm">{writing_date}</p>
          </div>
        </div>
        <div className="flex"><p>{reading_time}</p>
        <CiBookmark 
        onClick={()=>handleSavedBlogs(blog)
          
        }  className={`ml-3 text-2xl ${isSaved ? 'text-gray-500' : 'text-black'}`} 
        ></CiBookmark></div>
      </div>
      <p className="text-2xl font-bold hover:underline my-3">{title}</p>
      <p className="text-slate-400 text-sm"><span>#{level}</span> 
      <span>  #{category}</span></p>
      <button className="my-2 hover:underline text-blue-600">Mark as read</button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleSavedBlogs: PropTypes.func,
  isSaved: PropTypes.bool
};


export default Blog;
