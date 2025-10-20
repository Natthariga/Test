'use client'
import { useState, useEffect } from 'react';

export default function Form() {
    const [data, setData] = useState('');
    const [list, setList] = useState([]);

    useEffect(() => {
        const stored = localStorage.getItem('name');
        if (stored) { setList(JSON.parse(stored)); }
    }, []);

    useEffect(() => {
        localStorage.setItem('name', JSON.stringify(list))
    }, [list]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!data.trim()) return;
        setList([...list, data])
        setData('');
    };

    return (
        <div className='p-10'>
            <form
                onSubmit={handleSubmit}
                className='space-x-3 mb-5'>
                <input
                    className='border border-gray-200 p-2 rounded-sm'
                    type='text'
                    value={data}
                    placeholder='กรอกชื่อ'
                    onChange={(e) => setData(e.target.value)}
                />
                <input
                    type='submit'
                    className='bg-gray-200 p-2 rounded-sm cursor-pointer'
                />
            </form>

            <ul className='list-disc'>
                {list.map((i, index) => (
                    <li key={index}>{i}</li>
                ))}
            </ul>
        </div>
    )
}
