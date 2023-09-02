"use client";
import { useState } from "react";
import { signIn } from "next-auth/react"

const Offcanvas = () => {
    const [type, setType] = useState("create");
    const [passwordType, setPasswordType] = useState("password");
    return (
        <>
            <div className="offcanvas-header">
                <div className="purpose">{type === "create" ? "Create Account" : "Welcome back!"}</div>
                <duv data-bs-dismiss="offcanvas" aria-label="Close">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 20 20" fill="none">
                        <path d="M10 0C4.47 0 0 4.47 0 10C0 15.53 4.47 20 10 20C15.53 20 20 15.53 20 10C20 4.47 15.53 0 10 0ZM15 13.59L13.59 15L10 11.41L6.41 15L5 13.59L8.59 10L5 6.41L6.41 5L10 8.59L13.59 5L15 6.41L11.41 10L15 13.59Z" fill="#212529" />
                    </svg>
                </duv>
            </div>
            <div className="offcanvas-body">
                <form>
                    {type === "create"
                        ? <div>
                            <input className="name" styles={{ border: "1px solid #D9D9DB" }} type="text" placeholder="First Name" />
                            <input className="name" styles={{ border: "1px solid #D9D9DB" }} type="text" placeholder="Last Name" />
                        </div>
                        : null
                    }

                    <div>
                        <input className="email" type="email" placeholder="Email" />
                    </div>
                    <div className="passwordDiv">
                        <input className="password" type={passwordType} placeholder="Password" />
                        <div className="eyeIcon" onClick={() => {
                            if (passwordType === "password")
                                setPasswordType("text");
                            else
                                setPasswordType("password");
                        }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M0.666687 8C1.82002 5.07333 4.66669 3 8.00002 3C11.3334 3 14.18 5.07333 15.3334 8C14.18 10.9267 11.3334 13 8.00002 13C4.66669 13 1.82002 10.9267 0.666687 8ZM13.88 8C12.78 5.75333 10.5267 4.33333 8.00002 4.33333C5.47336 4.33333 3.22002 5.75333 2.12002 8C3.22002 10.2467 5.47336 11.6667 8.00002 11.6667C10.5267 11.6667 12.78 10.2467 13.88 8ZM8.00003 6.33333C8.92003 6.33333 9.66669 7.08 9.66669 8C9.66669 8.92 8.92003 9.66666 8.00003 9.66666C7.08003 9.66666 6.33336 8.92 6.33336 8C6.33336 7.08 7.08003 6.33333 8.00003 6.33333ZM5.00002 8C5.00002 6.34667 6.34668 5 8.00002 5C9.65335 5 11 6.34667 11 8C11 9.65333 9.65335 11 8.00002 11C6.34668 11 5.00002 9.65333 5.00002 8Z" fill="#8A8A8A" />
                            </svg>
                        </div>
                    </div>
                    {type === "create"
                        ? <div>
                            <input className="confirmPassword" type="password" placeholder="Confirm Password" />
                        </div>
                        : null
                    }


                    <div className="d-flex justify-content-between align-items-center">
                        <div className="w-60">
                            {type === "create"
                                ? <button className="rounded-pill py-3 px-4 my-3 formButton">Create Account</button>
                                : <button className="rounded-pill py-2 px-4 my-3 formButton">Sign In</button>
                            }

                        </div>
                        <div>
                            {type === "create"
                                ? <div className="changeOption" onClick={() => setType("sign")} style={{ textDecoration: "underline" }}>or, Sign In</div>
                                : <div className="changeOption" onClick={() => setType("create")} style={{ textDecoration: "underline" }}>or, Create Account</div>
                            }
                        </div>
                    </div>
                </form>

                <div className="d-flex align-items-center flex-column mb-4">
                    <div className="d-flex justify-content-center align-items-center gap-2 socialLogin" onClick={() => signIn("facebook")}>
                        <div>
                            <img src="/images/icons/fb.png" alt="..." />
                        </div>
                        <div>
                            {type === "create" ? "Sign up with Facebook" : "Sign in with Facebook"}
                        </div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center gap-2 socialLogin" onClick={() => signIn("google")}>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <g clipPath="url(#clip0_1_2217)">
                                    <path d="M3.54594 9.66905L2.989 11.7482L0.953406 11.7912C0.345063 10.6629 0 9.37192 0 8.00005C0 6.67345 0.322625 5.42245 0.8945 4.32092H0.894938L2.70719 4.65317L3.50106 6.45455C3.33491 6.93895 3.24434 7.45895 3.24434 8.00005C3.24441 8.5873 3.35078 9.14995 3.54594 9.66905Z" fill="#FBBB00" />
                                    <path d="M15.8602 6.50562C15.9521 6.98955 16 7.48933 16 8.00012C16 8.57287 15.9398 9.13155 15.8251 9.67046C15.4357 11.5043 14.4181 13.1056 13.0084 14.2388L13.008 14.2384L10.7253 14.1219L10.4023 12.1052C11.3377 11.5566 12.0687 10.6981 12.4537 9.67046H8.1759V6.50562H12.5161H15.8602Z" fill="#518EF8" />
                                    <path d="M13.0081 14.2382L13.0085 14.2386C11.6375 15.3406 9.89596 15.9999 8.00015 15.9999C4.95355 15.9999 2.30477 14.2971 0.953552 11.7911L3.54608 9.66895C4.22168 11.472 5.96102 12.7555 8.00015 12.7555C8.87662 12.7555 9.69774 12.5186 10.4023 12.105L13.0081 14.2382Z" fill="#28B446" />
                                    <path d="M13.1064 1.84175L10.5148 3.9635C9.78553 3.50769 8.92353 3.24438 8.00003 3.24438C5.91475 3.24438 4.14288 4.58678 3.50113 6.4545L0.894969 4.32088H0.894531C2.22597 1.75384 4.90816 0 8.00003 0C9.94112 0 11.7209 0.691438 13.1064 1.84175Z" fill="#F14336" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1_2217">
                                        <rect width="16" height="16" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <div>
                            {type === "create" ? "Sign up with Google" : "Sign in with Google"}
                        </div>
                    </div>
                    {type === "sign"
                        ? <div className="text-center mt-4 footerText">Forgot Password?</div>
                        : <div className="text-center mt-3 footerText">By signing up, you agree to our Terms & conditions, Privacy policy</div>
                    }
                </div>
            </div>

        </>
    )
}

export default Offcanvas;