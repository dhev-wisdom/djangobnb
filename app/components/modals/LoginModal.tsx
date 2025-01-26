'use client';

import Modal from "./Modal";

import { useState } from "react";
import useLoginModal from "@/app/hooks/useLoginModal";
import CustomButton from "../forms/CustomButton";

const LoginModal = () => {
    const loginModal = useLoginModal();

    const content = (
        <>
            <h2 className="mb-6 text-2xl">Welcome to DjangoBnb. Please login.</h2>

            <form className="space-y-4">
                <input placeholder="Your email address..." type="email" className="w-full h-[54px] border border-gray-300 rounded-xl px-4" />
                <input placeholder="Your password..." type="password" className="w-full h-[54px] border border-gray-300 rounded-xl px-4" />

                <div className="p-5 bg-airbnb text-white rounded-xl opacity-80">
                    The error message
                </div>

                <CustomButton label="Submit" onClick={() => alert("login")} />
            </form>
        </>
    )
    return (
        <Modal 
            isOpen={loginModal.isOpen}
            close={loginModal.close}
            label="Login"
            content={content} />
    );
}

export default LoginModal;