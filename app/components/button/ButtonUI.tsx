import {Button} from "@nextui-org/button";
import { MouseEventHandler } from "react";

interface ComponentProps {
    text: string,
    theme: "default" | "primary" | "secondary" | "success" | "warning" | "danger",
    // onClick: any
}
export default function ButtonUI({text, theme}: ComponentProps){

    return (
        <Button color={theme} variant="shadow">{text}</Button>
    )
}