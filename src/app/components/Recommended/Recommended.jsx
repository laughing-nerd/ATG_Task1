"use client";
import { useState } from "react";
import { useSession } from "next-auth/react";
import "./Recommended.css"
import GroupData from "@/app/data/GroupData";

const Recommended = () => {
    const sessionData = useSession();
    const defaultList = GroupData.map(() => false);
    const [following, setFollowing] = useState(defaultList);

    if (sessionData.status==="authenticated") {

        const showGroups = (e) => {
            const toggleFollowing = () => {
                const copyFollowing = [...following];
                copyFollowing[e.id] = !copyFollowing[e.id];
                setFollowing(copyFollowing);
            }
            return (
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <div className="d-flex align-items-center gap-2">
                        <div><img src={e.avatar} className="img-fluid rounded-circle" alt="..." width="36px" height="36px" /></div>
                        <div>{e.name}</div>
                    </div>
                    <div>
                        {following[e.id] === true
                            ? <button className="btn rounded-pill following" onClick={() => toggleFollowing(e.id)}>Following</button>
                            : <button className="btn rounded-pill follow" onClick={() => toggleFollowing(e.id)}>Follow</button>
                        }
                    </div>
                </div>
            )
        }

        return (
            <>
                <div className="container d-flex align-items-center gap-1 mt-5">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                            <g clip-path="url(#clip0_1_1263)">
                                <path opacity="0.3" d="M15.75 9V7.5H9L10.005 3.495L6.75 6.75V14.25H13.5L15.75 9Z" fill="black" />
                                <path d="M6.75 15.75H13.5C14.1225 15.75 14.655 15.375 14.88 14.835L17.145 9.5475C17.2125 9.375 17.25 9.195 17.25 9V7.5C17.25 6.675 16.575 6 15.75 6H11.0175L11.73 2.5725L11.7525 2.3325C11.7525 2.025 11.625 1.74 11.4225 1.5375L10.6275 0.75L5.685 5.6925C5.415 5.9625 5.25 6.3375 5.25 6.75V14.25C5.25 15.075 5.925 15.75 6.75 15.75ZM6.75 6.75L10.005 3.495L9 7.5H15.75V9L13.5 14.25H6.75V6.75ZM0.75 6.75H3.75V15.75H0.75V6.75Z" fill="black" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1_1263">
                                    <rect width="18" height="18" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <div className="recommended">Recommended Groups</div>
                </div>

                <div className="container mt-4 ">
                    {GroupData.map((showGroups))}
                </div>
            </>
        )
    }
    else
    {
        return null;
    }
}

export default Recommended;