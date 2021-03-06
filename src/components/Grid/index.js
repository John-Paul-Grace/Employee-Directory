import React from "react";

// Exporting the Container, Row, and Col components from this file

// This Container component allows us to use a bootstrap container without worrying about class names
export function Container({ fluid, children }) {
  return <div className={`container${fluid ? "-fluid" : ""}`}>{children}</div>;
}

// This Row component lets us use a bootstrap row without having to think about class names
export function Row({ fluid, children, ascending }) {
  const compare = (next, current) => {
    let index = 1;
    let nextLetter;
    let currentLetter;

    do {
      index++;
      nextLetter = next.key.charAt(index);
      currentLetter = current.key.charAt(index);
    }
    while(typeof nextLetter === "string" && typeof currentLetter === "string" && nextLetter === currentLetter);
  
    if (ascending) {
      return currentLetter.localeCompare(nextLetter);
    }
    else {
      return nextLetter.localeCompare(currentLetter);
    }
  }

  return <div className={`row${fluid ? "-fluid" : ""}`}>{React.Children.toArray(children).sort(compare)}</div>;
}

// This Col component lets us use bootstrap columns
export function Col({ children }) {
  return (
    <div className="col-lg-4 col-md-6">{children}</div>
  );
}
