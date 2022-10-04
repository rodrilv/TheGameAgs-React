import { SimpleGrid } from "@chakra-ui/react";
import Cards from "../Cards";
import Navbar from "../Navbar";
import SearchBar from "../SearchBar";

export default function Homepage(){
    return (
        <>
        <Navbar />
        <SearchBar />
        <SimpleGrid marginLeft={5} p={10} columns={{sm: 2, md: 3, lg: 5}} spacing="40px" marginTop={10} > 
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        </SimpleGrid>
        
        </>
    )
}