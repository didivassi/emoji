import "./App.css";
import Header from "./components/header";
import Search from "./components/search";
import EmojiList from "./components/emoji-list";
import { useState } from "react";

function App() {
  let [emojiList, setEmojiList] = useState([]);
  let [searching, setSearching] = useState(false);

  const handleSearch = () => {
    if (searching){
      return ( <div className="loader">Loading</div>);
    }
    return ( <EmojiList emojis={emojiList}/>)
  }
  
  return (
    <div className="App">
      <Header />
      <Search setEmojiList={setEmojiList} setSearching={setSearching} />
      {handleSearch()}
      
    </div>
  );
}

export default App;
