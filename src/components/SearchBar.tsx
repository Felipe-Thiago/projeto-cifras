import Image from "next/image"

const SearchBar = () => {
    return (
        <div className="md:ml-10 flex gap-6 items-center">
          <div className="relative p-8">
            <Image src="/icone.png" alt="icone" fill/>
          </div>
          
          <input id="searchBar" placeholder="Pesquisar música" type="search" className="bg-white p-1.5 pl-5 rounded-2xl shadow w-auto md:w-md hover:shadow-xl"></input>
        </div>
    )
}

export default SearchBar;