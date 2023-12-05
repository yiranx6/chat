import TypeAnimationComponent from "./Common/TypeAnimationComponent";
import ChatBox from "./chat_box/ChatBox";

export default function ChatBoxComponent({session}) {

    return (
        <div>
            <div className = "bg-white dark:bg-slate-500 ">
                <div>
                    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet" />
                    <div className="text-5xl lg:text-7xl font-extrabold dark:white text-center font-montserrat bg-clip-text">
                        Get Ready
                    </div>
                </div>
                <div className="mt-5 ">
                    <TypeAnimationComponent></TypeAnimationComponent>
                </div>
                {/*We need to separate the user type here*/}
                {/*{session?*/}
                {/*    <div className="m-2 bg-amber-200 mt-20 lg:mt-32 h-screen">*/}
                {/*        pages*/}
                {/*    </div> :*/}
                {/*    <div className="m-2 bg-amber-200 mt-20 lg:mt-32 h-screen">*/}
                {/*        This is the guest page*/}
                {/*    </div>*/}
                {/*}*/}
                <div className="m-2 bg-gray-500 mt-20 lg:mt-32 h-screen ">
                    <ChatBox></ChatBox>
                </div>

            </div>
        </div>
    )
}