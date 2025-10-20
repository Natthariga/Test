'use client'
import { useState } from 'react';

export default function Task1() {
    const [count, setCount] = useState(0);

    return (
        <div className='w-full  min-h-screen flex flex-col items-start gap-4 pt-4 px-3'>
            <p>จำนวนที่กดปุ่ม {count} ครั้ง</p>
            <button
                className='bg-gray-200 p-4 rounded cursor-pointer'
                onClick={() => setCount(count + 1)}
            >
                Click me
            </button>
        </div>
    )
}
