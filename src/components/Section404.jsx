import { SearchX } from "lucide-react";
import { NavLink } from "react-router-dom";
import Button from "./Button";

export default function Section404() {
    return (
        <div className="flex flex-col items-center justify-center gap-8 px-40">
            <div className="flex flex-row gap-12 items-center"><SearchX size={100}/><h1 className="font-extrabold text-9xl text-color2">404</h1></div>
            <p className="font-extrabold text-5xl text-colorTextLight">Page not found</p>
            <NavLink to="/">
                <Button buttonStyle="default">Return to homepage</Button>
            </NavLink>
        </div>
    );
}
