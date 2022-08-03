import projects from "./data";

function App() {
  return (
    <div className="w-full h-auto">
      <div className="main-container">
        <div className="flex flex-wrap items-center justify-center py-20 lg:justify-start lg:items-center gap-x-10 xl:gap-x-24 gap-y-10">
          {projects.map((project) => (
            <div className="flex flex-col items-start justify-start">
              <div className="max-w-[300px] max-h-[250px]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full "
                />
              </div>
              <div className="flex flex-col items-start justify-start w-full h-full gap-3 px-5 py-3 bg-white drop-shadow-xl">
                <h1 className="text-lg font-bold tracking-wider text-gray-800 capitalize">
                  {project.title}
                </h1>
                <a
                  href={project.live_link}
                  className="text-xs text-blue-600"
                  target="_blank"
                  rel="noreferrer"
                >
                  Go to site
                </a>
                <a
                  href={project.github_link}
                  className="text-xs text-blue-600"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github Link
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
