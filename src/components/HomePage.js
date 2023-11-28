// Example usage in HomePage.js
import React from "react";
import LessonCard from "./LessonCard";
import lessons from "./lessons.json";

const HomePage = () => {
  return (
    <div>
      {Object.entries(lessons).map(([section, titles], index) => (
        <LessonCard key={index} sectionTitle={section} contentTitles={titles} />
      ))}
    </div>
  );
};

export default HomePage;
