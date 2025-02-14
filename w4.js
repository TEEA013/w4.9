// // // // // // // // const express = require('express');
// // // // // // // // const app = express();

// // // // // // // // const users = [
// // // // // // // //   { id: 1, name: 'John Doe', email: 'john@example.com' },
// // // // // // // //   { id: 2, name: 'Alice Johnson', email: 'alice@example.com' },
// // // // // // // //   { id: 3, name: 'Bob Smith', email: 'bob@example.com' },
// // // // // // // //   { id: 4, name: 'Charlie Brown', email: 'charlie@example.com' },
// // // // // // // //   { id: 5, name: 'David Williams', email: 'david@example.com' },
// // // // // // // //   { id: 6, name: 'Emily Davis', email: 'emily@example.com' },
// // // // // // // //   { id: 7, name: 'Frank Miller', email: 'frank@example.com' },
// // // // // // // //   { id: 8, name: 'Grace Lee', email: 'grace@example.com' },
// // // // // // // //   { id: 9, name: 'Henry Wilson', email: 'henry@example.com' },
// // // // // // // //   { id: 10, name: 'Jane Smith', email: 'jane@example.com' }
// // // // // // // // ];

// // // // // // // // app.get('/users', (req, res) => {
// // // // // // // //   res.json(users);
// // // // // // // // });

// // // // // // // // const PORT = process.env.PORT || 3000;
// // // // // // // // app.listen(PORT, () => {
// // // // // // // //   console.log(`Server running on port ${PORT}`);
// // // // // // // // });

// // // // // // // // const express = require('express');
// // // // // // // // const app = express();

// // // // // // // // const users = [
// // // // // // // //   { id: 1, name: 'John Doe', email: 'john@example.com' },
// // // // // // // //   { id: 2, name: 'Alice Johnson', email: 'alice@example.com' },
// // // // // // // //   { id: 3, name: 'Bob Smith', email: 'bob@example.com' },
// // // // // // // //   { id: 4, name: 'Charlie Brown', email: 'charlie@example.com' },
// // // // // // // //   { id: 5, name: 'David Williams', email: 'david@example.com' },
// // // // // // // //   { id: 6, name: 'Emily Davis', email: 'emily@example.com' },
// // // // // // // //   { id: 7, name: 'Frank Miller', email: 'frank@example.com' },
// // // // // // // //   { id: 8, name: 'Grace Lee', email: 'grace@example.com' },
// // // // // // // //   { id: 9, name: 'Henry Wilson', email: 'henry@example.com' },
// // // // // // // //   { id: 10, name: 'Jane Smith', email: 'jane@example.com' }
// // // // // // // // ];

// // // // // // // // app.get('/users/:id', (req, res) => {
// // // // // // // //   const id = parseInt(req.params.id, 10);
// // // // // // // //   const user = users.find(u => u.id === id);

// // // // // // // //   if (user) {
// // // // // // // //     res.json(user);
// // // // // // // //   } else {
// // // // // // // //     res.json({ message: "User not found" });
// // // // // // // //   }
// // // // // // // // });

// // // // // // // // const PORT = process.env.PORT || 3000;
// // // // // // // // app.listen(PORT, () => {
// // // // // // // //   console.log(`Server running on port ${PORT}`);
// // // // // // // // });

// // // // // // // // const express = require('express');
// // // // // // // // const app = express();
// // // // // // // // const products = [
// // // // // // // //   { id: 101, name: 'Laptop', price: 25000 },
// // // // // // // //   { id: 102, name: 'Tablet', price: 12000 },
// // // // // // // //   { id: 103, name: 'Smartphone', price: 15000 },
// // // // // // // //   { id: 104, name: 'Monitor', price: 8000 },
// // // // // // // //   { id: 105, name: 'Keyboard', price: 1500 },
// // // // // // // //   { id: 106, name: 'Mouse', price: 800 },
// // // // // // // //   { id: 107, name: 'Headphones', price: 3000 },
// // // // // // // //   { id: 108, name: 'Smartwatch', price: 7000 },
// // // // // // // //   { id: 109, name: 'Printer', price: 5000 },
// // // // // // // //   { id: 110, name: 'External Hard Drive', price: 4000 }
// // // // // // // // ];

// // // // // // // // app.get('/products', (req, res) => {
// // // // // // // //   res.json(products);
// // // // // // // // });

// // // // // // // // const PORT = process.env.PORT || 3000;
// // // // // // // // app.listen(PORT, () => {
// // // // // // // //   console.log(`Server running on port ${PORT}`);
// // // // // // // // });

// // // // // // // // const express = require('express');
// // // // // // // // const app = express();

