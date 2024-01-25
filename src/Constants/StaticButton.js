import React, { useEffect, useState } from 'react';

// Component for a static scroll-up button
export default function StaticButton() {
  // State to determine whether to show the scroll-up button
  const [showButton, setShowButton] = useState(false);

  // Function to handle the scroll event and toggle the visibility of the button
  const handleScroll = () => {
    if (window.scrollY > 200) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  // Effect to add and remove the scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Function to scroll to the top when the button is clicked
  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // JSX for the scroll-up button
  return (
    <div className='sticky'>
      {showButton && (
        <button
          id="to-top-button"
          onClick={goToTop}
          title="Go To Top"
          className="fixed bottom-32 right-6 w-16 h-16 rounded-full bg-primary text-white text-3xl font-bold focus:outline-none"
        >
          &uarr;
        </button>
      )}
    </div>
  );
};
