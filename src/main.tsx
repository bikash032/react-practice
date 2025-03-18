import "./assets/css/main.css"
import { createRoot } from "react-dom/client";

import { StrictMode } from "react";
import LoginPage from "./pages/login/login.page";
import StickyNavbar from "./pages/footer/footer.page";
import MeroJholaFooter from "./pages/nevbar/navnbar.page";
import MidFooter from "./pages/footer/midFooter";

// import App from "./pages/register/register.page";






createRoot(document.getElementById("root")!).render(

<StrictMode>
<>
<StickyNavbar/>
<LoginPage/>
<LoginPage/>
<LoginPage/>
<LoginPage/>
<LoginPage/>
<LoginPage/>
<LoginPage/>
<LoginPage/>
<LoginPage/>
<LoginPage/>
<LoginPage/>
</>
{/* <AppFooter/>cl */}
{/* <App/> */}
<MidFooter/>

  <MeroJholaFooter/>
</StrictMode>
);
