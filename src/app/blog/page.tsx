import { redirect } from "next/navigation";

export default function BlogRedirect() {
  redirect("/resources");
  return null;
}
