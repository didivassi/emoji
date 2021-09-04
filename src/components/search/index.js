import './search.css';
import { useEffect, useState } from "react";
const Search = ({emojiList, setSearching, setEmojiListResults}) => {

  let [searchText, setSearchText] = useState("");

  const searchEmoji = (e) => {
      setSearching(true);
      setSearchText(e.target.value);
  };

  useEffect(() => { 

    if(!searchText?.length===0) {
      setSearching(false);
      setEmojiListResults(emojiList);
      return;
    }
    const results = emojiList.filter(emoji => emoji.unicodeName.toLowerCase().includes(searchText.toLowerCase()));
    setEmojiListResults(results);
    setSearching(false);


  }, [searchText, emojiList, setEmojiListResults, setSearching]);


  return (
    <div className="search">
      <div className="search__container">
        <div className="search__container__input">
          <input
            type="text"
            placeholder="Search for an emoji"
            onChange={searchEmoji}
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
