import Image from "next/image";
const Favorite = () => {
  return (
    <div className="p-5 w-5/6 text-gray-300 relative">
      <div>
        <div className="mb-10">
          <h1 className="font-bold text-4xl">Favorite</h1>
          <p>Buy and Sell Digital Artworks</p>
        </div>
        <div>
          <Image src={"/dash-slide.jpg"} height={600} width={700} alt="Slide" />
        </div>
        <div className="absolute right-24 top-44">
          <Image src={"/dash-end.png"} height={300} width={250} alt="Slide" />
        </div>
      </div>
    </div>
  );
};
export default Favorite;
