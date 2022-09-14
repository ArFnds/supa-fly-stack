import { Link } from "@remix-run/react";

export function LogoutButton() {
  return (
    <Link
      to="/logout"
      className="rounded bg-slate-600 py-2 px-4 text-blue-100 hover:bg-blue-500 active:bg-blue-600"
    >
      Logout
    </Link>
  );
}
