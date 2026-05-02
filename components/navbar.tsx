import { getDeliveryEarnings } from "@/app/_queries";

export default async function Navbar() {
  const data = await getDeliveryEarnings();

  return (
    <nav className="sticky top-0 w-full text-md">
      <div className="flex items-center justify-center bg-sidebar border-b border-muted h-18 w-full"></div>
      <div className="flex justify-center -mt-14">
        <div className="flex items-center justify-center bg-muted h-20 w-32 rounded-2xl">
          <span className="text-3xl">{data}zł</span>
        </div>
      </div>
    </nav>
  );
}
