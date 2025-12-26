import React from 'react'

const Search = ({SearchTerm, setSearchTerm}) => {
    return (
        <div className="flex items-center gap-3 max-w-xl mx-auto mt-8 px-5 py-3 rounded-full bg-neutral-900 border border-neutral-700 focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-500/40">
            <img
                src="/search.svg"
                alt="search"
                className="w-5 h-5 opacity-70"
            />

            <input
                type="text"
                placeholder="Search"
                value={SearchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1 bg-transparent outline-none text-white placeholder-neutral-400 text-base"
            />
        </div>
    )
}
export default Search

