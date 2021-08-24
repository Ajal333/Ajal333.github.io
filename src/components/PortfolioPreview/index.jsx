
function PortfolioPreview({ project }) {
  return (
    <div>
      <div style={`background-image:url(${project.img})`}>
        <h1 >{project.title}</h1>
      </div>
      <div >
        <p >{project.description}</p>
        <div>
          Tagged:
          {project.tags.map((t) => (
            <div data-tag={t}>
              {t}
            </div>
          ))}
        </div>
        <a href={project.url}>
          <span>View</span>
        </a>
      </div>
    </div>
  );
}

export default PortfolioPreview;
