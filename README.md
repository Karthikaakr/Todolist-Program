github ---- http://localhost:5173/

This program is a React User Form with CRUD operations and Local Storage.

Users can add, edit, and delete entries (Name, Email, Phone, Country).

Data is saved in localStorage, so it stays even after refreshing the page.

Edit mode allows updating an existing record instead of adding a new one.

Delete button removes a record, and if the one being edited is deleted, inputs reset.

👉 In short: It’s a simple user management app built with React hooks (useState, useEffect) and localStorage persistence.
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
