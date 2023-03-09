import React from "react";
import { MdClose } from "react-icons/md";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import Modal from "../UI/Modal/Modal";
import signupBG from "../../assets/signup-1.jpg";

const RegisterModal = (props) => {
    const Login = () => {
        props.onLogin();
        props.onClose();
    };

    return (
        <Modal
            className="max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl p-0 bg-cover bg-left"
            style={{
                backgroundImage: `url(${signupBG})`,
            }}
            onClose={props.onClose}
        >
            <div className="max-w-md p-6 sm:p-12 relative ml-auto bg-white">
                <button
                    className="absolute top-3 sm:top-4 right-3 sm:right-4"
                    onClick={props.onClose}
                >
                    <MdClose className="text-2xl" />
                </button>

                <form action="">
                    <div className="space-y-3">
                        <h2 className="text-2xl font-bold font-frank">
                            Find your home with us.
                        </h2>
                        <p className="text-[15px]">
                            With a Zoocasa account you gain free access to:
                        </p>
                        <ul className="text-[15px] list-disc pl-4">
                            <li>Exclusive property listings updated hourly</li>
                            <li>
                                Photos, property details &amp; price history
                                information
                            </li>
                            <li>Favourite homes &amp; save searches</li>
                            <li>
                                Market Insights &amp; alerts sent to your inbox
                            </li>
                        </ul>
                    </div>
                    <div className="mt-6 space-y-4">
                        <hr className="border-solid border-t-border_color" />
                        <h4 className="text-2xl font-normal font-frank">
                            Create an Account
                        </h4>
                        <div className="">
                            <p className="text-sm">
                                Sign up with your email or
                                <button
                                    type="button"
                                    className="text-[#4695c4] hover:text-body hover:underline ml-1"
                                    onClick={Login}
                                >
                                    Login
                                </button>
                            </p>
                        </div>

                        <div className="">
                            <Input
                                input={{
                                    type: "email",
                                    placeholder: "Email Address",
                                }}
                            />
                        </div>
                        <div className="">
                            <Button className="w-full bg-primary hover:bg-secondary text-white lg:h-10">
                                Sign In
                            </Button>
                        </div>
                    </div>
                </form>
            </div>
        </Modal>
    );
};

export default RegisterModal;
