import Player from "./Components/Player";
import GameBoard from "./Components/GameBoard";
function App() {
    console.log("APP componement rendered");
    return (
        <main>
            <div id="game-container">
                <ol id="players">
                    <Player initialName="Player 1" symbol="X"></Player>
                    <Player initialName="Player 2" symbol="O"></Player>
                </ol>
                <GameBoard />
            </div>
            LOG
        </main>
    );
}

export default App;
