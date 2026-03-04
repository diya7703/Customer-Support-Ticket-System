export default function Navbar() {
  return (
    <div className="navbar bg-white  px-4 md:px-8">
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

      <div class="lg:hidden">
        <div class="dropdown dropdown-end">
          <label tabindex="0" class="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>

          <ul tabindex="0"
            class="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow bg-white rounded-box w-52 text-sm">

            <li><a>Home</a></li>
            <li><a>FAQ</a></li>
            <li><a>Changelog</a></li>
            <li><a>Blog</a></li>
            <li><a>Download</a></li>
            <li><a>Contact</a></li>

            <li class="mt-2">
              <button class=" bg-[#135deg,#7c3aed,#a78bfa] btn btn-primary btn-sm w-full">
                + New Ticket
              </button>
            </li>

          </ul>
        </div>
      </div>
    </div>
  );
}