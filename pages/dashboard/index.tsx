import { useRouter } from "next/router";
import React, { ReactElement, useEffect } from "react";
import { useAuthState } from "../../context/userContext";

export default function DashHome(): ReactElement {
  const { isAuthenticated, user } = useAuthState();
  const router = useRouter();
  useEffect(() => {
    if (!isAuthenticated) {
      router.push("login");
    }
  }, [isAuthenticated]);

  useEffect(() => {
    console.log(user);
  }, [user]);
  return <div>dash home</div>;
}
