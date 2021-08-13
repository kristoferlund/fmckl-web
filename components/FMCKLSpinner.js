import React from "react";

const PAUSE_DELAY = 1500;
const ANIM_SPEED = 50;

const wordVariants = [
  ["Food", "Fantastic", "Future", "Fun"],
  ["Management", "Music", "Mood", "Mature", "Magnificent"],
  [
    "Consultant",
    "Culture",
    "Concept development",
    "Creative direction",
    "Content",
    "Curation",
    "Copy",
  ],
  ["Kale", "Kinetic", "Keen", "Kind", "Knowledge", "Kickass"],
  ["Laboratory", "Lobbying", "Leadership", "Lessons"],
];

const FMCKLSpinner = () => {
  const [row, setRow] = React.useState(0);
  const [letter, setLetter] = React.useState(0);
  const [wordInProgress, setWordInProgress] = React.useState("Food");
  const [words, setWords] = React.useState([
    "Future",
    "Magnificent",
    "Creative",
    "Knowledge",
    "Laboratory",
  ]);

  const spin = () => {
    let newWords = [...words];

    if (letter === wordInProgress.length) {
      setLetter(0);
      const newRow = row === words.length - 1 ? 0 : row + 1;
      setWordInProgress(
        wordVariants[newRow][
          Math.floor(Math.random() * wordVariants[newRow].length)
        ]
      );
      setRow(newRow);
    } else {
      setLetter(letter + 1);
    }

    newWords[row] =
      letter > wordInProgress.length - 1
        ? wordInProgress
        : wordInProgress.substr(0, letter) + "█";
    setWords(newWords);
  };

  React.useEffect(() => {
    if (letter === 0) {
      setTimeout(() => {
        spin();
      }, PAUSE_DELAY);
      return;
    }
    setTimeout(() => {
      spin();
    }, ANIM_SPEED);
  }, [words]);

  return words.map((word) => <div className="block">{word}</div>);
};

export default FMCKLSpinner;
