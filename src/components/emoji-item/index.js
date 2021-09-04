import "./style.css";

const EmojiItem = ({ emoji }) => {

  const onClick = (e) => {
    navigator.clipboard.writeText(e.target.dataset.emoji);
   // console.log(e.target.parentNode);
   console.log(e.target.dataset.emoji);
  };

  return (
    <div className="emoji-item" data-emoji={emoji.character} onClick={onClick}>
      <div className="emoji-item__emoji-label">{emoji.unicodeName}</div>
      <div className="emoji-item__emoji-char">{emoji.character}</div>
     
    </div>
  );
};

export default EmojiItem;

/* character: "👊"
codePoint: "1F44A"
group: "people-body"
slug: "oncoming-fist"
subGroup: "hand-fingers-closed"
unicodeName: "oncoming fist" */
