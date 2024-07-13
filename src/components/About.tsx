function About() {
  return (
    <div>
      <div className="flex justify-between">
        <div className="w-1/3">
          <img src="outdoors_day.jpg" className="object-cover h-full"></img>
        </div>
        <div className="flex flex-col items-center text-center w-3/5 text-2xl px-36 pb-16 leading-relaxed">
          <h2 className="text-7xl font-handlee py-12">About Us</h2>
          <Paragraph>
            Welcome to The Leafy Llama, where health meets heart. Our passion is
            crafting delicious vegan dishes that nourish your body and comfort
            your soul. We believe that food should be both wholesome and
            delightful, which is why our menu is filled with nutritious,
            plant-based meals that are as satisfying as they are nourishing.
          </Paragraph>
          <Divider />
          <Paragraph>
            At The Leafy Llama, every bite is a step towards better health and a
            kinder world. Our chefs use the freshest ingredients to create
            flavorful dishes that warm the heart and energize the body. Whether
            you're seeking a hearty meal or a light bite, you'll find
            soul-soothing comfort in every dish.
          </Paragraph>
          <Divider />
          <Paragraph>
            Join us and experience the perfect blend of health, nourishment, and
            comfort food, all made with love and compassion. Eat well, live
            well, and enjoy the journey with The Leafy Llama.
          </Paragraph>
        </div>
        <div className="w-1/3">
          <img src="outdoors_night.jpg" className="h-full object-cover"></img>
        </div>
      </div>
      <div className="bg-woman-image bg-cover w-screen h-screen">
        <div className="pl-16 pt-40 text-7xl leading-relaxed font-handlee">
          <p className="">Purely Plant-Based Nourishment</p>
          <div className="flex">
            For Your Body and Soul
            <img src="heart.svg" className="w-1/12 pl-4 -mt-6"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

function Paragraph(props) {
  return <p className="">{props.children}</p>;
}

function Divider() {
  return <img src="divider.svg" className="w-1/3 p-8"></img>;
}

export default About;
