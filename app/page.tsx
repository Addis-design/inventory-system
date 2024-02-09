import Link from "next/link";

 
export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen">


<Link href='/dashboard/home/overview'>
 View Dashboard
</Link>
     <h2 className="text-3xl">Inventory Management Software</h2> 
    </div>
  );
}
