import React from "react";
import { MdClose } from "react-icons/md";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import Modal from "../UI/Modal/Modal";

const ForgotPassword = (props) => {
    return (
        <Modal
            className="max-w-xs sm:max-w-md p-6 md:p-12"
            dropClassName="z-40"
            onClick={props.onClose}
        >
            <button
                className="absolute top-3 sm:top-4 right-3 sm:right-4"
                onClick={props.onClose}
            >
                <MdClose className="text-2xl" />
            </button>
            <form action="">
                <div className="space-y-3">
                    <h2 className="text-2xl font-normal font-frank">
                        Forgot your password?
                    </h2>
                    <p className="text-[15px]">
                        Not to worry! Enter your email address and we will send
                        you a link to set up a new password.
                    </p>
                </div>
                <div className="mt-6 space-y-4">
                    <div className="">
                        <Input
                            input={{
                                type: "email",
                                placeholder: "Enter Your Email Address",
                            }}
                        />
                    </div>
                    <div className="">
                        <Button className="w-full bg-primary hover:bg-secondary text-white lg:h-10">
                            Send
                        </Button>
                    </div>
                </div>
            </form>
        </Modal>
    );
};

export default ForgotPassword;
