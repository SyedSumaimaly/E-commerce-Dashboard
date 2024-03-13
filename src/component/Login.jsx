import React from 'react'
import { Button, Label, TextInput } from 'flowbite-react';

function Login() {
    return (
        <>
            <div className='h-screen w-full flex  justify-center items-center'>
                <form className="flex flex-col bg-blue-600 gap-4 p-4 rounded-lg w-1/2">
                    <div className='font-bold text-xl'>
                        Dashboard Login
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="email1" value="Your Email" />
                        </div>
                        <TextInput id="email1" type="email" placeholder="Enter your email" required />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="password1" value="Your Password" />
                        </div>
                        <TextInput id="password1" type="password" required />
                    </div>
                    <Button type="submit" className='bg-white text-blue-600 hover:bg-white'>Submit</Button>
                </form>
            </div>
        </>
    )
}

export default Login