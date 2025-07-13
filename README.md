
# 📄 Angular Interactive JSON Document Viewer

An Angular standalone component that displays JSON data in a collapsible, searchable, and user-friendly structure using Angular Material.

## 🚀 Features

- 📂 Collapsible sections for each JSON key
- 🔍 Real-time search with text highlighting
- 🔁 Recursive rendering of nested JSON
- 🎨 Built with Angular Material for clean UI
- 🧩 Fully reusable and standalone component

## 🖼️ Preview

> Displays structured JSON with collapsible and searchable interface  
> <img width="1914" height="866" alt="OUTPUT SAMPLE" src="https://github.com/user-attachments/assets/77035cc4-017a-40c7-9e59-58c9d61074b7" />

---

## 📁 Project Structure

```
src/
├── app/
│   ├── app.component.ts
│   ├── app.component.html
│   └── document-viewer/
│       ├── document-viewer.component.ts
│       ├── document-viewer.component.html
│       ├── document-viewer.component.css
│       └── json-data.ts
```

---

## 📦 Installation & Usage

### 1. Clone the repo

```bash
git clone https://github.com/your-username/json-viewer-angular.git
cd json-viewer-angular
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the app

```bash
ng serve
```

### 4. Navigate to

```
http://localhost:4200
```

---

## 🧪 How It Works

- `app.component.ts` loads `SAMPLE_JSON` and passes it to `<app-document-viewer>`
- The `DocumentViewerComponent` recursively traverses and renders nested JSON
- Leaf values are rendered with optional **search** term highlight
- Built using **Angular Standalone Components** and **Angular Material**

---

## 📄 Sample JSON

```ts
export const SAMPLE_JSON = {
  "users": {
    "id": 101,
    "name": "John Doe",
    "email": "john@example.com",
    "roles": ["admin", "editor"],
    "preferences": { "theme": "dark", "notifications": true },
    "status": "active",
    "created_at": "2023-08-15"
  }
};
```

## 🙋‍♂️ Author

**Muthu**  
[LinkedIn Profile] https://www.linkedin.com/in/mpastack/

---

> 💡 Tip: This component is perfect for dashboards, developer tools, admin panels, and API log viewers.

---

## 📜 License

MIT License

Copyright (c) 2025 Muthu
