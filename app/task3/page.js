'use client'

export default function Task3() {
  return (
    <div className='w-full  min-h-screen flex flex-col items-start gap-4 pt-4 px-3'>
        <button
          className='bg-gray-400 p-4 rounded cursor-pointer'
          onClick={() => alert("Button clicked!")}
        >
          Click
        </button>
    </div>
  )
}
