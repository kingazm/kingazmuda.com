"use client";

import { useEffect, useState } from "react";
import { TerminalEntry } from "@/types";

const COMMAND_DELAY = 40;
const OUTPUT_DELAY = 10;
const LINE_PAUSE = 400;

type ScriptLine = { type: "command" | "output" | "empty"; text: string };

function buildScript(entries: TerminalEntry[]): ScriptLine[] {
    const lines: ScriptLine[] = [];
    for (const entry of entries) {
        lines.push({ type: "command", text: entry.command });
        lines.push({ type: "empty",   text: "" });
        lines.push({ type: "output",  text: entry.output });
        lines.push({ type: "empty",   text: "" });
    }
    return lines;
}

export default function About({ aboutScript }: { aboutScript: TerminalEntry[] }) {
    const script = buildScript(aboutScript);

    const [completed, setCompleted] = useState<string[]>([]);
    const [current, setCurrent] = useState("");
    const [done, setDone] = useState(false);

    useEffect(() => {
        let cancelled = false;
        const sleep = (ms: number) => new Promise<void>(r => setTimeout(r, ms));

        async function run() {
            for (const line of script) {
                if (cancelled) return;

                if (line.type === "empty") {
                    setCompleted(prev => [...prev, ""]);
                    await sleep(LINE_PAUSE / 2);
                    continue;
                }

                const prefix = line.type === "command" ? "> " : "";
                const full = prefix + line.text;
                const delay = line.type === "command" ? COMMAND_DELAY : OUTPUT_DELAY;

                for (let i = 0; i <= full.length; i++) {
                    if (cancelled) return;
                    setCurrent(full.slice(0, i));
                    await sleep(delay);
                }

                setCompleted(prev => [...prev, full]);
                setCurrent("");
                await sleep(LINE_PAUSE);
            }
            setDone(true);
        }

        run();
        return () => { cancelled = true; };
    }, []);

    return (
        <div className="hidden lg:block rounded-lg overflow-hidden font-mono text-sm bg-[#080d18]">
            <div className="flex items-center gap-2 bg-[#131c2e] px-4 py-3">
                <span className="w-3 h-3 rounded-full bg-red-500" />
                <span className="w-3 h-3 rounded-full bg-yellow-400" />
                <span className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-2 text-xs text-slate-500">kinga@about ~ %</span>
            </div>
            <div className="p-6 leading-relaxed h-80 overflow-y-auto">
                {completed.map((line, i) => (
                    <div key={i} className={line.startsWith(">") ? "text-[#4F8EF7]" : "text-slate-400"}>
                        {line || " "}
                    </div>
                ))}
                {!done && (
                    <div className={current.startsWith(">") ? "text-[#4F8EF7]" : "text-slate-400"}>
                        {current}<span className="cursor-blink">▋</span>
                    </div>
                )}
                {done && (
                    <div className="text-[#4F8EF7]">
                        &gt; <span className="cursor-blink">▋</span>
                    </div>
                )}
            </div>
        </div>
    );
}
