export default function SortWidget() {
  return (
    <div className="mt-4 px-4 py-4 text-gray-900 bg-white rounded shadow-sm">
      <div className="flex justify-between items-baseline">
        <div>All roles</div>
        <div className="flex text-right">
          <div className="ml-3">Filter</div>
          <div className="ml-3">Sort</div>
          <div className="ml-3">
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
