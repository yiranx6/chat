import 'tailwindcss/tailwind.css'
import LoginComponent from "../components/LoginComponent";
import HeaderComponent from "../components/Common/HeaderComponent";
import {ThemeProvider} from "next-themes";

export default function Login() {
    return (
        <div className="">
            <ThemeProvider attribute="class">
            <HeaderComponent></HeaderComponent>
            <div className="">
                <LoginComponent></LoginComponent>
            </div>
            </ThemeProvider>
        </div>
    );
}
