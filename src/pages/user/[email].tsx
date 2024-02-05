import { Button } from "@/components/ui/button";
import { User } from "@/types/users";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useReadLocalStorage } from "usehooks-ts";

export default function Home() {
  const router = useRouter();
  const users = useReadLocalStorage<User[]>("users");

  const { email } = router.query;

  const user = (users || []).find((user) => user.email === email);

  console.log({ users, email }, user);

  return (
    <div className="container mx-auto py-10">
      <div className="border-b flex justify-between mb-2">
        <h1 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          User Details
        </h1>

        <Link href="/">
          <Button variant="ghost">
            <span className="sr-only">View user details</span>
            <ArrowLeft className="h-5 w-5" /> Go back to listing
          </Button>
        </Link>
      </div>

      <div>{JSON.stringify(user)}</div>
    </div>
  );
}
