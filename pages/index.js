import 'tailwindcss/tailwind.css'
import {ThemeProvider} from "next-themes";
import HeaderComponent from "../components/Common/HeaderComponent";
import ChatBoxComponent from "../components/ChatBoxComponent";
import Footer from "../components/Common/Footer";
import {message} from 'antd';
import {useSession} from 'next-auth/react';
import { getToken } from "next-auth/jwt"

export default function Home() {
    const {data: session} = useSession()
    const showSuccess = () => {
        if(session.user.name !== undefined) {
            message.success("login success!")
        }
    }

  return (
      <ThemeProvider attribute = "class">
          <div className = "outer dark:bg-black">
              <HeaderComponent
                session={session}
              >
              </HeaderComponent>
          </div>
          <div>
              <ChatBoxComponent
                    session = {session}
              >
              </ChatBoxComponent>
          </div>
          <footer className="sticky bottom-0">
              <Footer>
              </Footer>
          </footer>
      </ThemeProvider>
  )
}
