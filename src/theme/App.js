import "./theme.css";

const navItems = ["women", "plus-size", "kids", "men", "beauty", "living"];

function App() {
  return (
    <div>
      <div className="px-4 py-3 bg-gray-800 text-white">
        <p className="text-xs text-center font-medium tracking-tight">
          Summer staples have arrived.{" "}
          <span className="underline">Shop Now</span>
        </p>
      </div>
      <header className="p-2 flex bg-white justify-between items-center">
        <div className="flex">
          <button className="h-8 w-8 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              className="feather feather-menu mx-auto"
              viewBox="0 0 24 24"
            >
              <path d="M3 12L21 12"></path>
              <path d="M3 6L21 6"></path>
              <path d="M3 18L21 18"></path>
            </svg>
          </button>
        </div>
        <div>
          <h1 className="ml-8 text-xl text-center font-bold tracking-widest text-gray-800">
            KIMBA
          </h1>
        </div>
        <div className="space-x-2">
          <button className="h-8 w-8 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="21"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              className="feather feather-search mx-auto"
              viewBox="0 0 24 24"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="M21 21L16.65 16.65"></path>
            </svg>
          </button>
          <button className="h-8 w-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="21"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              className="feather feather-shopping-bag mx-auto"
              viewBox="0 0 24 24"
            >
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"></path>
              <path d="M3 6L21 6"></path>
              <path d="M16 10a4 4 0 01-8 0"></path>
            </svg>
          </button>
        </div>
      </header>
      <nav>
        <div className="px-1 flex flex-row  space-x-6 overflow-x-auto">
          {navItems.map((navitem, index) => (
            <span key={index} className="p-2 text-lg font-medium uppercase whitespace-nowrap font-wksans">
              {navitem}
            </span>
          ))}
        </div>
      </nav>
    </div>
  );
}

export default App;
