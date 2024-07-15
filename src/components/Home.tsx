function Home() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-8xl font-handlee p-16">Vegan Comfort Food</h1>
      <img
        src="images/leaves_left.png"
        className="absolute left-0 bottom-0 w-1/4"
      ></img>
      <img
        src="images/leaves_right.png"
        className="absolute right-0 bottom-0 w-1/4"
      ></img>
      <img src="images/leaves.png" className="w-5/12 z-10"></img>
      <div className="w-2/3 mt-36 mb-20 bg-leaves-cake-image h-screen bg-no-repeat bg-contain flex justify-center items-center">
        <div className="w-2/3 pl-16 -mt-6 text-8xl leading-relaxed font-handlee">
          <p>Delicious Treats</p>
          <p className="text-right">For Your Soul</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
