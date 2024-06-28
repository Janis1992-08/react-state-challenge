import CharacterInterface from "../api/CharacterInterface.ts";


interface CharacterCardProps {
    character: CharacterInterface;
}


export default function CharacterCard({ character }: CharacterCardProps) {
    return (
        <div>
            <h2>{character.name}</h2>
            <img src={character.image} alt={character.name} />
            <p>{character.species}</p>
        </div>
    );
}




