import { useEffect, useState } from "react";

import Notification, { NotificationDataType } from "./Notification";
import ShellPS1 from "./Shell";

export interface FloatingAreaProps {
  disableShell?: boolean;
  notifications?: NotificationDataType[];
}

function FloatingArea({ disableShell, notifications }: FloatingAreaProps) {
  const [displayNotifications, setNotificationVisbility] = useState(false);

  useEffect(() => {
    const timer = setTimeout(
      () => setNotificationVisbility(!!notifications),
      2000,
    );

    return () => clearTimeout(timer);
  }, []);

  return (
    <span id="corner-area" 
      className={`
        fixed bottom-4 left-3 w-96
        flex flex-col max-xl:pr-6
        gap-2 max-xl:w-full
        transition-all
        z-50
      `}
    >
      {displayNotifications && notifications?.map((n) => <Notification { ...n } />)}
      {!disableShell && <ShellPS1 />}
    </span>
  );
}

export default FloatingArea;