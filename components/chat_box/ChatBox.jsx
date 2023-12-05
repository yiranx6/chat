import SideBar from "./SideBar";
import MainChatFrame from "./MainChatFrame";
import HistoryComponent from "./HistoryComponent";
import ChatInput from "./ChatInput";

export default function ChatBox({session, id}) {
    return (
        <div className="relative h-screen">
            <div className="flex overflow-hidden h-full">
                <div className="flex-row flex">
                    <div className="bg-[#202123] rounded-2xl dark:bg-gradient-to-b from-gray-500 to-white  md:min-w-[20rem] max-w-xs overflow-y-auto h-screen">
                    <SideBar>
                        session = {session}
                    </SideBar>
                    </div>
                </div>
                <div className=" p-2 relative flex-grow  border-black-200">
                    <MainChatFrame></MainChatFrame>
                </div>
            </div>
        </div>
    )
}