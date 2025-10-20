import Link from 'next/link';


export default function Home() {
  return (
    <div className="flex flex-col gap-5 p-3">
      <div className="w-full flex items-center gap-3">
        <p className="">1. สร้าง Component ที่มีปุ่ม "Click me" และนับจำนวนครั้งที่กดปุ่ม โดยใช้ useState</p>
        <Link
          href="/task1"
          className="bg-blue-400 text-white p-2 rounded">
          open
        </Link>
      </div>

      <div className="w-full flex items-center gap-3">
        <p className="">
          2.List Rendering (map) ให้มี array ของผลไม้ เช่น ['',Apple 'Banana', 'Orange']
          แสดงผลเป็น list &lt;ul&gt;&lt;li&gt;...&lt;/li&gt;&lt;/ul&gt; และใส่ key ที่เหมาะสม
        </p>
        <Link
          href="/task2"
          className="bg-blue-400 text-white p-2 rounded">
          open
        </Link>
      </div>

      <div className="w-full flex items-center gap-3">
        <p className="">3.เขียนปุ่มที่เมื่อคลิกแล้ว alert ว่า "Button clicked!"</p>
        <Link
          href="/task3"
          className="bg-blue-400 text-white p-2 rounded">
          open
        </Link>
      </div>

      <div className="w-full flex items-center gap-3">
        <p className="">4.เขียน Component ที่มี div สีพื้นหลังเป็นฟ้า (backgroundColor: 'skyblue') และข้อความสีขาว</p>
        <Link
          href="/task4"
          className="bg-blue-400 text-white p-2 rounded">
          open
        </Link>
      </div>
      <div className="w-full flex items-center gap-3">
        <p className="">5.เขียน Component ที่ดึงข้อมูลจาก https://jsonplaceholder.typicode.com/posts
          และแสดง title ของโพสต์ และใส่ loading ขณะกำลังโหลด และ error เมื่อดึงข้อมูลผิดพลาด</p>
        <Link
          href="/task5"
          className="bg-blue-400 text-white p-2 rounded">
          open
        </Link>
      </div>
      <div className="w-full flex items-center gap-3">
        <p className="">6.เขียนฟอร์มมีช่องกรอกชื่อ และปุ่ม Submit</p>
        <Link
          href="/task6"
          className="bg-blue-400 text-white p-2 rounded">
          open
        </Link>
      </div>
      <div className="w-full flex items-center gap-3">
        <p className="">7.Component Reuse + Props <br/>
          - เขียน Component ProductCard ที่รับ props: title, price, image <br/>
          - แสดงสินค้า 3 ชิ้นโดยใช้ ProductCard <br/>
          - จัด layout แบบ Grid 3 คอลัมน์ (ใช้ CSS flex/grid ก็ได้) <br/>
          - เมื่อคลิกสินค้า เว็บจะ link ไปยังหน้า detail ของสินค้านั้นๆ e.g. product/1, product/2 
        </p>
        <Link
          href="/task7"
          className="bg-blue-400 text-white p-2 rounded">
          open
        </Link>
      </div>

      {/* <App></App> */}
      {/* <Post></Post> */}
      {/* <Form></Form> */}
    </div>
  );
}