// // // // // // // // const products = [
// // // // // // // //   { id: 101, name: 'Laptop', price: 25000 },
// // // // // // // //   { id: 102, name: 'Tablet', price: 12000 },
// // // // // // // //   { id: 103, name: 'Smartphone', price: 15000 },
// // // // // // // //   { id: 104, name: 'Monitor', price: 8000 },
// // // // // // // //   { id: 105, name: 'Keyboard', price: 1500 },
// // // // // // // //   { id: 106, name: 'Mouse', price: 800 },
// // // // // // // //   { id: 107, name: 'Headphones', price: 3000 },
// // // // // // // //   { id: 108, name: 'Smartwatch', price: 7000 },
// // // // // // // //   { id: 109, name: 'Printer', price: 5000 },
// // // // // // // //   { id: 110, name: 'External Hard Drive', price: 4000 }
// // // // // // // // ];


// // // // // // // // app.get('/products/:id', (req, res) => {
// // // // // // // //   const id = parseInt(req.params.id, 10);
// // // // // // // //   const product = products.find(p => p.id === id);

// // // // // // // //   if (product) {
// // // // // // // //     res.json(product);
// // // // // // // //   } else {
// // // // // // // //     res.json({ message: "Product not found" });
// // // // // // // //   }
// // // // // // // // });

// // // // // // // // const PORT = process.env.PORT || 3000;
// // // // // // // // app.listen(PORT, () => {
// // // // // // // //   console.log(`Server running on port ${PORT}`);
// // // // // // // // });
// // // // // // // // const express = require('express');
// // // // // // // // const app = express();

// // // // // // // // const news = [
// // // // // // // //   { id: 1, title: 'Tech Innovation', category: 'Technology' },
// // // // // // // //   { id: 2, title: 'Stock Market Updates', category: 'Finance' },
// // // // // // // //   { id: 3, title: 'AI Breakthrough', category: 'Technology' },
// // // // // // // //   { id: 4, title: 'Sports Championship', category: 'Sports' },
// // // // // // // //   { id: 5, title: 'Political Debate', category: 'Politics' },
// // // // // // // //   { id: 6, title: 'Travel Guide 2025', category: 'Travel' },
// // // // // // // //   { id: 7, title: 'Movie Premiere', category: 'Entertainment' },
// // // // // // // //   { id: 8, title: 'New Smartphone Release', category: 'Technology' },
// // // // // // // //   { id: 9, title: 'Economic Growth Forecast', category: 'Finance' },
// // // // // // // //   { id: 10, title: 'Health Tips', category: 'Health' }
// // // // // // // // ];

// // // // // // // // app.get('/news', (req, res) => {
// // // // // // // //   res.json(news);
// // // // // // // // });

// // // // // // // // const PORT = process.env.PORT || 3000;
// // // // // // // // app.listen(PORT, () => {
// // // // // // // //   console.log(`Server running on port ${PORT}`);
// // // // // // // // });
// // // // // // // const express = require('express');
// // // // // // // const app = express();

// // // // // // // const news = [
// // // // // // //   { id: 1, title: 'Tech Innovation', category: 'Technology' },
// // // // // // //   { id: 2, title: 'Stock Market Updates', category: 'Finance' },
// // // // // // //   { id: 3, title: 'AI Breakthrough', category: 'Technology' },
// // // // // // //   { id: 4, title: 'Sports Championship', category: 'Sports' },
// // // // // // //   { id: 5, title: 'Political Debate', category: 'Politics' },
// // // // // // //   { id: 6, title: 'Travel Guide 2025', category: 'Travel' },
// // // // // // //   { id: 7, title: 'Movie Premiere', category: 'Entertainment' },
// // // // // // //   { id: 8, title: 'New Smartphone Release', category: 'Technology' },
// // // // // // //   { id: 9, title: 'Economic Growth Forecast', category: 'Finance' },
// // // // // // //   { id: 10, title: 'Health Tips', category: 'Health' }
// // // // // // // ];

// // // // // // // app.get('/news/:category', (req, res) => {
// // // // // // //   const category = req.params.category;
// // // // // // //   const filteredNews = news.filter(n => n.category.toLowerCase() === category.toLowerCase());

// // // // // // //   if (filteredNews.length > 0) {
// // // // // // //     res.json(filteredNews);
// // // // // // //   } else {
// // // // // // //     res.json({ message: "No news found in this category" });
// // // // // // //   }
// // // // // // // });

// // // // // // // const PORT = process.env.PORT || 3000;
// // // // // // // app.listen(PORT, () => {
// // // // // // //   console.log(`Server running on port ${PORT}`);
// // // // // // // });
// // // // // // const express = require('express');
// // // // // // const app = express();

