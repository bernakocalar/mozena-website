import React, { useEffect, useState } from "react";

interface AboutProps {
  title: string;
}

const About: React.FC<AboutProps> = ({ title }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 100); // fade-in için ufak gecikme
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className={`flex flex-col md:flex-row justify-center items-center gap-12  md:px-20 py-8 w-full relative overflow-hidden  text-white
        ${isVisible ? "fade-in" : "opacity-0"}
      `}
      style={{ minHeight: "500px" }}
    >
      <div className="w-full md:w-1/2 space-y-10 text-center md:text-left relative z-10">
        <h2 className="text-3xl md:text-6xl font-bold font-sans leading-tight drop-shadow-lg">
          {title}
        </h2>
        <p className="text-base md:text-lg leading-relaxed font-light drop-shadow-md">
          Her projeye özel bir bakış açısı getiriyor, işinizi en iyi şekilde
          yansıtmak için çalışıyoruz. Hedefimiz sadece beklentileri karşılamak
          değil, sınırları aşan işler ortaya koymak.
        </p>
        <a
          href="https://wa.me/905518738644"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="rounded-xl px-5 py-3 bg-secondary hover:bg-primaryLight transition text-white font-semibold shadow-lg">
            Whatsapp'tan iletişime geç
          </button>
        </a>
      </div>

      <div className="relative w-full md:w-[45%] h-[300px] md:h-[450px] flex items-center justify-center z-10">
        {/* Buraya görsel veya başka içerik ekleyebilirsin */}
      </div>
    </div>
  );
};

export default About;
