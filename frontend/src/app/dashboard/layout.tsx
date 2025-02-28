import { getServerSession } from "next-auth";
import Link from "next/link";
//import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/dist/server/api-utils";
import { authOptions } from "../utils/authOptions";

type Props = {
  children: React.ReactNode;
};

const DashBoardLayout = async (props: Props) => {
  const session = await getServerSession(authOptions);
 /* if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      }
    }
  }*/
 //console.log(session, "--SESSION--")
  return (
    <div className=" grid grid-cols-12">
      <div className="grid-cols-4 border-r shadow h-screen p-2">
        <Link
          className="p-3 rounded hover:bg-emerald-600 hover:text-white hover:shadow transition "
          href={`/dashboard/user/${session?.user.id}`}
        >
          User Profile
        </Link>
      </div>
      <div className="col-span-4">{props.children}</div>
    </div>
  );
};

export default DashBoardLayout;