// // // // // // const events = [
// // // // // //   { id: 1, name: 'Tech Meetup', date: '2025-02-15' },
// // // // // //   { id: 2, name: 'Startup Pitching', date: '2025-02-20' },
// // // // // //   { id: 3, name: 'Music Concert', date: '2025-02-25' },
// // // // // //   { id: 4, name: 'Food Festival', date: '2025-02-28' },
// // // // // //   { id: 5, name: 'AI Conference', date: '2025-03-05' },
// // // // // //   { id: 6, name: 'Business Summit', date: '2025-03-08' },
// // // // // //   { id: 7, name: 'Art Exhibition', date: '2025-03-09' },
// // // // // //   { id: 8, name: 'Marathon Race', date: '2025-03-15' },
// // // // // //   { id: 9, name: 'Gaming Expo', date: '2025-03-18' },
// // // // // //   { id: 10, name: 'Art Festival', date: '2025-03-10' }
// // // // // // ];

// // // // // // app.get('/events', (req, res) => {
// // // // // //   res.json(events);
// // // // // // });

// // // // // // const PORT = process.env.PORT || 3000;
// // // // // // app.listen(PORT, () => {
// // // // // //   console.log(`Server running on port ${PORT}`);
// // // // // // });
// // // // // const express = require('express');
// // // // // const app = express();

// // // // // const events = [
// // // // //   { id: 1, name: 'Tech Meetup', date: '2025-02-15' },
// // // // //   { id: 2, name: 'Startup Pitching', date: '2025-02-20' },
// // // // //   { id: 3, name: 'Music Concert', date: '2025-02-25' },
// // // // //   { id: 4, name: 'Food Festival', date: '2025-02-28' },
// // // // //   { id: 5, name: 'AI Conference', date: '2025-03-05' },
// // // // //   { id: 6, name: 'Business Summit', date: '2025-03-08' },
// // // // //   { id: 7, name: 'Art Exhibition', date: '2025-03-09' },
// // // // //   { id: 8, name: 'Marathon Race', date: '2025-03-15' },
// // // // //   { id: 9, name: 'Gaming Expo', date: '2025-03-18' },
// // // // //   { id: 10, name: 'Art Festival', date: '2025-03-10' }
// // // // // ];

// // // // // app.get('/events/:id', (req, res) => {
// // // // //   const eventId = parseInt(req.params.id);
// // // // //   const event = events.find(e => e.id === eventId);

// // // // //   if (event) {
// // // // //     res.json(event);
// // // // //   } else {
// // // // //     res.json({ message: "Event not found" });
// // // // //   }
// // // // // });

// // // // // const PORT = process.env.PORT || 3000;
// // // // // app.listen(PORT, () => {
// // // // //   console.log(`Server running on port ${PORT}`);
// // // // // });
// // // // const express = require('express');
// // // // const app = express();

// // // // const users = [
// // // //   { id: 1, name: 'John Doe', email: 'john@example.com' },
// // // //   { id: 2, name: 'Jane Smith', email: 'jane@another.com' },
// // // //   { id: 3, name: 'Mike Brown', email: 'mike@example.com' },
// // // //   { id: 4, name: 'Alice Johnson', email: 'alice@sample.com' },
// // // //   { id: 5, name: 'Bob White', email: 'bob@example.com' },
// // // //   { id: 6, name: 'Charlie Green', email: 'charlie@another.com' },
// // // //   { id: 7, name: 'David Black', email: 'david@example.com' },
// // // //   { id: 8, name: 'Emma Watson', email: 'emma@sample.com' },
// // // //   { id: 9, name: 'Frank Martin', email: 'frank@example.com' },
// // // //   { id: 10, name: 'Grace Lee', email: 'grace@another.com' }
// // // // ];

// // // // app.get('/users/filter', (req, res) => {
// // // //   const domain = req.query.domain;

// // // //   if (!domain) {
// // // //     return res.json({ message: "Please provide a domain" });
// // // //   }

// // // //   const filteredUsers = users.filter(user => user.email.endsWith(`@${domain}`));

// // // //   if (filteredUsers.length > 0) {
// // // //     res.json(filteredUsers);
// // // //   } else {
// // // //     res.json({ message: "No users found with this domain" });
// // // //   }
// // // // });

// // // // const PORT = process.env.PORT || 3000;
// // // // app.listen(PORT, () => {
// // // //   console.log(`Server running on port ${PORT}`);
// // // // });
// // // const express = require('express');
// // // const app = express();

