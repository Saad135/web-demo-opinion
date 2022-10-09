import Image from 'next/image';
import Link from 'next/link';
import JobCards from '../components/JobCards';
import SearchBar from '../components/SearchBar';
import SortWidget from '../components/SortWidget';
import { getSortedPostsData } from '../lib/posts';

export default function Home({ allPostsData }) {
  return (
    <div>
      {/* Header */}
      <div className="bg-white">
        <div className="container mx-auto px-4">
          <div className="flex py-4 justify-between items-baseline">
            <div className="text-4xl font-medium text-blue-400">Opinion</div>
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

      {/* Main section */}
      <div className="py-6 container mx-auto">
        <h1 className="text-3xl text-gray-900 px-4 font-medium">
          Join the oLab Team
        </h1>
        {/* Sorting Widget */}
        <SortWidget />
        {/* {console.log(allPostsData.title)} */}
        {/* Job Cards */}
        <div className="sm:grid items-stretch sm:gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {allPostsData.map((post) => (
            <JobCards
              key={post.id}
              id={post.id}
              title={post.title}
              desc={post.desc}
              imageUrl={post.imageUrl}
              status={post.status}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
