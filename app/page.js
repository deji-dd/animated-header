import Image from "next/image";
import img1 from "../public/img.jpg";
import img2 from "../public/img1.jpg";
import img3 from "../public/img2.png";
import img4 from "../public/img3.jpg";
import img5 from "../public/img4.jpg";
import img6 from "../public/img5.jpg";
import img7 from "../public/img6.jpg";
import img8 from "../public/img7.jpg";
import img9 from "../public/img8.jpg";

export default function Home() {
  return (
    <main className="flex bg-slate-200 min-h-screen items-center justify-between p-24">
      <div>
        <h3 className="text-black text-3xl font-normal">Featured</h3>
        <h1 className="text-black text-3xl font-bold">Work</h1>
        <p className="text-black">04 Randelo Co., 2020</p>
        <p className="text-black">05 Stipple Unlimied, 2022</p>
        <p className="text-black">04 Randel0 Co., 2020</p>
      </div>
      <div className="flex gap-5">
        <div className="h-[400px] flex flex-col flex-nowrap overflow-hidden mt-12">
          <ul class="flex flex-col items-center justify-center [&_img]:max-w-none [&_li]:my-3 animate-infinite-scroll">
            <li>
              <Image src={img1} alt="image 1" width={250} height={250} />
            </li>
            <li>
              <Image src={img2} alt="image 2" width={250} height={250} />
            </li>
            <li>
              <Image src={img3} alt="image 3" width={250} height={250} />
            </li>
            <li>
              <Image src={img4} alt="image 4" width={250} height={250} />
            </li>
          </ul>
          <ul
            class="flex flex-col items-center justify-center [&_img]:max-w-none [&_li]:my-3 animate-infinite-scroll"
            aria-hidden="true"
          >
            <li>
              <Image src={img1} alt="image 1" width={250} height={250} />
            </li>
            <li>
              <Image src={img2} alt="image 2" width={250} height={250} />
            </li>
            <li>
              <Image src={img3} alt="image 3" width={250} height={250} />
            </li>
            <li>
              <Image src={img4} alt="image 4" width={250} height={250} />
            </li>
          </ul>
        </div>
        <div className="h-[400px] flex flex-col flex-nowrap overflow-hidden">
          <ul class="flex flex-col items-center justify-center [&_img]:max-w-none [&_li]:my-3 animate-infinite-scroll">
            <li>
              <Image src={img5} alt="image 5" width={250} height={250} />
            </li>
            <li>
              <Image src={img6} alt="image 6" width={250} height={250} />
            </li>
            <li>
              <Image src={img7} alt="image 7" width={250} height={250} />
            </li>
            <li>
              <Image src={img8} alt="image 8" width={250} height={250} />
            </li>
            <li>
              <Image src={img9} alt="image 8" width={250} height={250} />
            </li>
          </ul>
          <ul
            class="flex flex-col items-center justify-center [&_img]:max-w-none [&_li]:my-3 animate-infinite-scroll"
            aria-hidden="true"
          >
            <li>
              <Image src={img5} alt="image 5" width={250} height={250} />
            </li>
            <li>
              <Image src={img6} alt="image 6" width={250} height={250} />
            </li>
            <li>
              <Image src={img7} alt="image 7" width={250} height={250} />
            </li>
            <li>
              <Image src={img8} alt="image 8" width={250} height={250} />
            </li>
            <li>
              <Image src={img9} alt="image 8" width={250} height={250} />
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
