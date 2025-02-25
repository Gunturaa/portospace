import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/pr1.png"
          title="Finance Manager using Python"
          description="This project is a finance management system built using Python. It helps users to manage their finances effectively by providing tools for budgeting, expense tracking, and financial reporting."
        />
        <ProjectCard
          src="/pr2.png"
          title="Face Recognition Attendance System using OpenCV and Flask"
          description="This project is a face recognition attendance system built using OpenCV and Flask. It captures and recognizes faces to mark attendance automatically, providing a seamless and efficient way to manage attendance records."
        />
        <ProjectCard
          src="/pr3.png"
          title="School Management System"
          description="This project is a comprehensive school management system that helps in managing various school activities such as student enrollment, attendance, grading, and communication between teachers and parents."
        />
      </div>
    </div>
  );
};

export default Projects;
