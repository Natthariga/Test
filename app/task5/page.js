'use client'
import { useState, useEffect } from 'react';

export default function Post() {
    const [posts, setPosts] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        setError(null);

        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((res) => {
                if (!res.ok) throw new Error("Failed to fetch");
                return res.json();
            })
            .then((data) => {
                setPosts(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    if (loading) return <p className='text-center'>Loading posts...</p>;
    if (error) return <p className="text-red-500 text-center">Error: {error}</p>;

    return (
        <div className='p-10'>
            <ul className="space-y-2">
                {posts.map((post) => (
                    <li key={post.id} className="p-2 bg-white shadow-sm rounded hover:bg-gray-100">
                        {post.title}
                    </li>
                ))}
            </ul>
        </div>
    )
}
