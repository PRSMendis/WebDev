import React from "react";
import EmojiBlock from "./EmojiBlock";

function createEmojiBlock(props) {
  return (
    <EmojiBlock
      key={props.id}
      emoji={props.emoji}
      name={props.name}
      meaning={props.meaning}
    />
  );
}

export default createEmojiBlock;
