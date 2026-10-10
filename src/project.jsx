
function Project({ project }) {
    return (
        <article className="project-card">
            <div className="project-card-top">
                <span className="project-category">
                    {project.category}
                </span>
                <span className="project-number">
                    {String(project.id).padStart(2, "0")}
                </span>
            </div>

            <h3>{project.name}</h3>
            <p className="project-description">
                {project.description}
            </p>

            <p className="project-details">
                {project.details}
            </p>

            <div className="project-tags">
                {project.stack.map((skill) => (
                    <span className="tag" key={skill}>
                        {skill}
                    </span>
                ))}
            </div>

            {project.link && (
                <a
                    className="project-link"
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                >
                    {project.linkLabel} ↗
                </a>
            )}
        </article>
    );
}

export default Project;
