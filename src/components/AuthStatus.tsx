"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import styles from "./AuthStatus.module.css";

export default function AuthStatus() {
  const { data: session, status } = useSession();

  if (status === "loading") return null;

  if (session) {
    return (
      <div className={styles.wrapper}>
        <span className={styles.name}>Hi, {session.user?.name}</span>
        <button className={styles.link} onClick={() => signOut({ callbackUrl: "/" })}>
          Log out
        </button>
      </div>
    );
  }

  return <Link href="/login">Log in</Link>;
}