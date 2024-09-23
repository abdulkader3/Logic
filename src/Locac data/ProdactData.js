import React from 'react'

const ProdactData = [
    {
      "id": 1,
      "product_name": "Wireless Bluetooth Headphones",
      "description": "High-quality over-ear wireless headphones with noise-canceling technology.",
      "price": 149.99,
      "image_url": "https://smartdeal.com.bd/public/uploads/all/2G3AaWTgSJ8W8oJpKWGn3bCvarJMAXc0L37Tyh4n.jpg"
    },
    {
      "id": 2,
      "product_name": "Smartphone 5G 128GB",
      "description": "A powerful 5G-enabled smartphone with 128GB storage and a 6.5-inch display.",
      "price": 599.00,
      "image_url": "https://www.halpis.fi/tuotekuvat/800x800/samsung_galaxy_s21_plus_musta.jpg"
    },
    {
      "id": 3,
      "product_name": "Gaming Mouse",
      "description": "Ergonomic gaming mouse with customizable buttons and RGB lighting.",
      "price": 49.99,
      "image_url": "https://m.media-amazon.com/images/I/61wQNtMZHgL._AC_SL1500_.jpg"
    },
    {
      "id": 4,
      "product_name": "4K Ultra HD TV 55",
      "description": "55-inch 4K Ultra HD Smart TV with HDR and built-in streaming apps.",
      "price": 799.99,
      "image_url": "https://www.sonysmart.com.bd/public/uploads/all/pLJpmErghsHegjJCgJekeskqrvoyjpBmRxPzepWq.jpg"
    },
    {
      "id": 5,
      "product_name": "Fitness Smartwatch",
      "description": "Track your health with this waterproof smartwatch featuring heart rate monitoring and GPS.",
      "price": 199.99,
      "image_url": "https://img.drz.lazcdn.com/static/bd/p/a03d3abc9584eb9bdfdfd86835c65cef.jpg_720x720q80.jpg"
    },
    {
      "id": 6,
      "product_name": "Laptop 16GB RAM 512GB SSD",
      "description": "Ultra-thin laptop with 16GB RAM, 512GB SSD, and a 15-inch display, perfect for multitasking.",
      "price": 999.00,
      "image_url": "https://techlink.com.bd/wp-content/uploads/2024/05/Dell-Inspiron-15-3530-Intel-Core-i7-1355U-16GB-RAM-512GB-SSD-15.6-Inch-FHD-Display-Laptop.jpg"
    },
    {
      "id": 7,
      "product_name": "Bluetooth Speaker",
      "description": "Portable Bluetooth speaker with powerful bass and 12-hour battery life.",
      "price": 89.99,
      "image_url": "https://gadgetstudiobd.com/wp-content/uploads/2023/06/tronsmart-t7-mini-portable-bluetooth-speaker.jpg"
    },
    {
      "id": 8,
      "product_name": "Wireless Charging Pad",
      "description": "Fast wireless charging pad compatible with all Qi-enabled devices.",
      "price": 29.99,
      "image_url": "https://static-01.daraz.com.bd/p/02328109044094eabdf1a14b665846c9.jpg"
    },
    {
      "id": 9,
      "product_name": "Digital Camera 24MP",
      "description": "Compact digital camera with 24MP resolution, 4K video recording, and Wi-Fi connectivity.",
      "price": 399.99,
      "image_url": "https://image.made-in-china.com/202f0j00EKBqfsZrnFbQ/4K-1080P-IPS-Digital-Camera-24MP-16X-Digital-Zoom-Wide-Angle-Combination-WiFi-Control.webp"
    },
    {
      "id": 10,
      "product_name": "Electric Kettle",
      "description": "Stainless steel electric kettle with fast boiling and automatic shut-off features.",
      "price": 39.99,
      "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMwQfNPuPoHEmD46OPIPN0P3bLUFuKfVKPng&s"
    },
    {
      "id": 11,
      "product_name": "Robot Vacuum Cleaner",
      "description": "Smart robot vacuum cleaner with app control and automatic docking.",
      "price": 249.99,
      "image_url": "https://www.sencor.com/Sencor/media/content/products/56888def-d09e-4598-8a46-af6129a33464.jpg"
    },
    {
      "id": 12,
      "product_name": "Noise-Canceling Earbuds",
      "description": "True wireless earbuds with active noise canceling and a charging case.",
      "price": 129.99,
      "image_url": "https://gadgetz.com.bd/wp-content/uploads/2024/05/Sony-WF-1000XM5-Truly-Wireless-Noise-Canceling-Earbuds-2-jpg.webp"
    },
    {
      "id": 13,
      "product_name": "Smart Thermostat",
      "description": "Energy-saving smart thermostat with voice control and mobile app support.",
      "price": 179.99,
      "image_url": "https://m.media-amazon.com/images/I/71GqQyjhq6L._AC_SL1500_.jpg"
    },
    {
      "id": 14,
      "product_name": "Electric Standing Desk",
      "description": "Adjustable height standing desk with electric motor and memory presets.",
      "price": 399.99,
      "image_url": "https://images-cdn.ubuy.com.sa/65922336059808595940bafc-win-up-time-standing-desk-adjustable.jpg"
    },
    {
      "id": 15,
      "product_name": "Smart Light Bulb",
      "description": "Wi-Fi enabled smart light bulb with color-changing and dimming capabilities.",
      "price": 24.99,
      "image_url": "https://i5.walmartimages.com/seo/Philips-Smart-LED-100-Watt-A21-General-Purpose-Light-Bulb-Frosted-Color-Dimmable-E26-Medium-Base-1-Pack_1207b5c2-f897-4b65-b8a1-d8acedce5bf9.54dcbe1cd9a7f4a073acf2c2e96860a2.jpeg"
    },
    {
      "id": 16,
      "product_name": "Portable Power Bank 10000mAh",
      "description": "Compact 10000mAh power bank with dual USB output for fast charging.",
      "price": 34.99,
      "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMi7wAGMeiNI75rBZjrhO_R6CDQVeGKlgO3g&s"
    },
    {
      "id": 17,
      "product_name": "Smart Doorbell Camera",
      "description": "Smart doorbell with HD camera, two-way audio, and motion detection.",
      "price": 149.99,
      "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWfCEdhWiW2BFOIM0HYAr2-KqdXdTRl5r5fw&s"
    },
    {
      "id": 18,
      "product_name": "Air Fryer 4.5L",
      "description": "4.5L air fryer with touch controls and adjustable temperature settings for healthy cooking.",
      "price": 119.99,
      "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYZXDpBtay1hGG7zVJH710IHHrrVqB80gHlA&s"
    },
    {
      "id": 19,
      "product_name": "Electric Toothbrush",
      "description": "Rechargeable electric toothbrush with multiple cleaning modes and long battery life.",
      "price": 59.99,
      "image_url": "https://img.drz.lazcdn.com/static/bd/p/9cef171a09949e2905ce75a5865e71ed.jpg_960x960q80.jpg_.webp"
    },
    {
      "id": 20,
      "product_name": "Home Security Camera",
      "description": "Indoor security camera with 1080p video, night vision, and motion alerts.",
      "price": 79.99,
      "image_url": "https://extremegadgets.com.bd/wp-content/uploads/2022/12/Copy-of-Peach-Floral-Flash-Sale-Instagram-Post-45-1.png"
    }
  ]
  

export default ProdactData
