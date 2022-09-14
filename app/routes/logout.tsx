import type { ActionArgs } from "@remix-run/node";

import { destroyAuthSession } from "~/modules/auth/session.server";

export async function loader({ request }: ActionArgs) {
  return destroyAuthSession(request);
}
