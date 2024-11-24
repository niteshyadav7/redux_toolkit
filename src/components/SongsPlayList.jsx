import { useDispatch, useSelector } from "react-redux";
import { createRandomSong } from "../data";
import { addSongs, removeSongs } from "../store";

const SongsPlayList = () => {
  const dispatch = useDispatch();

  const handleSongAdd = (song) => {
    const action = addSongs(song);
    console.log(action);

    dispatch(action);
    // console.log(song);
  };
  const handleSongRemove = (song) => {
    dispatch(removeSongs(song));
  };

  const songPlaylist = useSelector((state) => state.songs);
  return (
    <div className="content">
      <div className="table-header">
        <h3 className="subtitle is-3">Song Playlist</h3>
        <div className="buttons">
          <button
            onClick={() => handleSongAdd(createRandomSong())}
            className="button is-link"
          >
            + Add Song to Playlist
          </button>
        </div>
      </div>
      <ul>
        {songPlaylist.map((song) => {
          return (
            <li key={song}>
              {song}
              <button
                onClick={() => handleSongRemove(song)}
                className="button is-danger"
              >
                X
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SongsPlayList;
