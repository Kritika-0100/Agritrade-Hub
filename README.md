# AgriTrade Hub 🌾

A web-based marketplace that connects farmers directly with buyers — eliminating middlemen and enabling fair, transparent trading of crops and agricultural produce.

---

## Why AgriTrade Hub?

Millions of farmers in India lose significant income to intermediaries who buy cheap and sell high. AgriTrade Hub addresses this by giving farmers a direct digital storefront to list their produce, and giving buyers a single platform to browse, compare, and connect — at fair market prices.

---

## Features

- **Farmer listings** — Farmers can list crops with price, quantity, and location details
- **Buyer browsing** — Buyers can browse available produce with filters
- **Smooth UI transitions** — Page animations powered by Framer Motion for a polished experience
- **Toast notifications** — Real-time feedback on user actions via React Toastify
- **Responsive design** — Fully mobile-friendly layout using Bootstrap 5
- **Multi-page navigation** — Client-side routing with React Router v7

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend Framework | React 19 |
| Routing | React Router v7 |
| Animations | Framer Motion |
| UI Library | Bootstrap 5 + Bootstrap Icons |
| Notifications | React Toastify |
| Icons | React Icons |
| Build Tool | Create React App |

---

## Project Structure

```
Agritrade-Hub/
├── public/
├── server/               # Backend (planned — Node.js + Express)
├── src/
│   ├── components/       # Reusable UI components
│   ├── pages/            # Route-level page components
│   ├── assets/           # Images and static files
│   ├── App.js
│   └── index.js
├── package.json
└── README.md
```

---

## Getting Started

### Prerequisites
- Node.js v16+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Kritika-0100/Agritrade-Hub.git

# Navigate into the project
cd Agritrade-Hub

# Install dependencies
npm install

# Start the development server
npm start
```

The app will run at `http://localhost:3000`

---

## Roadmap

- [ ] Backend API with Node.js + Express
- [ ] MongoDB database for listings and user data
- [ ] User authentication (farmer / buyer roles)
- [ ] Real-time crop price integration
- [ ] Search and filter by crop type, region, price range
- [ ] Deployment on Vercel (frontend) + Railway (backend)

---

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you'd like to change.

---

## Author

**Kritika Sharma**
[GitHub](https://github.com/Kritika-0100) · [LinkedIn](https://linkedin.com/in/kritikasharma510)

---

## License

This project is licensed under the [MIT License](LICENSE).
