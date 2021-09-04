import "./App.css";
import Header from "./components/header";
import Search from "./components/search";
import EmojiDB from "./components/emoji-db";
import EmojiList from "./components/emoji-list";
import { useState } from "react";

function App() {
  let [emojiList, setEmojiList] = useState([]);
  let [emojiListResults, setEmojiListResults] = useState([]);
  let [searching, setSearching] = useState(false);
  let [loading, setLoading] = useState(false);
 

 
  const handleSearch = () => {
    if (loading) {
      return <div className="loader">Loading</div>;
    }
    if (searching) {
      return <div className="loader">Searching</div>;
    }
    return (<EmojiList emojis={emojiListResults} />);
  };

  return (
    <div className="App">
      <Header />
      <EmojiDB setEmojiList={setEmojiList} setLoading={setLoading} />
      <Search emojiList={emojiList} setSearching={setSearching} setEmojiListResults={setEmojiListResults} />
      {handleSearch()}
    </div>
  );
}

export default App;
