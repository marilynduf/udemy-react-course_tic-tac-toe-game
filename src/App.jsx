import Player from "./Components/Player";
function App() {
    console.log("APP componement rendered");
    return (
        <main>
            <div id="game-container">
                <ol id="players">
                    <Player name="Player 1" symbol="X"></Player>
                    <Player name="Player 2" symbol="O"></Player>
                </ol>
                PLAYERS GAME BOARD
            </div>
            LOG
        </main>
    );
}

export default App;
