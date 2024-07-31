"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { useRouter } from "next/router";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "../../lib/utils";

const Signup: React.FC = () => {
    const [fullname, setFullname] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [employed, setEmployed] = useState<string>('');
    const [location, setLocation] = useState<string>('');
    const router = useRouter();

    const handleSignup = async (e: FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch('https://h-4-c-protob.vercel.app/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    fullname: fullname,
                    email: email,
                    phone: phone,
                    password: password,
                    employed: employed,
                    location: location,
                }),
            });

            if (response.ok) {
                const data = await response.json();
                alert('Registered Successfully.');
                router.push('/dashboard');
            } else {
                const errorData = await response.json();
                alert(errorData.message || 'Signup failed');
            }
        } catch (error) {
            console.error('Error during signup:', error);
            alert('Signup failed');
        }
    };

    const handleChange = (setter: React.Dispatch<React.SetStateAction<string>>) => (e: ChangeEvent<HTMLInputElement>) => {
        setter(e.target.value);
    };

    return (
        <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input dark:bg-black mt-[10px]">
            <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
                Expand Your Business, Register Now!
            </h2>

            <form className="my-8" onSubmit={handleSignup}>
                <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                    <LabelInputContainer>
                        <Label htmlFor="fullname">Full Name</Label>
                        <Input id="fullname" placeholder="Mohan" type="text" value={fullname} onChange={handleChange(setFullname)} />
                    </LabelInputContainer>
                </div>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" placeholder="mohans@gmail.com" type="email" value={email} onChange={handleChange(setEmail)} />
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="phone">Phone No.</Label>
                    <Input placeholder="98434*****" type="text" value={phone} id="phone" onChange={handleChange(setPhone)} />
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" placeholder="••••••••" type="password" value={password} onChange={handleChange(setPassword)} />
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="employed">Employed</Label>
                    <Input id="employed" placeholder="Yes/No" type="text" value={employed} onChange={handleChange(setEmployed)} />
                </LabelInputContainer>
                <LabelInputContainer className="mb-8">
                    <Label htmlFor="location">Location</Label>
                    <Input
                        id="location"
                        placeholder="Dwarahat"
                        type="text"
                        value={location}
                        onChange={handleChange(setLocation)}
                    />
                </LabelInputContainer>

                <button
                    className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                    type="submit"
                >
                    Sign up &rarr;
                    <BottomGradient />
                </button>
            </form>
        </div>
    );
};

const BottomGradient = () => {
    return (
        <>
            <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
            <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
        </>
    );
};

const LabelInputContainer = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn("flex flex-col space-y-2 w-full", className)}>
            {children}
        </div>
    );
};

export default Signup;
