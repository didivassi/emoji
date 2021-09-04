import { useEffect, useCallback } from "react";

const EmojiDB = ({ setEmojiList, setLoading }) => {
  const API_KEY = "6553dbf90e4b9f44d036b2dfee5b578ad5d0fcc5";
  const API_URL = `https://emoji-api.com/emojis?access_key=${API_KEY}`;

  const fetchEmojiList = useCallback(async () => {
    setLoading(true);
    const response = await fetch(API_URL);
    const json = await response.json();
    setEmojiList(json);
    setLoading(false);
  }, [API_URL, setEmojiList, setLoading]);

  useEffect(() => {
    fetchEmojiList();
  }, [fetchEmojiList]);

  return null;
};

export default EmojiDB;
