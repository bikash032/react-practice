import "./assets/css/main.css"
import { createRoot } from "react-dom/client";
// import LoginPage from "./pages/login/login.page";
import LoginPage1 from "./pages/login/loginClass.pages";
import { StrictMode } from "react";
import Example from "./pages/login/login.page";




createRoot(document.getElementById("root")!).render(

<StrictMode>
<>
<Example></Example>
<LoginPage1/>

  </>
</StrictMode>
);
