import MoviesPlayList from "./components/MoviesPlayList";
import SongsPlayList from "./components/SongsPlayList";
import "./styles.css";

const App = function () {
  return (
    <div className="container is-fluid">
      <button className="button is-danger">Reset Both Playlists</button>
      <hr />
      <MoviesPlayList />
      <hr />
      <SongsPlayList />
    </div>
  );
};

export default App;
