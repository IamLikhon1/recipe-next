const SearchBar = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <div>
                <input type="text" className="border-2 focus:outline-none py-4 px-16 rounded-md border-[#07332F] font-bold ml-3" placeholder="Search Recipe By Title" />
                <button  className="py-4 px-8 rounded-md bg-[#07332F] font-semibold text-white ml-3 mt-4 lg:mt-0">Search</button>
            </div>
        </div>
    );
};

export default SearchBar;