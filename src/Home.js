import {useState} from 'react';
import BlogList from './BlogList';

const Home = () => {

    // const [name,setName] = useState('mario');
    // const [age,setAge] = useState(25)
    // const handleClick = () =>{
    //    setName('aden');
    //    setAge(30);
    // }
    
    const [blogs,setBlogs] = useState([   
        {
            id: 1,
            title: 'Introduction to JavaScript',
            body: 'JavaScript is a versatile programming language used for web development.',
            author: 'John Doe',
        },
        {
            id: 2,
            title: 'Working with Arrays',
            body: 'Arrays are fundamental data structures in JavaScript.',
            author: 'Jane Smith',
        },
        {
            id: 3,
            title: 'Building Responsive Web Pages',
            body: 'Learn how to create responsive web pages with HTML, CSS, and JavaScript.',
            author: 'David Johnson',
        },
        {
            id: 4,
            title: 'JavaScript Promises',
            body: 'Promises help manage asynchronous operations in JavaScript.',
            author: 'Alice Brown',
        },
        {
            id: 5,
            title: 'Debugging Techniques',
            body: 'Debugging is essential for finding and fixing issues in your code.',
            author: 'Chris Wilson',
        }
        ]);
    
   
    return ( 

        <div className="home">
        
            <BlogList blogs={blogs} title="All blog!" />
       
       
        </div>
     );
}
 
export default Home;