import { getDeliveryEarnings } from "@/app/_queries";

export default async function Navbar() {
  const data = await getDeliveryEarnings();
  console.log(data);
  return (
    <nav className="bg-black h-16 flex justify-center text-white text-md">
      <div className="flex items-center justify-center bg-neutral-900 h-12 w-16 rounded-bl-xl">
        <span>0.00zł</span>
      </div>
      <div className="flex items-center justify-center bg-neutral-800 h-full w-20 rounded-b-2xl">
        <span className="text-xl">{data}zł</span>
      </div>
      <div className="flex items-center justify-center bg-neutral-900 h-12 w-16 rounded-br-xl">
        <span>0.00zł</span>
      </div>
    </nav>
  );
}
