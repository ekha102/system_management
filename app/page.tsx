

import { redirect } from "next/navigation";

export default function Home() {
  return (
    // When the page is started redirect the user to login page:
    redirect("/login")
  );
}
