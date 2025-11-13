"use client";
import { signIn, useSession } from "next-auth/react";
import { api } from "../lib/api";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { sign } from "crypto";

export default function Login() {

    const route = useRouter()

  const { data: session, status } = useSession();
  useEffect(() => {
    if (status === "authenticated") {
      route.push("/");
    }
  }, [status, route]);

  useEffect(() => {
    if (status === `authenticated` && session.user) {
      const createUser = async () => {
        try {
          await api.post("/feedbackCreateUser", {
            id: Number(session.user.id),
            name: session.user.name,
            email: session.user.email,
            photo: session.user.image,
            createdAt: new Date(),
          });
        } catch (error) {
          console.log("erro ao cadastrar", error);
        }
      };
      createUser();
    }
  }, [session, status]);

  return (
    <button
      className="bg-amber-900 text-black"
      onClick={() => signIn(`github`)}
    >
      Login com GitHub
    </button>
  );
}
