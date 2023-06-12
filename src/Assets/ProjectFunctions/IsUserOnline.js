import { useState, useEffect } from "react";

export const IsUserOnline = () => {
  const [IsOnline, setIsOnline ] = useState(true);

  useEffect(() => {
    const UserOnline = () => {
      setIsOnline(true);
    };
    const UserOffline = () => {
      setIsOnline(false);
    };

    window.addEventListener("online", UserOnline);
    window.addEventListener("offline", UserOffline);
    return()=>{
        window.removeEventListener("online", UserOnline);
        window.removeEventListener("offline", UserOffline);
    };
  },[ ]);
  return IsOnline
};
