import { useState } from "react";

export default function Player({ name, symbol }) {
    const [isEditing, setIsEditing] = useState(false);

    let buttonCaption = isEditing ? "Save" : "Edit";

    function handleEditClick() {
        setIsEditing((editing) => !editing);
    }
    let playerName = <span className="player-name">{name}</span>;
    if (isEditing) {
        playerName = <input type="text" required value={name} />;
    }
    return (
        <li>
            <span className="player">
                {playerName}
                <span className="symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{buttonCaption}</button>
        </li>
    );
}
