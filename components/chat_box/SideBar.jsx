"use client";

import HistoryComponent from "./HistoryComponent";
// import { useCollection } from "react-firebase-hooks/firestore";
// import { collection } from "firebase/firestore";
// import { db } from "../firebase";
import ChatRow from "./ChatRow";
import ModelSelection from "./ModelSelection";
import { signOut, useSession } from "next-auth/react";
import {useState} from "react";

function SideBar(session) {
    // const { data: session } = useSession();
    const {loading, setLoading} = useState(false)

//     const [chats, loading, error] = useCollection(
//         session && collection(db, "users", session?.user?.email!, "chats")
// );

    return (
        <div className="p-2 flex flex-col h-screen">
            <div className="flex-1">
                { session ? (
                    <div>
                        <HistoryComponent />
                        <div className="hidden sm:inline">
                            <ModelSelection />
                        </div>

                        <div className="flex flex-col space-y-2 my-2">
                            {loading && (
                                <div className="animate-pulse text-center text-white">
                                    <p>Loading Chats...</p>
                                </div>
                            )}
                            {/*{chats?.docs.map((chat) => (*/}
                            {/*    <ChatRow key={chat.id} id={chat.id} />*/}
                            {/*))}*/}
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center h-full">
                        <h2 className="text-gray-300 animate-pulse">
                            Sign in to view Chats
                        </h2>
                    </div>
                )}
            </div>

        </div>
    );
}

export default SideBar;
