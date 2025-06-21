import React, { useState, useEffect, useRef } from "react";
import {
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const testimonialsData = [
  {
    id: 1,
    name: "ALICE JOHNSON",
    img: "https://randomuser.me/api/portraits/women/21.jpg",
    rating: 4.5,
    description: "Amazing experience! Highly recommend this service to everyone.",
  },
  {
    id: 2,
    name: "BOB SMITH",
    img: "https://randomuser.me/api/portraits/men/34.jpg",
    rating: 5,
    description: "Outstanding quality and fantastic customer support.",
  },
  {
    id: 3,
    name: "CHARLOTTE BROWN",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 4,
    description: "Very reliable and professional team.",
  },
  {
    id: 4,
    name: "DAVID WILSON",
    img: "https://randomuser.me/api/portraits/men/52.jpg",
    rating: 3.5,
    description: "Good service but could improve the response time.",
  },
  {
    id: 5,
    name: "EMILY DAVIS",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
    rating: 4.8,
    description: "Exceeded my expectations in every way!",
  },
  {
    id: 6,
    name: "FRANK MILLER",
    img: "https://randomuser.me/api/portraits/men/76.jpg",
    rating: 4.2,
    description: "Great value for money, will use again.",
  },
  {
    id: 7,
    name: "GRACE LEE",
    img: "https://randomuser.me/api/portraits/women/80.jpg",
    rating: 5,
    description: "Top-notch service and friendly staff.",
  },
  {
    id: 8,
    name: "HENRY MARTIN",
    img: "https://randomuser.me/api/portraits/men/83.jpg",
    rating: 3,
    description: "Satisfactory but some delays happened.",
  },
  {
    id: 9,
    name: "ISABELLA CLARK",
    img: "https://randomuser.me/api/portraits/women/90.jpg",
    rating: 4.6,
    description: "Loved working with this team, highly recommended!",
  },
  {
    id: 10,
    name: "JACK THOMAS",
    img: "https://randomuser.me/api/portraits/men/92.jpg",
    rating: 4.7,
    description: "Professional, efficient and timely delivery.",
  },
];

function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const generateTestimonialCards = () => {
  const repeated = [];
  let globalIdCounter = 0;
  for (let i = 0; i < 3; i++) {
    repeated.push(
      ...testimonialsData.map((t) => ({
        ...t,
        id: ++globalIdCounter,
      }))
    );
  }
  return shuffleArray(repeated);
};

const starRating = (rating) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) stars.push(<FaStar key={i} className="text-yellow-400" />);
    else if (rating >= i - 0.5)
      stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
    else stars.push(<FaRegStar key={i} className="text-yellow-400" />);
  }
  return stars;
};

const CARD_WIDTH = 352; // w-80 + space-x-8

const Testimonials = () => {
  const [cards, setCards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const containerRef = useRef(null);

  const clonesCount = 5;

  useEffect(() => {
    setCards(generateTestimonialCards());
  }, []);

  const slideTo = React.useCallback(
    (index) => {
      if (!containerRef.current) return;

      setCurrentIndex(index);
      setIsTransitioning(true);

      const totalLength = cards.length;
      const maxIndex = totalLength;

      if (index >= maxIndex) {
        setTimeout(() => {
          setIsTransitioning(false);
          setCurrentIndex(0);
        }, 700);
      } else if (index < 0) {
        setTimeout(() => {
          setIsTransitioning(false);
          setCurrentIndex(totalLength - 1);
        }, 700);
      }
    },
    [cards]
  );

  useEffect(() => {
    if (cards.length === 0) return;

    const timer = setInterval(() => {
      slideTo(currentIndex + 1);
    }, 4000);

    return () => clearInterval(timer);
  }, [cards, currentIndex, slideTo]);

  const prev = () => slideTo(currentIndex - 1);
  const next = () => slideTo(currentIndex + 1);

  const extendedCards =
    cards.length > 0 ? [...cards, ...cards.slice(0, clonesCount)] : [];

  return (
    <div className="relative max-w-6xl mx-auto p-6 pt-10 pb-10 overflow-visible">
      <button
        onClick={prev}
        className="absolute top-1/2 left-2 -translate-y-1/2 bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-full shadow-lg z-10 transition"
        aria-label="Previous"
      >
        <FaChevronLeft size={24} />
      </button>
      <button
        onClick={next}
        className="absolute top-1/2 right-2 -translate-y-1/2 bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-full shadow-lg z-10 transition"
        aria-label="Next"
      >
        <FaChevronRight size={24} />
      </button>

      <div
        ref={containerRef}
        className="flex space-x-8"
        style={{
          width: extendedCards.length * CARD_WIDTH,
          transform: `translateX(-${currentIndex * CARD_WIDTH}px)`,
          transition: isTransitioning ? "transform 0.7s ease-in-out" : "none",
        }}
        onTransitionEnd={() => {
          if (currentIndex >= cards.length) {
            setIsTransitioning(false);
            setCurrentIndex(0);
          } else if (currentIndex < 0) {
            setIsTransitioning(false);
            setCurrentIndex(cards.length - 1);
          }
        }}
      >
        {extendedCards.map((t, i) => (
          <div
            key={`card-${i}`} // ✅ Unique key fix
            className={`bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 p-8 rounded-3xl shadow-2xl w-80 flex-shrink-0 transform transition-transform duration-500 m-5 ${
              i % 2 === 0 ? "-translate-y-20" : "translate-y-0"
            }`}
          >
            <img
              src={t.img}
              alt={t.name}
              className="w-24 h-24 rounded-full border-4 border-white mb-5 object-cover"
              loading="lazy"
            />
            <h2 className="text-3xl font-extrabold uppercase tracking-wide mb-3 drop-shadow-lg">
              {t.name}
            </h2>
            <div className="flex space-x-1 mb-4">{starRating(t.rating)}</div>
            <p className="text-white text-base leading-relaxed drop-shadow-md">
              {t.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
