import {Button, Input, Space} from "antd";
import Chat from "./Chat";
import ChatInput from "./ChatInput";

export default function MainChatFrame({session, id}) {
    return (
            <div className="w-full pr-2 absolute bottom-0">
                <ChatInput chatId={id} />
                {/*<Space.Compact style={{ width: '100%' }} className="bottom-0">*/}
                {/*<div className="flex flex-col h-screen overflow-hidden">*/}
                {/*<div className="flex flex-col h-screen overflow-hidden">*/}
                {/*<Chat chatId={id} />*/}
                {/*</div>*/}

                {/*</div>*/}
                {/*<Input placeholder="Please ask any question you want" />*/}
                {/*<Button className="bg-blue-400"  type="primary">Submit</Button>*/}
                {/*</Space.Compact>*/}
            </div>


    )
}