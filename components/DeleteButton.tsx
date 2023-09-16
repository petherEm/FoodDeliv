"use client";

import Image from "next/image";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const DeleteButton = ({ id }: { id: string }) => {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") return <p>Loading...</p>;

  if (status === "unauthenticated" || !session?.user.isAdmin) {
    return;
  }

  const handleDelete = async () => {
    const res = await fetch(`http://localhost:3000/api/products/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.status === 200) {
      router.push("/menu");
      toast("Product deleted");
    } else {
      res.json().then((data) => {
        toast.error(data.message);
      });
    }
  };

  return (
    <button
      className="bg-red-400 p-2 rounded-full absolute top-4 right-4 z-50"
      onClick={handleDelete}
    >
      <Image src="/delete.png" width={20} height={20} alt="button" />
    </button>
  );
};

export default DeleteButton;
