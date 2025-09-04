import Image from "next/image"
import Button from "./Button"
import SearchBar from "./SearchBar"

export default function HeaderLogin() {
    return (
        <header className="flex flex-wrap w-screen h-fit items-center place-content-between pt-2 pb-2">
        <SearchBar />

        <Button>Fazer Login</Button>
        
      </header>
    )
}