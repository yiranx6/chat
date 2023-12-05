import {Switch} from "antd";
import {useTheme} from 'next-themes';
import DropDown from "../action/DropDown";

export default function ToolBarComponent({username, icon}) {
    const { theme, setTheme } = useTheme();
    return (
        <div className = "">
            <div className ="flex p-4 border-black shadow-lg shadow-gray-500 dark:shadow-purple-950">
            <h1 className ="dark:accent-white my-auto text-xl lg:text-3xl md:text-2xl sm:text-xl ">
                L&A CHAT
            </h1>
                <div className="ml-auto flex flex-row rounded-md
                         dark:shadow-white ">
                <DropDown
                    username={username === undefined ? "please Login" : username}
                    icon={icon}
                ></DropDown>
                </div>
                <div className = " ml-10 col-end-10 col-span-2">
                    <Switch checkedChildren="🌞" unCheckedChildren="🌛"
                            defaultChecked
                            className = " dark:border-white bg-gray-500"
                            onClick = {() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    />
                </div>
            </div>
        </div>
    )
}