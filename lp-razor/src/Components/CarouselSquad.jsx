import { useEffect, useState } from "react";

function CarouselSquad({ children, show, infiniteLoop, timer }) {
  const [currentIndex, setCurrentIndex] = useState(infiniteLoop ? show : 0);
  const [length, setLength] = useState(children.length);

  const [isRepeating, setIsRepeating] = useState(
    infiniteLoop && children.length > show
  );
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  const [touchPosition, setTouchPosition] = useState();

  const [windowSize, setWindowSize] = useState(getWindowSize());

  let interval;

  useEffect(() => {
    setLength(children && children.length);
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [children]);

  useEffect(() => {
    setLength(children.length);
    setIsRepeating(infiniteLoop && children.length > show);
  }, [children, infiniteLoop, show]);

  useEffect(() => {
    if (isRepeating) {
      if (currentIndex === show || currentIndex === length) {
        setTransitionEnabled(true);
      }
    }
  }, [currentIndex, isRepeating, show, length]);

  const next = () => {
    if (isRepeating || currentIndex < length - show) {
      setCurrentIndex((prevState) => prevState + 1);
    }
    if (currentIndex > 7) {
      setCurrentIndex(1);
    }
  };

  /*   useEffect(() => {
    const interval = setInterval(next, 7000);
    return () => clearInterval(interval);
  }, []); */

  useEffect(() => {
    if (timer !== undefined) {
      interval = setInterval(() => {
        next();
      }, timer);
    }
    return () => {
      clearInterval(interval);
    };
  });

  const prev = () => {
    if (isRepeating || currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
    if (currentIndex < 1) {
      setCurrentIndex(7);
    }
  };

  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };

  const handleTouchMove = (e) => {
    const touchDown = touchPosition;

    if (touchDown === null) {
      return;
    }

    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;

    if (diff > 5) {
      next();
    }

    if (diff < -5) {
      prev();
    }

    setTouchPosition(null);
  };

  const handleTransitionEnd = () => {
    if (isRepeating) {
      if (currentIndex === 0) {
        setTransitionEnabled(false);
        setCurrentIndex(length);
      } else if (currentIndex === length + show) {
        setTransitionEnabled(false);
        setCurrentIndex(show);
      }
    }
  };

  const renderExtraPrev = () => {
    let output = [];
    for (let index = 0; index < show; index++) {
      output.push(children[length - 1 - index]);
    }
    output.reverse();
    return output;
  };

  const renderExtraNext = () => {
    let output = [];
    for (let index = 0; index < show; index++) {
      output.push(children[index]);
    }
    return output;
  };

  let carouselCountDisplay;

  if (windowSize.innerWidth > 768) {
    show = 3;
    carouselCountDisplay = `show-${show}`;
  } else {
    show = 1;
    carouselCountDisplay = `show-${show}`;
  }

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        {(isRepeating || currentIndex > 0) && (
          <button onClick={prev} className="left-arrow">
            &lt;
          </button>
        )}
        <div
          className="carousel-content-wrapper"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          <div
            className={`carousel-content show-${show}`}
            style={{
              transform: `translateX(-${currentIndex * (100 / show)}%)`,
              transition: !transitionEnabled ? "none" : undefined,
            }}
            onTransitionEnd={() => handleTransitionEnd()}
          >
            {length > show && isRepeating && renderExtraPrev()}
            {children}
            {length > show && isRepeating && renderExtraNext()}
          </div>
        </div>
        {(isRepeating || currentIndex < length - show) && (
          <button onClick={next} className="right-arrow">
            &gt;
          </button>
        )}
      </div>
    </div>
  );
}

export default CarouselSquad;

export function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}
