import { useEffect } from "react";

const useKeyPress = (targetKey: string, callback: () => void) => {
    useEffect(() => {
        const keyHandler = (e: KeyboardEvent) => {
            const { ctrlKey, shiftKey, key } = e;
            if (ctrlKey && shiftKey && key === targetKey) callback();
        };
        document.addEventListener("keydown", keyHandler);

        return () => document.removeEventListener("keydown", keyHandler);
    }, [targetKey, callback]);
};

export default useKeyPress;
