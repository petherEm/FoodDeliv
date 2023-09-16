"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

const UserLinks = () => {
  const { status } = useSession();

  return (
    <div>
      {status === "authenticated" ? (
        <div>
          <Link href="/orders">Orders</Link>
          <span className="ml-4" onClick={() => signOut()}>
            Logout
          </span>
        </div>
      ) : (
        <div>
          <Link href="/login">Login</Link>
        </div>
      )}
    </div>
  );
};

export default UserLinks;
