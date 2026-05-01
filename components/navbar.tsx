import { getDeliveryEarnings } from "@/app/_queries";

export default async function Navbar() {
  const data = await getDeliveryEarnings();

  return (
    <nav className="bg-black h-22 flex justify-center text-white text-md">
      <div className="flex items-center justify-center bg-neutral-900 h-16 w-full"></div>
      <div className="fixed top-2">
        <div className="flex items-center justify-center bg-neutral-800 h-20 w-32 rounded-2xl">
          <span className="text-2xl">{data}zł</span>
        </div>
      </div>
      {/* <div className="flex items-center justify-center bg-neutral-900 h-16 w-full"></div> */}
    </nav>
  );
}
