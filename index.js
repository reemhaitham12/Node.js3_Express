// !task1.1
// const express = require('express');
// const fs = require('fs');
// const app = express();
// app.use(express.json()); 
// app.post('/addUser', (req, res) => {
//   const { name, age, email } = req.body;

//   if (!name || !age || !email) {
//     return res.status(400).json({ message: "All fields are required." });
//   }
//   fs.readFile('users.json', 'utf8', (err, data) => {
//     if (err) {
//       return res.status(500).json({ message: "Error reading users file." });
//     }

//     let users = [];
//     try {
//       users = JSON.parse(data);
//     } catch (parseErr) {
//       return res.status(500).json({ message: "Error parsing users data." });
//     }


//     const emailExists = users.some(user => user.email === email);
//     if (emailExists) {
//       return res.status(400).json({ message: "Email already exists." });
//     }
//     const newUserId = users.length > 0 ? users[users.length - 1].id + 1 : 1;
//     const newUser = { id: newUserId, name, age, email };
//     users.push(newUser);
//     fs.writeFile('users.json', JSON.stringify(users, null, 2), 'utf8', (writeErr) => {
//       if (writeErr) {
//         return res.status(500).json({ message: "Error writing to users file." });
//       }

//       res.status(201).json({ message: "User added successfully." });
//     });
//   });
// });
// app.listen(3000, () => {
//   console.log('Server running on http://localhost:3000');
// });








//! task1.2

// const express = require('express');
// const fs = require('fs');
// const app = express();

// app.use(express.json()); 

// app.patch('/updateUser/:id', (req, res) => {
//   const userId = parseInt(req.params.id, 10); 
//   const { name, age, email } = req.body;

//   fs.readFile('users.json', 'utf8', (err, data) => {
//     if (err) {
//       return res.status(500).json({ message: "Error reading users file." });
//     }

//     let users = [];
//     try {
//       users = JSON.parse(data);
//     } catch (parseErr) {
//       return res.status(500).json({ message: "Error parsing users data." });
//     }

//     const userIndex = users.findIndex(user => user.id === userId);
//     if (userIndex === -1) {
//       return res.status(404).json({ message: "User ID not found." });
//     }

//     if (email && users.some((user, idx) => user.email === email && idx !== userIndex)) {
//       return res.status(400).json({ message: "Email already exists." });
//     }

//     if (name) users[userIndex].name = name;
//     if (age) users[userIndex].age = age;
//     if (email) users[userIndex].email = email;
//     fs.writeFile('users.json', JSON.stringify(users, null, 2), 'utf8', (writeErr) => {
//       if (writeErr) {
//         return res.status(500).json({ message: "Error writing to users file." });
//       }

//       res.status(200).json({ message: "User updated successfully." });
//     });
//   });
// });
// app.listen(3000, () => {
//   console.log('Server running on http://localhost:3000');
// });





//! task1.3
// const express = require('express');
// const fs = require('fs');
// const app = express();
// app.use(express.json());
// app.delete('/deleteUser/:id?', (req, res) => {
//   const userId = req.params.id ? parseInt(req.params.id, 10) : req.body.id;

//   if (userId === undefined) {
//     return res.status(400).json({ message: "User ID is required." });
//   }
//   fs.readFile('users.json', 'utf8', (err, data) => {
//     if (err) {
//       return res.status(500).json({ message: "Error reading users file." });
//     }

//     let users = [];
//     try {
//       users = JSON.parse(data);
//     } catch (parseErr) {
//       return res.status(500).json({ message: "Error parsing users data." });
//     }
//     const userIndex = users.findIndex(user => user.id === userId);
//     if (userIndex === -1) {
//       return res.status(404).json({ message: "User ID not found." });
//     }
//     users.splice(userIndex, 1);
//     fs.writeFile('users.json', JSON.stringify(users, null, 2), 'utf8', (writeErr) => {
//       if (writeErr) {
//         return res.status(500).json({ message: "Error writing to users file." });
//       }

//       res.status(200).json({ message: "User deleted successfully." });
//     });
//   });
// });
// app.listen(3000, () => {
//   console.log('Server running on http://localhost:3000');
// });







// ! task1.4
// const express = require('express');
// const fs = require('fs');
// const app = express();
// app.get('/getUserByName', (req, res) => {
//   const userName = req.query.name; 

//   if (!userName) {
//     return res.status(400).json({ message: "User name is required as a query parameter." });
//   }
//   fs.readFile('users.json', 'utf8', (err, data) => {
//     if (err) {
//       return res.status(500).json({ message: "Error reading users file." });
//     }

//     let users = [];
//     try {
//       users = JSON.parse(data);
//     } catch (parseErr) {
//       return res.status(500).json({ message: "Error parsing users data." });
//     }
//     const user = users.find(user => user.name === userName);
//     if (!user) {
//       return res.status(404).json({ message: "User name not found." });
//     }
//     res.status(200).json(user);
//   });
// });

// app.listen(3000, () => {
//   console.log('Server running on http://localhost:3000');
// });






//! task1.5

const express = require('express');
const fs = require('fs');
const app = express();


app.get('/getUserById/:id', (req, res) => {
  const userId = parseInt(req.params.id, 10); 

  fs.readFile('users.json', 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ message: "Error reading users file." });
    }

    let users = [];
    try {
      users = JSON.parse(data);
    } catch (parseErr) {
      return res.status(500).json({ message: "Error parsing users data." });
    }


    const user = users.find(user => user.id === userId);
    if (!user) {
      return res.status(404).json({ message: "User ID not found." });
    }

    res.status(200).json(user);
  });
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});

















// Part 2: Q&A on Node.js Internals (5 Grades)
// ! Task 2.1: What is the Node.js Event Loop? (1 Grade)
// The Event Loop in Node.js is a core mechanism that enables non-blocking, 
// asynchronous operations. Node.js is single-threaded and handles asynchronous tasks,
// such as I/O operations, through the Event Loop, which allows Node.js to perform non-blocking I/O.
// ! Task 2.2: What is the Role of the V8 Engine? (1 Grade)
// The V8 Engine is a high-performance JavaScript engine developed by Google.
// Its primary role in Node.js is to execute JavaScript code.
// ! Task 2.3: What is the Node.js Thread Pool and How to Set the
// ! Thread Pool Size? (1 Grades)
// The Node.js Thread Pool is a group of threads used to handle operations
// that are too resource-intensive to execute on the main thread.
// !  Task 2.4: What is the purpose of the libuv library in Node.js? (1 Grade)
// libuv is a multi-platform library in Node.js that provides an abstraction layer for asynchronous I/O operations,
// enabling non-blocking I/O on various operating systems.
// !  Task 2.5: Explain how Node.js handles asynchronous I/O operations. (1 Grade)
// Node.js handles asynchronous I/O operations using a combination of the Event Loop, libuv, and the V8 engine