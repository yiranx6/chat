import ToolBarComponent from "./ToolBarComponent";

export default function HeaderComponent({session}) {
    return (
        <div className=" dark:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            <ToolBarComponent
            username = {session?.user.name}
            icon = {session?.user.image}
            ></ToolBarComponent>
        </div>
    )
}
