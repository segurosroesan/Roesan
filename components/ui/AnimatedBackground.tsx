"use client";

import { useEffect, useRef } from "react";
import { animate, stagger, createScope } from "animejs";

const COLS = 24;
const ROWS = 14;

export function AnimatedBackground() {
    const containerRef = useRef<HTMLDivElement>(null);
    const scopeRef = useRef<ReturnType<typeof createScope> | null>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        // Build dots dynamically so we control the exact grid
        const container = containerRef.current;
        container.innerHTML = "";

        for (let i = 0; i < COLS * ROWS; i++) {
            const dot = document.createElement("div");
            dot.className = "bg-dot";
            dot.style.cssText = `
                width: 3px;
                height: 3px;
                border-radius: 50%;
                background: rgba(81, 64, 141, 0.25);
                transform: scale(0.4);
                opacity: 0.4;
            `;
            container.appendChild(dot);
        }

        // Use createScope for clean React cleanup
        scopeRef.current = createScope({ root: container }).add(() => {
            animate(".bg-dot", {
                scale: [0.4, 1, 0.4],
                opacity: [0.3, 0.85, 0.3],
                duration: 3200,
                ease: "inOutSine",
                loop: true,
                delay: stagger(180, {
                    grid: [COLS, ROWS],
                    from: "center",
                }),
            });
        });

        return () => {
            scopeRef.current?.revert();
        };
    }, []);

    return (
        // Fixed so it sits behind all content. pointer-events-none so clicks pass through.
        <div
            aria-hidden="true"
            className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
            style={{
                // subtle gradient overlay so the dots fade at bounds
                background:
                    "radial-gradient(ellipse 80% 70% at 50% 50%, transparent 40%, rgba(241,245,249,0.85) 100%)",
            }}
        >
            <div
                ref={containerRef}
                className="absolute inset-0"
                style={{
                    display: "grid",
                    gridTemplateColumns: `repeat(${COLS}, 1fr)`,
                    gridTemplateRows: `repeat(${ROWS}, 1fr)`,
                    padding: "2rem",
                }}
            />
        </div>
    );
}
