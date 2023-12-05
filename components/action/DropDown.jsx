import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Image from "next/image";
import logInIcon from '../../public/non_login.png';
import {useSession, signIn,signOut} from 'next-auth/react';


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function DropDown({username, icon}) {
    const {data:session, status} = useSession();
    const URL = process.env.TESTURL;
    async function handleGoogleSignOut() {
        signOut("Google", {callbackUrl:{URL}})
    }
    async function handleSignIn (){
        signIn('google',{callbackUrl:""})
    }

    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-3 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                    <div className="mr-1 rounded-2xl overflow-hidden">
                        {icon !== undefined ? (
                            <Image width={25} height={25} src={icon} alt="User Icon" />
                        ) : (
                            <Image width={25} height={25} src={logInIcon} alt="User Icon" />// Fallback for the image when icon is undefined
                        )}
                    </div>
                    {username !== undefined ? username : "Guest"}
                    <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        {status ==="authenticated" ? <div>
                            <Menu.Item>
                            {({ active }) => (
                                <a
                                    href="#"
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm'
                                    )}
                                >
                                    Account settings
                                </a>
                            )}
                        </Menu.Item>

                            <form method="POST" action="#">
                                <Menu.Item>
                                    {({ active }) => (
                                    <button
                                        type="submit"
                                        className={classNames(
                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                            'block w-full px-4 py-2 text-left text-sm')}
                                        onClick= {handleGoogleSignOut}
                                    >
                                        Sign out
                                    </button>
                                )}
                                </Menu.Item>
                            </form>
                        </div>
                            :
                            <Menu.Item>
                            {({ active }) => (
                                <a
                                    href="/login"
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm'
                                    )}
                                >
                                    Sign In
                                </a>
                            )}
                        </Menu.Item>
                        }
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}