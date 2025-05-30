import { Monitor, Smartphone, Gamepad, BarChart3, Layers3 } from "lucide-react";

interface Project {
  title: string;
  icon: JSX.Element;
}

const projectsData: Project[] = [
  { title: "Web Uygulamaları", icon: <Monitor size={36} /> },
  { title: "Mobil Uygulamalar", icon: <Smartphone size={36} /> },
  { title: "Oyun ve Simülasyon", icon: <Gamepad size={36} /> },
  { title: "Veri Görselleştirme", icon: <BarChart3 size={36} /> },
  { title: "UI/UX Tasarım", icon: <Layers3 size={36} /> },
  { title: "LLM Uygulamaları", icon: <Monitor size={36} /> },
];

const Projects = () => {
  return (
    <section className="w-full py-4 px-4 flex flex-col items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl w-full">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="relative bg-background overflow-hidden text-white rounded-t-3xl p-6 flex flex-col items-center justify-center gap-4 shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-500"
          >
            {/* İçerik */}
            <div className="bg-primary p-4 rounded-full">{project.icon}</div>
            <h2 className="text-lg font-semibold text-center">
              {project.title}
            </h2>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
