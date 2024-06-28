import './App.css'
import CharacterInterface from "./api/CharacterInterface.ts";
import CharacterCard from "./Characters/CharacterCard.tsx";
import {getCharacters} from "./api/api.ts";
import { useState} from "react";


function App() {
    const [characters, setCharacters] = useState<CharacterInterface[]>([]);
    const [searchTerm, setSearchTerm] = useState('');

    if (characters.length === 0) {
        getCharacters().then(data => setCharacters(data));
    }

    const filteredCharacters = characters.filter(character =>
        character.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <h1>Characters</h1>
            <input
                type="text"
                placeholder="Search characters"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
            />
            <div>
                {filteredCharacters.map((character) => (
                    <CharacterCard key={character.id} character={character} />
                ))}
            </div>
        </div>
    );
}

export default App;
