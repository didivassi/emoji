import "./style.css";
import EmojiItem from "../emoji-item";

const EmojiList = ({ emojis }) => {
  const emojiGroups = emojis?.reduce((acc, emoji) => {
    const { group } = emoji;
    if (!acc[group]) {
      acc[group] = [];
    }
    acc[group].push(emoji);
    return acc;
  }, []);

  const emojiList = Object.entries(emojiGroups).map(
    ([category, emojies], index) => {
      return (
        <div key={index}>
          <div >{category}</div>
          <div className="emoji-list">
          {emojies.map((emoji, indexItem) => {
            return <EmojiItem key={'icon'+indexItem} emoji={emoji} />;
          })}
          </div>
        </div>
      );
      // return <EmojiItem key={index} emoji={emoji} />;
    }
  );

  if (emojis && emojis.length > 0) {
    return <div className="emoji-categories">{emojiList}</div>;
  }

  return <div>No Emojis found</div>;
};

export default EmojiList;
