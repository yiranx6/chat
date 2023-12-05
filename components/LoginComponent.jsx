import 'tailwindcss/tailwind.css'
import {Button, Input, Form, Checkbox, message} from 'antd';
import {useEffect, useState} from "react";
import {useSession, signIn} from 'next-auth/react';
import BubbleBackGround from "./animation/BubbleBackGound";
import GoogleButton from "react-google-button";

export default function LoginComponent() {
    // provide the session for current status
    const {data, status} = useSession();
    const[DisplayButton, SetDisplayButton] = useState(false);
    const [showBackground, setShowBackground] = useState(true);
    const [timerFinished, setTimerFinished] = useState(false);

    useEffect(() => {
        let timer;
        if (status === 'loading') {
            setShowBackground(true);
            setTimerFinished(false);
        }
        return () => clearTimeout(timer);
    }, [status])

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowBackground(false);
            setTimerFinished(true);
            }, 3000);
        return () => clearTimeout(timer);
    }, [timerFinished]);

    if(status === 'loading' || showBackground) return <BubbleBackGround></BubbleBackGround>

    const URL = process.env.TESTURL;

    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    //TODO: Valid the User existence: API needed
    const validUser = (value) =>{
        return value === "testUser"
    }

    const registerCall = () => {
        message.success("register success!")
    }
    async function handleGoogleSignIn (){
        signIn('google',{callbackUrl:""})
        await getAccessToken()
    }
    const getAccessToken = async () => {
        const response = await fetch('/api/auth/getAccessToken');
        const data = await response.json();
        console.log('Access Token:', data.access_token);
    };
    const googleLoginCall = () => {
        handleGoogleSignIn()
    }

    return (
        <div className = "m-10 h-full flex items-center justify-center">
            <div className="border-1 dark:bg-gray-950 ">
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                className = "m-32"
            >
                <Form.Item
                    label={<label className = {"text-black dark:text-white"}>Username</label>}
                    name="username"
                    rules={[
                        { required: true, message: 'Please input your username!' },
                        ({getValue}) => ({
                            validator(_, value) {
                                if(!value || validUser(value)) {
                                    SetDisplayButton(false)
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error('User do not exist')).then(SetDisplayButton(true))
                            }
                        })
                    ]}
                >
                    <Input placeholder = "username"/>
                </Form.Item>

                <Form.Item
                    label={<label className = {"text-black dark:text-white"}>Password</label>}
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }, {}]}
                >
                    <Input.Password  placeholder = "password"/>

                </Form.Item>

                <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                    <Checkbox className = {"text-black dark:text-white"}>Remember me</Checkbox>
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>

                    {!DisplayButton ?
                        (<Button
                            className = "bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500" type="primary" htmlType="submit"
                            onClick={handleGoogleSignIn}
                        >
                        Log In
                        </Button>) :
                        (<div>
                            <Button
                            className = "bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500" type="primary" htmlType="submit"
                            onClick={registerCall}
                            >
                            register
                        </Button>
                            <div>
                                or continue as <s/>
                                    <a
                                        href= {URL+"/try"}
                                        className="text-blue-500">
                                        guest
                                    </a>
                                </div>
                            </div>)}
                </Form.Item>
                <div>
                    <GoogleButton  className="mx-auto mt-4" onClick={handleGoogleSignIn}></GoogleButton>
                </div>
            </Form>
            </div>
        </div>
    )
}