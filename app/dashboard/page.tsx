import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

interface StatsResponse {
  totalSubscribers: number;
}

export default async function Dashboard(): Promise<JSX.Element> {
  const session = await getServerSession(authOptions);

  if (!session) {
    return (
      <div className="p-10 text-center">
        <h1 className="text-2xl font-bold">Unauthorized</h1>
      </div>
    );
  }

  const res = await fetch('http://localhost:3000/api/stats', {
    cache: 'no-store',
  });

  const data: StatsResponse = await res.json();

  return (
    <main className="p-10">
      <h1 className="text-2xl font-bold">Welcome {session.user?.name}</h1>

      <p className="mt-4">Subscribers: {data.totalSubscribers}</p>
    </main>
  );
}

// import { getServerSession } from "next-auth";
// import { authOptions } from "@/app/api/auth/[...nextauth]/route";
// import { Card } from "@/components/ui/card";

// interface StatsResponse {
//   totalSubscribers: number;
// }

// export default async function Dashboard(): Promise<JSX.Element> {
//   const session = await getServerSession(authOptions);

//   if (!session) {
//     return <div className="page-container">Unauthorized</div>;
//   }

//   const res = await fetch("http://localhost:3000/api/stats", {
//     cache: "no-store",
//   });

//   const data: StatsResponse = await res.json();

//   return (
//     <main className="page-container">
//       <Card className="card">
//         <h1 className="dashboard-title">
//           Welcome {session.user?.name}
//         </h1>

//         <p className="dashboard-stat">
//           Subscribers: {data.totalSubscribers}
//         </p>
//       </Card>
//     </main>
//   );
// }
