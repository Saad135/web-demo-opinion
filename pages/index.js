import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/Header';
import JobCards from '../components/JobCards';
import SearchBar from '../components/SearchBar';
import SortWidget from '../components/SortWidget';
import { getSortedPostsData } from '../lib/posts';

export default function Home({ allPostsData }) {
  return (
    <div>
      {/* Header */}
      <Header />

      {/* Main section */}
      <div className="py-6 container mx-auto">
        <h1 className="text-3xl text-gray-900 px-4 font-medium">
          Join the oLab Team
        </h1>

        {/* Sorting Widget */}
        <SortWidget />

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
