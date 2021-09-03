import { useEffect, useCallback, useState } from "react";
const Search = ({setEmojiList, setSearching}) => {
  const API_KEY = "6553dbf90e4b9f44d036b2dfee5b578ad5d0fcc5";

  let [searchText, setSearchText] = useState("");

  const searchEmoji = (e) => {
    if (e.key === "Enter") {
      setSearchText(e.target.value);
    }
  };

  const fetchFromApi = useCallback(() => {
    setSearching(true);

    let API_URL = `https://emoji-api.com/emojis?access_key=${API_KEY}`;
    if (searchText) {
      API_URL += `&search=${searchText}`;
    }
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setSearching(false);
        setEmojiList(data);
      });
  }, [searchText,setEmojiList,setSearching]);


  useEffect(() => {
    fetchFromApi();
  }, [fetchFromApi]);

  return (
    <div className="search">
      <div className="search__container">
        <div className="search__container__input">
          <input
            type="text"
            placeholder="Search for an emoji"
            onKeyPress={searchEmoji}
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
