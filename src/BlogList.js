const BlogList = ({blogs, title}) => {
  
    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
            {
            blogs.map((blog)=>(
                <div className="preview-blog" key={blog.id}>
                <h3>{blog.title}</h3>
                <p className="author">by {blog.author}</p>
                <p>{blog.body}</p>
                
                </div>
            ))
        }
        </div>
     );
}
 
export default BlogList;