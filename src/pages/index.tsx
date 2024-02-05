import { DataTable } from "@/components/data-table";
import { columns } from "@/components/user-columns";
import { getAllUsers } from "@/services/userServices";
import { Gender, User } from "@/types/users";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useLocalStorage } from "usehooks-ts";

export default function Home() {
  const searchParams = useSearchParams();
  const gender = searchParams.get("gender") as Gender;
  const [, setUsers] = useLocalStorage<User[] | null>("users", null);

  const { data, isLoading } = useQuery<User[], Error>({
    queryKey: ["users", gender],
    queryFn: async () => await getAllUsers(gender),
  });

  useEffect(() => {
    setUsers(data ?? []);
  }, [data]);

  return (
    <div className="container mx-auto py-10">
      <h1 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Users
      </h1>

      <DataTable data={data || []} columns={columns} loading={isLoading} />
    </div>
  );
}
