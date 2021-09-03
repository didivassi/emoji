import EmojiItem from "../emoji-item";

const EmojiList = ({ emojis }) => {
  const emojiList = emojis?.map((emoji, index) => {
    return <EmojiItem key={index} emoji={emoji} />;
  });

  if (emojis && emojis.length > 0) {
    return <div className="emoji-list">{emojiList}</div>;
  }

  return <div>No Emoji</div>;
};

export default EmojiList;
