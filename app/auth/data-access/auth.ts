import { redirect } from "react-router";

const supabase = {
  auth: {
    getSession: () => ({ error: null, data: { session: null } }),
    signInWithPassword(values: { email: string; password: string }) {
      return { error: null };
    },
    signUp(values: { email: string; password: string }) {
      return { error: null };
    },
    signOut() {
      return { error: null };
    },
  },
};

export async function getAuthSession() {
  const response = await supabase.auth.getSession();

  if (response.error) {
    throw response.error;
  }

  return response.data.session;
}

export async function requireAuthSession() {
  const session = await getAuthSession();

  if (!session) {
    throw redirect("/auth");
  }

  return session;
}

export async function requireEmptyAuthSession() {
  const session = await getAuthSession();

  if (session) {
    throw redirect("/");
  }
}

export async function signIn(email: string, password: string) {
  const response = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (response.error) {
    return response.error;
  }

  throw redirect("/");
}

export async function signUp(email: string, password: string) {
  const response = await supabase.auth.signUp({
    email,
    password,
  });

  if (response.error) {
    return response.error;
  }

  throw redirect("/");
}

export async function signOut() {
  const response = await supabase.auth.signOut();

  if (response.error) {
    return response.error;
  }

  throw redirect("/auth");
}
