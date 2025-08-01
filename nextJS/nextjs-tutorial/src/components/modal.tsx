"use client";
import { useCallback, useRef, useEffect, MouseEventHandler } from "react";
import { useRouter } from "next/navigation";

export default function Modal({ children }: { children: React.ReactNode }) {
    const overlay = useRef(null);
    const wrapper = useRef(null);
    const router = useRouter();

    const onDismiss = useCallback(() => {
        // console.log("onDismiss");
        router.back();
    }, [router]);

    // Will handle outside click
    const onClick: MouseEventHandler = useCallback(
        (e) => {
            // Click event occured
            if (e.target === overlay.current || e.target === wrapper.current) {
                if (onDismiss) onDismiss();
            }
        },
        [onDismiss, overlay, wrapper]
    );

    // Add this event when component loads
    const onKeyDown = useCallback(
        (e: KeyboardEvent) => {
            // KeyBoard event occuered
            if (e.key === "Escape") {
                // Escape key pressed
                onDismiss();
            }
        },
        [onDismiss]
    );

    useEffect(() => {
        // console.log(`useEffect add Event listener`);
        document.addEventListener("keydown", onKeyDown);
        return () => document.removeEventListener("keydown", onKeyDown);
    }, [onKeyDown]);

    return (
        <div
            ref={overlay}
            className="fixed z-10 left-0 right-0 top-0 bottom-0 mx-auto bg-black/60 p-10"
            onClick={onClick}
        >
            <div
                ref={wrapper}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 sm:w-10/12 md:w-8/12 lg:w-2/5 p-6"
            >
                {children}
            </div>
        </div>
    );
}
