import React, { useState, useEffect, useRef } from "react";
import { Button } from "primereact/button";
import { Divider } from "primereact/divider";
import { InputText } from "primereact/inputtext";
import { useNotification } from "../../Hooks/useNotifications.js";
import { Skeleton } from "primereact/skeleton";

export const Notification = () => {
    const notificationQuery = useNotification();
    const SkeletonTemplate = () => {
        return <Skeleton></Skeleton>;
    };
    return (
        <div>
            {notificationQuery.isIdle || notificationQuery.isLoading ? (
                <>
                    <div className="card">
                        <h5>Notification</h5>
                        {[1, 2, 3, 4, 5].map((n) => (
                            <>
                                <p>
                                    <SkeletonTemplate />
                                    <SkeletonTemplate />
                                    <SkeletonTemplate />
                                    <SkeletonTemplate />
                                </p>

                                <Divider />
                            </>
                        ))}
                    </div>
                </>
            ) : notificationQuery.isSuccess ? (
                <>
                    <div className="card">
                        <h5>Notification</h5>
                        <ul>
                            {notificationQuery.data &&
                                notificationQuery.data.map((noti) => (
                                    <li style={{ fontSize: "20px", marginLeft: "20px" }}>
                                        <p key={noti.id}>{noti.message}</p>

                                        <Divider />
                                    </li>
                                ))}
                        </ul>
                        {/* {Object.map(notificationQuery.data).forEach((key, value) => (
                            <>
                                <p>{notificationQuery.data[value].message}</p>

                                <Divider />
                            </>
                        ))} */}
                    </div>
                </>
            ) : (
                ""
            )}
        </div>
    );
};
