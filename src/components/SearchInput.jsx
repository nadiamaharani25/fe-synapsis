import React from "react";

export default function SearchInput({ onChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium sr-only text-white">
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full p-4 pl-10 text-sm border rounded-lg bg-grey-700 border-gray-600 placeholder-gray-400 text-gray focus:ring-blue-500 focus:border-blue-500"
          placeholder="Search Name ..."
          name="name"
          onChange={onChange}
        />
        <button
          type="submit"
          className="text-white absolute right-2.5 bottom-2.5 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">
          Search
        </button>
      </div>
    </form>
  );
}
