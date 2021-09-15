import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/router";
import { useCallback, useEffect } from "react";
import { useAuthState } from "../context/userContext";

export default function Login() {
  const router = useRouter();
  const { loading, user } = useAuthState();
  useEffect(() => {
    if (user && !loading) {
      router.push("/dashboard");
    }
  }, []);
  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();

    const { email, password } = e.target.elements;
    const auth = getAuth();
    try {
      await signInWithEmailAndPassword(auth, email.value, password.value);
    } catch (e) {
      alert(e.message);
    }
  }, []);

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input name="email" placeholder="email" type="email" />
        <input name="password" placeholder="password" type="password" />
        <button type="submit">Login</button>
      </form>
    </>
  );
}
