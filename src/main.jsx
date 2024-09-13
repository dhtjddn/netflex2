import { createRoot } from "react-dom/client";
import Router from "./router";
import "./index.css";
import { AuthProvider } from "./contexts/auth.context";
import { MoviesProvider } from "./contexts/movies.context";

createRoot(document.getElementById("root")).render(
<AuthProvider>
    <MoviesProvider>
<Router />
</MoviesProvider>
</AuthProvider>
);