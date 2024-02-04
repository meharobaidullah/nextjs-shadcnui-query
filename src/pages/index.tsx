import { DataTable } from "@/components/data-table";
import { columns } from "@/components/user-columns";
import { getAllUsers } from "@/services/userServices";
import { User } from "@/types/users";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
  const { data } = useQuery<User[], Error>({
    queryKey: ["users"],
    queryFn: getAllUsers,
  });

  return (
    <div className="container mx-auto py-10">
      <h1 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Users
      </h1>

      <DataTable data={data || []} columns={columns} />
    </div>
  );
}
