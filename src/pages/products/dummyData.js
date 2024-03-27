// dummyData.js
import iPhone13ProImage from "../../assets/iphone-13-pro-review-dan-baker-35.webp";
import SamsungGalaxyS21UltraImage from "../../assets/Samsung Galaxy S21 Ultra.jpeg";
import GooglePixel6ProImage from "../../assets/Google Pixel 6 Pro.jpeg";
import OnePlus9ProImage from "../../assets/OnePlus 9 Pro.webp";
import iPhoneSE2020Image from "../../assets/iPhone SE (2020).jpeg";
import SamsungGalaxyA52Image from "../../assets/Samsung Galaxy A52.png";
import XiaomiRedmiNote10ProImage from "../../assets/Xiaomi Redmi Note 10 Pro.webp";
import OnePlusNord2Image from "../../assets/OnePlus Nord 2.jpeg";
import GooglePixel5aImage from "../../assets/Google Pixel 5a.avif";
import AppleiPhone12Image from "../../assets/Apple iPhone 12.png";
import SamsungGalaxyZFlip3Image from "../../assets/Samsung Galaxy Z Flip 3.jpeg";
import OnePlus8TImage from "../../assets/OnePlus 8T.jpeg";
import MotorolaMotoGPowerImage from "../../assets/Motorola Moto G Power.png";
import Realme8ProImage from "../../assets/Realme 8 Pro.jpeg";
import XiaomiPocoX3ProImage from "../../assets/Xiaomi Poco X3 Pro.jpeg";
import GooglePixel4aImage from "../../assets/Google Pixel 4a.jpeg";
import SamsungGalaxyA32Image from "../../assets/Samsung Galaxy A32.jpeg";
import iPhoneSE2022Image from "../../assets/Apple iPhone SE (2022).jpeg";
import OnePlus9Image from "../../assets/OnePlus 9.jpeg";
import XiaomiMi11LiteImage from "../../assets/Xiaomi Mi 11 Lite.webp";

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const dummyData = [
  {
    id: 1,
    category: "Phones",
    name: "Apple iPhone 13 Pro",
    price: 74999,
    images: iPhone13ProImage,
    description:
      "The Apple iPhone 13 Pro is a powerhouse device equipped with the latest technology. It boasts a stunning design, exceptional camera capabilities, and top-notch performance. With its vibrant display and long-lasting battery life, it's a perfect companion for both work and play.",
    rating: getRandomInt(3, 5),
  },
  {
    id: 2,
    category: "Phones",
    name: "Samsung Galaxy S21 Ultra",
    price: 89999,
    images: SamsungGalaxyS21UltraImage,
    description:
      "The Samsung Galaxy S21 Ultra is the epitome of luxury and innovation. Featuring a breathtaking display, unparalleled camera system, and lightning-fast performance, it redefines what a smartphone can do. Whether you're a photographer, gamer, or productivity enthusiast, this device delivers an unmatched experience.",
    rating: getRandomInt(3, 5),
  },
  {
    id: 3,
    category: "Phones",
    name: "Google Pixel 6 Pro",
    price: 67499,
    images: GooglePixel6ProImage,
    description:
      "The Google Pixel 6 Pro combines cutting-edge technology with sleek design. Its advanced camera system captures stunning photos in any lighting condition, while its powerful processor ensures smooth performance. With its intuitive software and long-lasting battery life, it's the perfect companion for your everyday adventures.",
    rating: getRandomInt(3, 5),
  },
  {
    id: 4,
    category: "Phones",
    name: "OnePlus 9 Pro",
    price: 79990,
    images: OnePlus9ProImage,
    description:
      "The OnePlus 9 Pro is a flagship device that excels in performance and design. With its powerful processor, stunning display, and versatile camera system, it's perfect for both work and play. Whether you're a gamer, photographer, or multitasker, this device delivers a seamless experience.",
    rating: getRandomInt(3, 5),
  },
  {
    id: 5,
    category: "Phones",
    name: "iPhone SE (2020)",
    price: 29990,
    images: iPhoneSE2020Image,
    description:
      "The iPhone SE (2020) offers the perfect blend of performance and affordability. Its compact design and powerful processor make it ideal for everyday use. With its advanced camera system and long-lasting battery life, it's a great choice for those who value simplicity and efficiency.",
    rating: getRandomInt(3, 5),
  },
  {
    id: 6,
    category: "Phones",
    name: "Samsung Galaxy A52",
    price: 24990,
    images: SamsungGalaxyA52Image,
    description:
      "The Samsung Galaxy A52 is a mid-range smartphone packed with features. Its sleek design, vibrant display, and versatile camera system make it a great choice for everyday use. With its long-lasting battery life and expandable storage, it offers excellent value for money.",
    rating: getRandomInt(3, 5),
  },
  {
    id: 7,
    category: "Phones",
    name: "Xiaomi Redmi Note 10 Pro",
    price: 22499,
    images: XiaomiRedmiNote10ProImage,
    description:
      "The Xiaomi Redmi Note 10 Pro is a budget-friendly smartphone with premium features. Its stunning display, powerful processor, and versatile camera system make it a great choice for multitasking and entertainment. With its long-lasting battery life and fast charging capabilities, it's perfect for users on the go.",
    rating: getRandomInt(3, 5),
  },
  {
    id: 8,
    category: "Phones",
    name: "OnePlus Nord 2",
    price: 29999,
    images: OnePlusNord2Image,
    description:
      "The OnePlus Nord 2 offers flagship-level performance at an affordable price point. Its powerful processor, stunning display, and versatile camera system make it perfect for everyday use. With its fast charging capabilities and long-lasting battery life, it's the perfect companion for your busy lifestyle.",
    rating: getRandomInt(3, 5),
  },
  {
    id: 9,
    category: "Phones",
    name: "Google Pixel 5a",
    price: 33499,
    images: GooglePixel5aImage,
    description:
      "The Google Pixel 5a is a mid-range smartphone that excels in photography and performance. Its advanced camera system captures stunning photos in any lighting condition, while its powerful processor ensures smooth performance. With its long-lasting battery life and seamless software experience, it's perfect for everyday use.",
    rating: getRandomInt(3, 5),
  },
  {
    id: 10,
    category: "Phones",
    name: "Apple iPhone 12",
    price: 59900,
    images: AppleiPhone12Image,
    description:
      "The Apple iPhone 12 combines style and performance in a sleek package. Its powerful processor, stunning display, and advanced camera system make it perfect for everyday use. With its long-lasting battery life and seamless software experience, it's the perfect choice for Apple enthusiasts.",
    rating: getRandomInt(3, 5),
  },
  {
    id: 11,
    category: "Phones",
    name: "Samsung Galaxy Z Flip 3",
    price: 74999,
    images: SamsungGalaxyZFlip3Image,
    description:
      "The Samsung Galaxy Z Flip 3 is a foldable smartphone that combines style and innovation. Its compact design and foldable display make it perfect for multitasking and entertainment. With its powerful processor and versatile camera system, it's the perfect choice for users who want to stand out from the crowd.",
    rating: getRandomInt(3, 5),
  },
  {
    id: 12,
    category: "Phones",
    name: "OnePlus 8T",
    price: 44999,
    images: OnePlus8TImage,
    description:
      "The OnePlus 8T is a flagship device that offers exceptional performance and value. Its powerful processor, stunning display, and versatile camera system make it perfect for multitasking and entertainment. With its fast charging capabilities and long-lasting battery life, it's the perfect companion for your busy lifestyle.",
    rating: getRandomInt(3, 5),
  },
  {
    id: 13,
    category: "Phones",
    name: "Motorola Moto G Power",
    price: 14999,
    images: MotorolaMotoGPowerImage,
    description:
      "The Motorola Moto G Power is a budget-friendly smartphone with long-lasting battery life. Its powerful processor and vibrant display make it perfect for everyday use. With its versatile camera system and expandable storage, it offers excellent value for money.",
    rating: getRandomInt(3, 5),
  },
  {
    id: 14,
    category: "Phones",
    name: "Realme 8 Pro",
    price: 20999,
    images: Realme8ProImage,
    description:
      "The Realme 8 Pro is a mid-range smartphone that offers excellent value for money. Its powerful processor, stunning display, and versatile camera system make it perfect for multitasking and entertainment. With its long-lasting battery life and fast charging capabilities, it's the perfect choice for users on the go.",
    rating: getRandomInt(3, 5),
  },
  {
    id: 15,
    category: "Phones",
    name: "Xiaomi Poco X3 Pro",
    price: 18749,
    images: XiaomiPocoX3ProImage,
    description:
      "The Xiaomi Poco X3 Pro is a budget-friendly smartphone with premium features. Its powerful processor, vibrant display, and long-lasting battery life make it a great choice for everyday use. With its versatile camera system and fast charging capabilities, it offers excellent value for money.",
    rating: getRandomInt(3, 5),
  },
  {
    id: 16,
    category: "Phones",
    name: "Google Pixel 4a",
    price: 26290,
    images: GooglePixel4aImage,
    description:
      "The Google Pixel 4a offers flagship-level camera performance at an affordable price. Its advanced camera system captures stunning photos in any lighting condition, while its powerful processor ensures smooth performance. With its compact design and long-lasting battery life, it's the perfect companion for your everyday adventures.",
    rating: getRandomInt(3, 5),
  },
  {
    id: 17,
    category: "Phones",
    name: "Samsung Galaxy A32",
    price: 20999,
    images: SamsungGalaxyA32Image,
    description:
      "The Samsung Galaxy A32 is a budget-friendly smartphone packed with features. Its sleek design, vibrant display, and powerful processor make it a great choice for everyday use. With its versatile camera system and long-lasting battery life, it offers excellent value for money.",
    rating: getRandomInt(3, 5),
  },
  {
    id: 18,
    category: "Phones",
    name: "Apple iPhone SE (2022)",
    price: 32490,
    images: iPhoneSE2022Image,
    description:
      "The Apple iPhone SE (2022) offers the perfect blend of performance and affordability. Its compact design, powerful processor, and advanced camera system make it ideal for everyday use. With its long-lasting battery life and seamless software experience, it's the perfect choice for users who want the latest technology without breaking the bank.",
    rating: getRandomInt(3, 5),
  },
  {
    id: 19,
    category: "Phones",
    name: "OnePlus 9",
    price: 54999,
    images: OnePlus9Image,
    description:
      "The OnePlus 9 is a flagship device that offers exceptional performance and value. Its powerful processor, stunning display, and versatile camera system make it perfect for multitasking and entertainment. With its fast charging capabilities and long-lasting battery life, it's the perfect companion for your busy lifestyle.",
    rating: getRandomInt(3, 5),
  },
  {
    id: 20,
    category: "Phones",
    name: "Xiaomi Mi 11 Lite",
    price: 22999,
    images: XiaomiMi11LiteImage,
    description:
      "The Xiaomi Mi 11 Lite is a stylish and affordable smartphone packed with features. Its sleek design, vibrant display, and powerful processor make it a great choice for multitasking and entertainment. With its versatile camera system and long-lasting battery life, it's the perfect companion for your everyday needs.",
    rating: getRandomInt(3, 5),
  },
];

export default dummyData;
