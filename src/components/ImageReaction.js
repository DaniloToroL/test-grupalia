import React from "react";

// const REACTIONS = [
//     { icon: "👍", counter: 220 },
//     { icon: "❤️", counter: 200 },
//     { icon: "😂", counter: 230 },
//     { icon: "😲", counter: 100 },
//     { icon: "⚡", counter: 30 },
// ];

const REACTIONS = {
    "cry": "🥲",
    "laugh": "😂",
    "like": "👍",
    "heart": "❤️",
    "comment": "⚡",
}
export default function ImageReaction({ id, stats, callback }) {
    // "stats": {
    //     "cryCount": 26,
    //     "laughCount": 485,
    //     "likeCount": 721,
    //     "dislikeCount": 0,
    //     "heartCount": 340,
    //     "commentCount": 20
    //   },
    const reactionStats = Object.keys(stats).filter(reaction => REACTIONS[reaction.replace("Count", "")]).map(reaction => {
        return {
            counter: stats[reaction],
            icon: REACTIONS[reaction.replace("Count", "")]
        }
    });
    return (
        <>
        <div className="image-reactions">
            {reactionStats.map((reaction, index) => (
                <button
                    key={index}
                    className="image-reaction"
                    onClick={() => callback(id, reaction.text)}
                >
                    <div className="image-reaction-icon">{reaction.icon}</div>
                    <div className="image-reaction-text">{Math.max(reaction.counter, 0)}</div>
                </button>
            ))}
        </div>
        </>
    );
}