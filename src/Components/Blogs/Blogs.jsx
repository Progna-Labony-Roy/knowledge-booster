import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import SavedBlog from "../SavedBlog/SavedBlog";

const Blogs = () => {

    const [blogs, setBlogs] = useState([]);
    const [savedBlogs, setSavedBlogs] = useState([]);
    const [isSaved, setIsSaved] = useState(false);

    useEffect( () => {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data));
    }, []);

    const handleSavedBlogs = blogs =>{
        setIsSaved(!isSaved);  // Toggle the saved status
        const newSavedBlogs = [...savedBlogs, blogs];
        setSavedBlogs(newSavedBlogs);
    }
    return (
        <div className="flex mt-16 ">
        <div className="w-2/3">
            {
                blogs.map(blog => <Blog key={blog.id} blog={blog} handleSavedBlogs={handleSavedBlogs}></Blog>)
            }
        </div>
        <div className="ml-24">
            {
            savedBlogs.map(savedBlog =><SavedBlog key={savedBlog.id} savedBlog={savedBlog} isSaved={isSaved}></SavedBlog> )
            }
        </div>
        </div>
    );
};

export default Blogs;