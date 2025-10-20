export default function Task2() {
    const fruit = ['Apple', 'Banana', 'Orange'];

    return (
        <div className='w-full  min-h-screen flex flex-col items-start gap-4 pt-4 px-5'>
            <ul className='list-disc text-left'>
                {fruit.map((i, index) => (
                    <li key={index}>{i}</li>
                ))}
            </ul>
        </div>
    )
}
