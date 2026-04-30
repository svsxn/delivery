export default function Navbar() {
  return (
    <nav className="bg-black h-16 flex justify-center text-white text-md">
      <div className="flex items-center justify-center bg-neutral-900 h-12 w-16 rounded-bl-xl">
        <span>43.23zł</span>
      </div>
      <div className="flex items-center justify-center bg-neutral-800 h-full w-20 rounded-b-2xl">
        <span className="text-xl">20.01zł</span>
      </div>
      <div className="flex items-center justify-center bg-neutral-900 h-12 w-16 rounded-br-xl">
        <span>300.23zł</span>
      </div>
    </nav>
  );
}
