export default function Navbar(){
  return (
    <div className="navbar bg-white shadow-sm px-4 md:px-8">
      <div className="flex-1">
        <a className="text-lg font-semibold">CS — Ticket System</a>
      </div>

      <div className="hidden md:flex gap-6 text-sm items-center">
        <a>Home</a>
        <a>FAQ</a>
        <a>Changelog</a>
        <a>Blog</a>
        <a>Download</a>
        <a>Contact</a>
        <button className="btn btn-primary btn-sm">
          + New Ticket
        </button>
      </div>
    </div>
  );
}