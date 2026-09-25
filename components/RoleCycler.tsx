"use client";
import { useEffect, useState } from "react";

// Types out each role, then deletes it, then moves to the next.
export default function RoleCycler({ roles }: { roles: string[] }) {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const full = roles[i % roles.length];
    let t: ReturnType<typeof setTimeout>;
    if (!deleting && text === full) t = setTimeout(() => setDeleting(true), 1600);
    else if (deleting && text === "") {
      setDeleting(false);
      setI((n) => n + 1);
    } else {
      t = setTimeout(() => setText(deleting ? full.slice(0, text.length - 1) : full.slice(0, text.length + 1)), deleting ? 35 : 70);
    }
    return () => clearTimeout(t);
  }, [text, deleting, i, roles]);

  return (
    <span className="cycler" aria-label={roles.join(", ")}>
      <span aria-hidden>{text}</span>
      <span className="caret" aria-hidden />
    </span>
  );
}
