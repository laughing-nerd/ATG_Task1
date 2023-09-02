"use client"
import { signIn } from "next-auth/react"
import Link from "next/link";
import "./Modal.css";
import { useState } from "react";
const Modal = () => {
    const [type, setType] = useState("create");
    const [passwordType, setPasswordType] = useState("password");
    return (
        <>
            <div className="modal-dialog modal-xl modal-dialog-centered">
                <div className="modal-content">
                    <div className="closeBtn" data-bs-dismiss="modal">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                            <g clipPath="url(#clip0_1_2255)">
                                <path d="M14 2.33331C7.54838 2.33331 2.33337 7.54831 2.33337 14C2.33337 20.4516 7.54838 25.6666 14 25.6666C20.4517 25.6666 25.6667 20.4516 25.6667 14C25.6667 7.54831 20.4517 2.33331 14 2.33331ZM19.8334 18.1883L18.1884 19.8333L14 15.645L9.81171 19.8333L8.16671 18.1883L12.355 14L8.16671 9.81164L9.81171 8.16665L14 12.355L18.1884 8.16665L19.8334 9.81164L15.645 14L19.8334 18.1883Z" fill="white" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1_2255">
                                    <rect width="28" height="28" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>

                    <h1 className="modal-title text-center fs-5 py-3 customHeader">Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</h1>

                    <div className="d-flex justify-content-between px-5 my-4">
                        <div className="purpose">{type === "create" ? "Create Account" : "Sign In"}</div>
                        <div className="text-end purposeDynamic">
                            {type === "create"
                                ? <span>Already have an account? <span className="text-primary pointer" onClick={() => setType("sign")}>Sign in</span></span>
                                : <span>Don't have an account? <span className="text-primary pointer" onClick={() => setType("create")}>Create new for free</span></span>}
                        </div>
                    </div>

                    <div className="d-flex px-5">
                        <div className="w-50">
                            <div className="row">
                                <form>
                                    {type === "create"
                                        ?
                                        <div>
                                            <input className="name" type="text" placeholder="First Name" />
                                            <input className="name" type="text" placeholder="Last Name" />
                                        </div>
                                        : null
                                    }

                                    <div>
                                        <input className="email" type="email" placeholder="Email" />
                                    </div>
                                    <div className="passwordDiv">
                                        <input className="password" type={passwordType} placeholder="Password" />
                                        <div className="eyeIcon" onClick={()=> {
                                            if(passwordType === "password")
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


                                    <button className="rounded-pill w-100 my-4 formButton">{type === "create" ? "Create Account" : "Sign In"}</button>
                                </form>
                            </div>

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
                                    ? <div className="mt-4 dt forgot">Forgot Password</div>
                                    : null
                                }
                            </div>
                        </div>

                        <div className="w-50 text-center d-flex flex-column justify-content-between align-items-center">
                            <img src="/images/atg_illustration.png" className="img-fluid" alt="..." />
                            { type === "create" ? <p className="text-secondary terms">By signing up, you agree to our Terms & conditions, Privacy policy</p> : null }
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Modal