import { useState } from "react";
import "./App.css";

function Flashcard({ card, isFlipped, onFlip }) {
  return (
    <div className={`flashcard ${card.category.toLowerCase()}`} onClick={onFlip}>
      <p className="category">{card.category}</p>

      <h2>{isFlipped ? card.answer : card.question}</h2>

      <p className="hint">
        {isFlipped ? "Click to see the question" : "Click to reveal the answer"}
      </p>
    </div>
  );
}

function App() {
  const cards = [
    {
      question: "What is a samosa?",
      answer: "A crispy fried pastry usually filled with potato, meat, or vegetables.",
      category: "Easy",
    },
    {
      question: "What is biryani?",
      answer: "A flavorful rice dish cooked with spices, meat, vegetables, or eggs.",
      category: "Easy",
    },
    {
      question: "What is naan?",
      answer: "A soft flatbread commonly eaten with curries and grilled dishes.",
      category: "Easy",
    },
    {
      question: "What is lassi?",
      answer: "A yogurt-based drink that can be sweet, salty, or mango-flavored.",
      category: "Medium",
    },
    {
      question: "What is haleem?",
      answer: "A slow-cooked dish made with meat, lentils, wheat, and spices.",
      category: "Medium",
    },
    {
      question: "What is fuchka?",
      answer: "A popular Bengali street food made with crispy shells and spicy filling.",
      category: "Medium",
    },
    {
      question: "What is shatkora?",
      answer: "A citrus fruit commonly used in Sylheti cooking.",
      category: "Hard",
    },
    {
      question: "What is kacchi biryani?",
      answer: "A biryani where marinated raw meat and rice are cooked together.",
      category: "Hard",
    },
    {
      question: "What is ras malai?",
      answer: "A dessert made with soft cheese dumplings soaked in sweet milk.",
      category: "Medium",
    },
    {
      question: "What is jilapi?",
      answer: "A sweet fried dessert soaked in sugar syrup, also called jalebi.",
      category: "Easy",
    },
  ];

  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const currentCard = cards[currentCardIndex];

  function flipCard() {
    setIsFlipped(!isFlipped);
  }

  function getRandomCard() {
    let randomIndex = Math.floor(Math.random() * cards.length);

    while (randomIndex === currentCardIndex) {
      randomIndex = Math.floor(Math.random() * cards.length);
    }

    setCurrentCardIndex(randomIndex);
    setIsFlipped(false);
  }

  return (
    <div className="app">
      <div className="header">
        <h1>Desi Food Flashcards</h1>
        <p>
          Test your knowledge of popular South Asian foods, snacks, drinks, and
          desserts.
        </p>
        <h3>Total Cards: {cards.length}</h3>
      </div>

      <Flashcard card={currentCard} isFlipped={isFlipped} onFlip={flipCard} />

      <button onClick={getRandomCard}>Next Random Card</button>
    </div>
  );
}

export default App;