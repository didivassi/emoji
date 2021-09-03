import './style.css';

const EmojiItem = ({ emoji }) => {

    const onClick = (e) => {
        navigator.clipboard.writeText(e.target.dataset.emoji);
    }

return (
    <div className="emoji-item" >
        <div className="emoji-item__emoji">
            <div className="emoji-item__emoji-inner">
                {emoji.character}
            </div>
            <div className="emoji-item__emoji-label">
                {emoji.unicodeName}
            </div>
            <div className="emoji-item__emoji-label">
                {emoji.codePoint}
            </div>
            <div className="emoji-item__emoji-label" data-emoji={emoji.character} onClick={onClick}>
                Copy to clipboard
            </div>
        </div>
    </div>
)
}

export default EmojiItem;

/* character: "👊"
codePoint: "1F44A"
group: "people-body"
slug: "oncoming-fist"
subGroup: "hand-fingers-closed"
unicodeName: "oncoming fist" */