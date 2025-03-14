import "./assets/css/main.css"
import { createRoot } from "react-dom/client";

import { StrictMode } from "react";
import LoginPage from "./pages/login/login.page";





createRoot(document.getElementById("root")!).render(

<StrictMode>
<>
<LoginPage/>
  </>
</StrictMode>
);
