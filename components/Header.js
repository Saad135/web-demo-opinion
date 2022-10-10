import SearchBar from './SearchBar';

export default function Header() {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4">
        <div className="flex py-4 justify-between items-baseline">
          <div className="text-2xl font-medium text-blue-400">Opinion</div>
          <div className="w-1/2 flex-initial mx-2">
            <SearchBar />
          </div>
          <button type="button">
            <div className="text-right hover:bg-gray-100 p-3 text-gray-500 hover:text-gray-700 rounded-lg shadow-sm text-sm font-medium border">
              Workspace
            </div>
          </button>
        </div>
        {/* <div className="py-4 text-gray-900">Notion</div> */}
      </div>
    </div>
  );
}
