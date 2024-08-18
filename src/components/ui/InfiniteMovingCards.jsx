import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';

// Assuming you have a utility function for className merging
// If not, you can implement it or use a library like clsx
const cn = (...classes) => classes.filter(Boolean).join(' ');

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current.appendChild(duplicatedItem);
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      const speedMap = {
        fast: "10s",
        normal: "40s",
        slow: "70s"
      };
      containerRef.current.style.setProperty("--animation-duration", speedMap[speed] || "40s");
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        " scroller relative z-20  overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            className="w-[350px] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-700 px-8 py-6 md:w-[450px]"
            style={{
              background:
                "linear-gradient(180deg, var(--gray-800), var(--gray-900)",
            }}
            key={item.name}
          >
            <blockquote>
              <div
                aria-hidden="true"
                className=" user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>
              <p className="relative z-20 text-sm leading-[1.6] text-gray-100 font-normal mb-1">
                {item.rate}
              </p> <br />
              <span className="relative z-20 text-sm leading-[1.6] text-gray-100 font-normal">
                {item.quote}
              </span>
              <div className="relative z-20 mt-6 flex flex-row items-center">
                <span className="flex flex-col gap-1">
                  <span className="text-sm leading-[1.6] text-gray-400 font-normal">
                    {item.name}
                  </span>
                  <span className="text-sm leading-[1.6] text-gray-400 font-normal">
                    {item.title}
                  </span>
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};

InfiniteMovingCards.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      quote: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      rate: PropTypes.string.isRequired,
    })
  ).isRequired,
  direction: PropTypes.oneOf(['left', 'right']),
  speed: PropTypes.oneOf(['fast', 'normal', 'slow']),
  pauseOnHover: PropTypes.bool,
  className: PropTypes.string,
};