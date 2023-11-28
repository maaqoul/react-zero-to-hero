import React from "react";
import LessonCard from "./LessonCard"; // Import the LessonCard component you created earlier

const HomePage = () => {
  // This data could be fetched or imported from your markdown files
  const courseSections = [
    {
      title: "01 - Welcome",
      contentTitles: ["A - Intro"],
    },
    {
      title: "02 - No Frills React",
      contentTitles: ["A - Pure React", "B - Components"],
    },
    // Add other sections as needed
  ];

  return (
    <div>
      <h1>Welcome to ReactCourseExplorer</h1>
      {courseSections.map((section, index) => (
        <LessonCard
          key={index}
          sectionTitle={section.title}
          contentTitles={section.contentTitles}
        />
      ))}
    </div>
  );
};

export default HomePage;
