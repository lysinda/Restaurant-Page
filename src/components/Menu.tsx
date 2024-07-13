const menuData = [
  {
    name: "Starters",
    description:
      "All starters make perfect side dishes or can be shared around the table",
    data: [
      {
        name: "Garlic Knots",
        description:
          "Garlic Knots, Chili Flakes, Vegan Parmesan, Parsley, Garlic Ranch Dip",
        price: 9,
      },
      {
        name: "Caesar Salad",
        description:
          "Romaine Lettuce, Vegan Parmesan, Vegan Chicken Bits, Cashew Caesar Dressing, Garlic Bread",
        price: 8,
      },
    ],
  },
  {
    name: "Pizza",
    description: "All pizzas are topped with Vegan Parmesan and Fresh Basil",
    data: [
      {
        name: "Margherita",
        description: "Tomato Sauce, Cashew Mozzarella, Extra Virgine Olive Oil",
        price: 12,
      },
      {
        name: "Spinachi",
        description: "Creamy Cashew Base, Spinach, Onions",
        price: 15,
      },
      {
        name: "Ton-No",
        description:
          "Tomato Sauce, Cashew Mozzarella, Vegan Tuna, Red Onion, Capers",
        price: 15,
      },
      {
        name: "Pepperoni",
        description: "Tomato Sauce, Cashew Mozzarella, Vegan Salami, Pepperoni",
        price: 15,
      },
    ],
  },
  {
    name: "Bowls & Curries",
    description: "All bowls and curries are served with Vegan Naan",
    data: [
      {
        name: "Nourish Bowl",
        description:
          "Mixed Salad, Edamame, Roasted Chickpeas, Olives, Fresh Figs, Vegan Joghurt Sauce",
        price: 13,
      },
      {
        name: "Tahini Quinoa Bowl",
        description:
          "Quinoa, Chickpeas, Roasted Carrots, Medjool Dates, Sun-Dried Tomatoes with Tahini Dressing",
        price: 13,
      },
      {
        name: "Vegan Butter Chicken",
        description: "Spicy Tomato Curry with Vegan Chicken Bits",
        price: 12,
      },
      {
        name: "Roasted Cauliflower Lentil Curry",
        description:
          "Roasted Cauliflower, Brown Lentils, Tomatoes, Coconut Milk",
        price: 12,
      },
    ],
  },
  {
    name: "Desserts",
    description: "Organic plant-based ice cream and freshly baked goods",
    data: [
      {
        name: "Ice Cream",
        description:
          "Per scoop, choose from: Vanilla, Lemon, Raspberry, Hazelnut, Chocolate",
        price: 2,
      },
      {
        name: "Cake",
        description:
          "Offer changes daily, please take a look at our cake display",
        price: 4,
      },
    ],
  },
  {
    name: "Drinks",
    description: "Everything is fresh and home-made",
    data: [
      {
        name: "Home-made iced tea",
        description:
          "Choose from: Elderberry & Mint, Blackberry & Rosemary, Lemon & Thyme, Mango & Ginger",
        price: 5,
      },
      {
        name: "Hot Tea",
        description:
          "Choose from: Earl Grey, Green, Fresh Spearmint, Fresh Ginger",
        price: 4,
      },
      {
        name: "Coffee",
        description:
          "Choose from: Cappuccino, Latte Macchiato, each served with Oat Milk",
        price: 4,
      },
    ],
  },
];

function Menu() {
  return (
    <div className="flex">
      <div className="w-1/5 bg-leaves-repetitive-image bg-contain scale-x-[-1]"></div>
      <div className="flex flex-col justify-center items-center overflow-scroll w-3/5 pt-16 px-16">
        <h1 className="text-7xl font-handlee pb-4">Menu</h1>
        {menuData.map((section) => (
          <MenuSection
            name={section.name}
            description={section.description}
            data={section.data}
          />
        ))}
        <img src="divider.svg" className="w-2/5 my-16"></img>
      </div>
      <div className="w-1/5 bg-leaves-repetitive-image bg-contain"></div>
    </div>
  );
}

function MenuSection(props) {
  return (
    <div className="text-xl w-full">
      <h2 className="text-5xl font-raleway pt-8 pb-4">{props.name}</h2>
      <p className="font-light">{props.description}</p>
      <ul>
        {props.data.map((item) => (
          <MenuItem
            name={item.name}
            description={item.description}
            price={item.price}
          />
        ))}
      </ul>
    </div>
  );
}

function MenuItem(props) {
  return (
    <div className="py-4">
      <h3 className="text-2xl font-raleway font-semibold pb-1 text-celadon">
        {props.name}
      </h3>
      <div className="flex justify-between pb-4">
        <p>{props.description}</p>
        <span className="pl-12 text-nowrap">{props.price} $</span>
      </div>
      <hr className="border-celadon"></hr>
    </div>
  );
}

export default Menu;