// // // const products = [
// // //   { id: 1, name: 'Laptop', price: 30000 },
// // //   { id: 2, name: 'Smartphone', price: 15000 },
// // //   { id: 3, name: 'Tablet', price: 12000 },
// // //   { id: 4, name: 'Smartwatch', price: 8000 },
// // //   { id: 5, name: 'Gaming Laptop', price: 45000 },
// // //   { id: 6, name: 'Wireless Headphones', price: 5000 },
// // //   { id: 7, name: 'Mechanical Keyboard', price: 3000 },
// // //   { id: 8, name: 'Gaming Mouse', price: 2000 },
// // //   { id: 9, name: 'Monitor', price: 10000 },
// // //   { id: 10, name: 'Power Bank', price: 2500 }
// // // ];

// // // app.get('/products/searchByName', (req, res) => {
// // //   const query = req.query.name;

// // //   if (!query) {
// // //     return res.json({ message: "Please provide a search query" });
// // //   }

// // //   const filteredProducts = products.filter(product =>
// // //     product.name.toLowerCase().includes(query.toLowerCase())
// // //   );

// // //   if (filteredProducts.length > 0) {
// // //     res.json(filteredProducts);
// // //   } else {
// // //     res.json({ message: "No products found matching the name" });
// // //   }
// // // });

// // // const PORT = process.env.PORT || 3000;
// // // app.listen(PORT, () => {
// // //   console.log(`Server running on port ${PORT}`);
// // // });

// // const express = require('express');
// // const app = express();

// // const products = [
// //   { id: 1, name: 'Laptop', price: 30000 },
// //   { id: 2, name: 'Smartphone', price: 15000 },
// //   { id: 3, name: 'Tablet', price: 12000 },
// //   { id: 4, name: 'Smartwatch', price: 8000 },
// //   { id: 5, name: 'Gaming Laptop', price: 45000 },
// //   { id: 6, name: 'Wireless Headphones', price: 5000 },
// //   { id: 7, name: 'Mechanical Keyboard', price: 3000 },
// //   { id: 8, name: 'Gaming Mouse', price: 2000 },
// //   { id: 9, name: 'Monitor', price: 10000 },
// //   { id: 10, name: 'Power Bank', price: 2500 }
// // ];

// // app.get('/products/search', (req, res) => {
// //   let { name, minPrice, maxPrice } = req.query;

// //   minPrice = minPrice ? parseFloat(minPrice) : 0;
// //   maxPrice = maxPrice ? parseFloat(maxPrice) : Infinity;

// //   let filteredProducts = products.filter(product => {
// //     const matchesName = name ? product.name.toLowerCase().includes(name.toLowerCase()) : true;
// //     const matchesPrice = product.price >= minPrice && product.price <= maxPrice;
// //     return matchesName && matchesPrice;
// //   });

// //   if (filteredProducts.length > 0) {
// //     res.json(filteredProducts);
// //   } else {
// //     res.json({ message: "No products found matching the criteria" });
// //   }
// // });

// // const PORT = process.env.PORT || 3000;
// // app.listen(PORT, () => {
// //   console.log(`Server running on port ${PORT}`);
// // });
// const express = require('express');
// const app = express();

// const events = [
//   { id: 1, name: 'Tech Conference', location: 'Bangkok', date: '2025-02-15' },
//   { id: 2, name: 'Art Exhibition', location: 'Chiang Mai', date: '2025-03-10' },
//   { id: 3, name: 'Music Festival', location: 'Bangkok', date: '2025-02-20' },
//   { id: 4, name: 'Food Fair', location: 'Phuket', date: '2025-04-05' },
//   { id: 5, name: 'Startup Pitch', location: 'Bangkok', date: '2025-02-25' },
//   { id: 6, name: 'Marathon', location: 'Chiang Rai', date: '2025-05-01' },
//   { id: 7, name: 'Book Fair', location: 'Bangkok', date: '2025-03-15' },
//   { id: 8, name: 'Auto Expo', location: 'Pattaya', date: '2025-06-20' },
//   { id: 9, name: 'Science Fair', location: 'Khon Kaen', date: '2025-07-10' },
//   { id: 10, name: 'Comic Convention', location: 'Bangkok', date: '2025-08-05' }
// ];

// app.get('/events/search', (req, res) => {
//   let { location, startDate, endDate } = req.query;

//   if (!location || !startDate || !endDate) {
//     return res.status(400).json({ message: "Please provide location, startDate, and endDate" });
//   }

//   let start = new Date(startDate);
//   let end = new Date(endDate);

//   let filteredEvents = events.filter(event => {
//     let eventDate = new Date(event.date);
//     return event.location.toLowerCase() === location.toLowerCase() &&
//            eventDate >= start && eventDate <= end;
//   });

//   if (filteredEvents.length > 0) {
//     res.json(filteredEvents);
//   } else {
//     res.json({ message: "No events found matching the criteria" });
//   }
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });



