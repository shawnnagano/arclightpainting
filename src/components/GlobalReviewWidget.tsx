import { useEffect, useRef, useState } from "react";

const GlobalReviewWidget = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} style={{ minHeight: "200px" }}>
      {isVisible && (
        <iframe
          className="lc_reviews_widget"
          src="https://reputationhub.site/reputation/widgets/review_widget/TGrxHZY8Y5wXqvLyDgYP?widgetId=69d20b6edc779894ab99f2da"
          frameBorder="0"
          scrolling="no"
          style={{ minWidth: "100%", width: "100%" }}
          title="Review Widget"
          loading="lazy"
        />
      )}
    </div>
  );
};

export default GlobalReviewWidget;