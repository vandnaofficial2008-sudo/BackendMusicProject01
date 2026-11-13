## What it do?

Two users are provided "user" and "artist". Both can register, login but only artist can upload music and create albums. Both can see the musics and albums created by an artist.
For hashing bcryptjs is used...

## 🛠️ Tech Stack

Backend: Node.js, Express.js

Database: MongoDB

Tools: Git, GitHub, VS Code

## 📁 Project Structure

```text
CompleteBackend/
│
├── src/
│   ├── controller/
│   │   ├── album.controller.js
│   │   ├── auth.controller.js
│   │   ├── getMusic.controller.js
│   │   ├── logout.controller.js
│   │   └── music.controller.js
│   │
│   ├── db/
│   │   └── db.js
│   │
│   ├── middlewares/
│   │   └── auth.middleware.js
│   │
│   ├── models/
│   │   ├── album.model.js
│   │   ├── music.model.js
│   │   └── user.model.js
│   │
│   ├── routes/
│   │   ├── album.routes.js
│   │   ├── auth.routes.js
│   │   ├── getMusic.routes.js
│   │   ├── logout.routes.js
│   │   └── music.routes.js
│   │
│   ├── services/
│   │   └── storage.services.js
│   │
│   └── app.js
│
├── .env.example
├── .gitignore
├── package.json
├── package-lock.json
├── server.js
└── README.md
```

