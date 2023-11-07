import { Table } from "ka-table";
import { useEffect } from "react";
import { useState } from "react";


const FeatureBlogs = () => {
    const [topTenPosts, setTopTenPosts] = useState([]);

    useEffect(() => {
        // Fetch data from your API endpoint
        fetch('/api/v1/all-blogs/topPosts') // Replace this with your backend URL
            .then(response => response.json())
            .then(data => setTopTenPosts(data))
            .catch(error => console.error('Error:', error));
    }, []);

    const columns = [
        { key: 'blogTitle', title: 'Blog Title' },
        { key: 'blogOwner', title: 'Blog Owner' },
        { key: 'blogOwnerProfilePicture', title: 'Blog Owner Profile Picture' }
    ];

    return (
        <Table
            data={topTenPosts}
            columns={columns}
            rowKey="_id" // Assuming MongoDB ObjectId is used as the row identifier
        />
    );
};

export default FeatureBlogs;
