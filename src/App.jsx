import { useState } from "react";
import "./App.css";

const originalCards = [
  {
    question: "What is a samosa?",
    answer: "A crispy fried pastry usually filled with potato, meat, or vegetables.",
    acceptedAnswers: ["samosa", "fried pastry", "crispy pastry", "potato pastry"],
    category: "Easy",
  },
  {
    question: "What is biryani?",
    answer: "A flavorful rice dish cooked with spices, meat, vegetables, or eggs.",
    acceptedAnswers: ["biryani", "rice dish", "spiced rice"],
    category: "Easy",
  },
  {
    question: "What is naan?",
    answer: "A soft flatbread commonly eaten with curries and grilled dishes.",
    acceptedAnswers: ["naan", "flatbread", "soft bread"],
    category: "Easy",
  },
  {
    question: "What is lassi?",
    answer: "A yogurt-based drink that can be sweet, salty, or mango-flavored.",
    acceptedAnswers: ["lassi", "yogurt drink", "mango lassi"],
    category: "Medium",
  },
  {
    question: "What is haleem?",
    answer: "A slow-cooked dish made with meat, lentils, wheat, and spices.",
    acceptedAnswers: ["haleem", "slow cooked meat", "lentils wheat meat"],
    category: "Medium",
  },
  {
    question: "What is fuchka?",
    answer: "A popular Bengali street food made with crispy shells and spicy filling.",
    acceptedAnswers: ["fuchka", "puchka", "panipuri", "crispy shells", "spicy street food"],
    category: "Medium",
  },
  {
    question: "What is shatkora?",
    answer: "A citrus fruit commonly used in Sylheti cooking.",
    acceptedAnswers: ["shatkora", "citrus fruit", "sylheti citrus"],
    category: "Hard",
  },
  {
    question: "What is kacchi biryani?",
    answer: "A biryani where marinated raw meat and rice are cooked together.",
    acceptedAnswers: ["kacchi biryani", "raw meat biryani", "marinated meat biryani"],
    category: "Hard",
  },
  {
    question: "What is ras malai?",
    answer: "A dessert made with soft cheese dumplings soaked in sweet milk.",
    acceptedAnswers: ["ras malai", "rasmalai", "milk dessert", "cheese dumplings"],
    category: "Medium",
  },
  {
    question: "What is jilapi?",
    answer: "A sweet fried dessert soaked in sugar syrup, also called jalebi.",
    acceptedAnswers: ["jilapi", "jalebi", "syrup dessert", "fried sweet"],
    category: "Easy",
  },
];

function normalizeAnswer(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s]/g, "")
    .trim();
}

function Flashcard({ card, isFlipped, onFlip }) {
  return (
    <div className={`flashcard ${card.category.toLowerCase()}`} onClick={onFlip}>
      <p className="category">{card.category}</p>

      <h2>{isFlipped ? card.answer : card.question}</h2>

      <p className="hint">
        {isFlipped ? "Click to return to the question" : "Click to reveal the answer"}
      </p>
    </div>
  );
}

function App() {
  const [cards, setCards] = useState(originalCards);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [userGuess, setUserGuess] = useState("");
  const [feedback, setFeedback] = useState("");
  const [currentStreak, setCurrentStreak] = useState(0);
  const [longestStreak, setLongestStreak] = useState(0);

  const currentCard = cards[currentCardIndex];

  function resetCardState() {
    setIsFlipped(false);
    setUserGuess("");
    setFeedback("");
  }

  function flipCard() {
    setIsFlipped(!isFlipped);
  }

  function checkAnswer(event) {
    event.preventDefault();

    const normalizedGuess = normalizeAnswer(userGuess);

    if (normalizedGuess === "") {
      setFeedback("empty");
      return;
    }

    const isCorrect = currentCard.acceptedAnswers.some((acceptedAnswer) => {
      const normalizedAcceptedAnswer = normalizeAnswer(acceptedAnswer);

      return (
        normalizedGuess === normalizedAcceptedAnswer ||
        normalizedAcceptedAnswer.includes(normalizedGuess) ||
        normalizedGuess.includes(normalizedAcceptedAnswer)
      );
    });

    if (isCorrect) {
      setFeedback("correct");

      const newStreak = currentStreak + 1;
      setCurrentStreak(newStreak);

      if (newStreak > longestStreak) {
        setLongestStreak(newStreak);
      }
    } else {
      setFeedback("wrong");
      setCurrentStreak(0);
    }
  }

  function goToNextCard() {
    if (currentCardIndex < cards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
      resetCardState();
    }
  }

  function goToPreviousCard() {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
      resetCardState();
    }
  }

  function shuffleCards() {
    const shuffledCards = [...cards].sort(() => Math.random() - 0.5);
    setCards(shuffledCards);
    setCurrentCardIndex(0);
    resetCardState();
  }

  return (
    <div className="app">
      <div className="header">
        <h1>Desi Food Flashcards</h1>
        <p>
          Test your knowledge of popular South Asian foods, snacks, drinks, and desserts.
        </p>
        <h3>Total Cards: {cards.length}</h3>
        <p className="card-number">
          Card {currentCardIndex + 1} of {cards.length}
        </p>
      </div>

      <div className="streak-container">
        <p>Current Streak: {currentStreak}</p>
        <p>Longest Streak: {longestStreak}</p>
      </div>

      <Flashcard card={currentCard} isFlipped={isFlipped} onFlip={flipCard} />

      <form className="guess-form" onSubmit={checkAnswer}>
        <label htmlFor="guess">Enter your guess:</label>
        <input
          id="guess"
          type="text"
          value={userGuess}
          onChange={(event) => setUserGuess(event.target.value)}
          placeholder="Type your answer here"
        />
        <button type="submit">Submit Guess</button>
      </form>

      {feedback === "correct" && (
        <p className="feedback correct">Correct! Great job.</p>
      )}

      {feedback === "wrong" && (
        <p className="feedback wrong">Incorrect. Try again or click the card to reveal the answer.</p>
      )}

      {feedback === "empty" && (
        <p className="feedback empty">Please type an answer before submitting.</p>
      )}

      <div className="navigation-buttons">
        <button onClick={goToPreviousCard} disabled={currentCardIndex === 0}>
          Previous
        </button>

        <button onClick={goToNextCard} disabled={currentCardIndex === cards.length - 1}>
          Next
        </button>

        <button onClick={shuffleCards}>Shuffle Cards</button>
      </div>
    </div>
  );
}

export default App;