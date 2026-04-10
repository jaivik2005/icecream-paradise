require("dotenv").config();
const mongoose = require("mongoose");
const Menu = require("./backend/models/Menu");

// Fallback logic replicates what's in db.js to ensure connection works
const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/icecream";

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("MongoDB Connected for seeding"))
  .catch(err => {
      console.error("MongoDB Connection Error:", err);
      process.exit(1);
  });

const seedMenu = [
  // Classic Ice Creams
  { name: "Vanilla", price: 60, category: "Classic", image: "https://www.davidlebovitz.com/wp-content/uploads/2009/02/Vanilla-ice-cream-recipe-cherry-compote-4.jpg" },
  { name: "Chocolate", price: 70, category: "Classic", image: "https://www.cravethegood.com/wp-content/uploads/2021/04/sous-vide-chocolate-ice-cream-15-683x1024.jpg" },
  { name: "Strawberry", price: 70, category: "Classic", image: "https://simpledesserts.com/wp-content/uploads/2023/05/fresh-strawberry-ice-cream-thumbnail.jpg" },
  { name: "Butterscotch", price: 80, category: "Classic", image: "https://www.cookwithmanali.com/wp-content/uploads/2014/11/Indian-Butterscotch-Ice-Cream-No-Churn-500x500.jpg" },
  { name: "Mango", price: 80, category: "Classic", image: "https://culinaryshades.com/wp-content/uploads/2022/03/mango-ice-cream-sqr01.jpg" },
  
  // Sundaes
  { name: "Chocolate Sundae", price: 120, category: "Sundaes", image: "https://www.keep-calm-and-eat-ice-cream.com/wp-content/uploads/2020/10/Chocolate-sundae-square.png" },
  { name: "Strawberry Sundae", price: 120, category: "Sundaes", image: "https://nibbleanddine.com/wp-content/uploads/2021/08/Strawberry-Sundaes-FI.jpg" },
  { name: "Brownie Sundae", price: 150, category: "Sundaes", image: "https://icecreamfromscratch.com/wp-content/uploads/2022/07/Brownie-Sundae-1.2-735x1103.jpg" },
  { name: "Caramel Sundae", price: 130, category: "Sundaes", image: "https://icecreamfromscratch.com/wp-content/uploads/2022/09/Caramel-Sundae-1.2-735x1103.jpg" },
  
  // Kulfi
  { name: "Malai Kulfi", price: 60, category: "Kulfi", image: "https://www.cookwithmanali.com/wp-content/uploads/2016/04/Malai-Kulfi-Recipe.jpg" },
  { name: "Kesar Pista Kulfi", price: 80, category: "Kulfi", image: "https://kannanskitchen.com/wp-content/uploads/2021/04/DSC_4658.jpg" },
  { name: "Mango Kulfi", price: 70, category: "Kulfi", image: "https://thespicemess.com/wp-content/uploads/2021/06/Mango-Kulfi-12-1.jpg" },
  
  // Cones
  { name: "Vanilla Cone", price: 50, category: "Cones", image: "https://s7d1.scene7.com/is/image/mcdonaldsstage/DC_202106_0336_LargeVanillaCone_1564x1564%3Aproduct-header-mobile?dpr=off&hei=1313&wid=1313" },
  { name: "Chocolate Cone", price: 60, category: "Cones", image: "https://pudgefactor.com/wp-content/uploads/2021/06/Featured-Triple-Chocolate-Ice-Cream1.jpg" },
  { name: "Strawberry Cone", price: 60, category: "Cones", image: "https://www.elmundoeats.com/wp-content/uploads/2024/07/Strawberry-ice-cream-in-a-cone.jpg" },
  
  // Special
  { name: "Oreo Ice Cream", price: 100, category: "Special", image: "https://www.twistandmake.com/hs-fs/hubfs/twist-and-make-images/New-Twist-and-Make-Recipes/640-Images/56-oreo-ice-cream-sandwich.jpg?height=640&name=56-oreo-ice-cream-sandwich.jpg&width=640" },
  { name: "KitKat Ice Cream", price: 110, category: "Special", image: "https://target.scene7.com/is/image/Target/GUEST_bf92cc6a-d5c6-4671-bff8-a3f9dacd143a" },
  { name: "Black Forest", price: 120, category: "Special", image: "https://goodthingsbaking.com/wp-content/uploads/2023/05/black-forest-ice-cream-7.jpg" },
  { name: "Chocolate Chips", price: 90, category: "Special", image: "https://apumpkinandaprincess.com/wp-content/uploads/2022/08/easy-chocolate-chip-ice-cream-recipe.jpg" },
  
  // Shakes
  { name: "Chocolate Shake", price: 90, category: "Shakes", image: "https://cookilicious.com/wp-content/uploads/2025/01/Brownie-Milkshake-Recipe-20-scaled.jpg" },
  { name: "Vanilla Shake", price: 80, category: "Shakes", image: "https://www.foodandwine.com/thmb/aYv9IwIyM4EKLL0o7W1CUSfjXzU%3D/1500x0/filters%3Ano_upscale%28%29%3Amax_bytes%28150000%29%3Astrip_icc%28%29/Vanilla-Milkshake-FT-MAG-RECIPE-0325-4ad53abc27a74f7687e510cc17d28d1d.jpg" },
  { name: "Strawberry Shake", price: 90, category: "Shakes", image: "https://www.oliviascuisine.com/wp-content/uploads/2021/06/strawberry-milkshake.jpg" },
  { name: "Oreo Shake", price: 110, category: "Shakes", image: "https://saltandbaker.com/wp-content/uploads/2020/12/oreo-milkshake-recipe.jpg" }
];

async function seedDatabase() {
  try {
    await Menu.deleteMany({});
    console.log("Existing menu items cleared");
    
    await Menu.insertMany(seedMenu);
    console.log("Database seeded successfully with dynamic menu!");
    
    mongoose.connection.close();
  } catch (error) {
    console.error("Error seeding database:", error);
    mongoose.connection.close();
  }
}

seedDatabase();
