import { useState } from "react";
import "./App.css";
import projects from "./data/projects.js";
import Reveal from "./components/Reveal";

const skills = [
  {
    category: "AI & DATA",
    items: ["Python", "PyTorch", "YOLO", "Pandas"],
  },
  {
    category: "BACKEND",
    items: ["FastAPI", "Django", "REST API", "Docker"],
  },
  {
    category: "FRONTEND & DATABASE",
    items: ["JavaScript", "React", "HTML/CSS", "MongoDB"],
  },
];

function App() {
  const [selectedProject, setSelectedProject] = useState
    (null);


  return (
    <>
      <header className="navbar">
        <a className="brand" href="#home">
          portfolio<span>.</span>
        </a>

        <nav className="nav-links" aria-label="주요 메뉴">
          <a href="#about">소개</a>
          <a href="#skills">기술 스택</a>
          <a href="#projects">프로젝트</a>
          <a href="#contact">연락처</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <span className="eyebrow">
            AI · SOFTWARE · DATA
          </span>

          <h1>
            <Reveal delay={0.3}>
              복잡한 문제를
            </Reveal>
            <Reveal delay={0.5}>
              <span>작동하는 서비스로.</span></Reveal>
          </h1>




          <p className="hero-description">
            AI와 소프트웨어를 활용해 데이터를 다루고,
            <br className="desktop-break" />
            실제 문제를 해결하는 개발자입니다.
          </p>

          <div className="hero-actions">
            <a className="button-primary" href="#projects">
              프로젝트 살펴보기 <span>↘</span>
            </a>
            <a className="button-secondary" href="#about">
              저를 소개합니다
            </a>
          </div>

          <div className="hero-note">
            <span className="status-dot" />
            계속 배우고, 직접 만들고, 개선합니다.
          </div>
        </section>

        <section className="section about-section" id="about">
          <div className="section-heading">

            <span className="eyebrow">ABOUT ME</span>
            <Reveal delay={0.3}>
              <h2>기술을 배우는 데서 끝내지 않고,<br />문제 해결에 연결합니다.</h2>
            </Reveal>

          </div>
          <Reveal delay={0.5}>
            <p className="about-description">
              AI를 전공하며 모델과 데이터의 동작 원리를 이해하고,
              이를 백엔드 API와 웹 인터페이스로 연결하는 경험을 쌓았습니다.
              기술을 개별적으로 다루는 데 그치지 않고,
              각 요소가 어떻게 연결되어 하나의 서비스로 완성되는지 고민합니다.
              이러한 이해를 바탕으로 다양한 기술 간의 연결을 주도하고,
              사용자에게 실질적인 가치를 제공하는 풀스택 개발자가 되고자 합니다.
            </p>
          </Reveal>


          <div className="about-points">
            <article>
              <Reveal delay={0.6}>
                <span className="point-number">01</span>
                <h3>AI와 데이터에 대한 이해</h3>
                <p>
                  모델과 데이터의 특성을 이해하고,
                  기술적 요구사항을 구체적인 구현 방향으로 연결합니다.
                </p>
              </Reveal>
            </article>

            <article>
              <Reveal delay={0.7}>
                <span className="point-number">02</span>
                <h3>프론트엔드와 백엔드의 연결</h3>
                <p>
                  API와 웹 인터페이스를 구현하며
                  데이터가 사용자에게 전달되는 전체 흐름을 고려합니다.
                </p>
              </Reveal>
            </article>

            <article>
              <Reveal delay={0.8}>
                <span className="point-number">03</span>
                <h3>서비스 관점의 문제 해결</h3>
                <p>
                  기술 구현에 머무르지 않고
                  실제 사용 환경과 요구사항을 고려해 기능을 완성합니다.
                </p>
              </Reveal>
            </article>

          </div>
        </section >

        <section className="section skills-section" id="skills">
          <div className="section-heading">


            <Reveal delay={0.3}>
              <h2>사용하는 기술</h2>
              <p>프로젝트에서 활용했거나 학습 중인 기술입니다.</p>
            </Reveal>

          </div>

          <div className="skills-grid">
            {skills.map((group) => (
              <Reveal delay={0.4}>
                <article className="skill-card" key={group.category}>

                  <h3>{group.category}</h3>
                  <div className="skill-tags">
                    {group.items.map((skill) => (
                      <span className="tag" key={skill}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <div className="section-heading">
            <span className="eyebrow">SELECTED PROJECTS</span>
            <Reveal delay={0.2}>
              <h2>직접 만들고 고민한 결과물</h2>
              <p>
                문제를 정의하고, 기술을 선택하고,
                구현하며 배운 프로젝트를 소개합니다.
              </p>
            </Reveal>
          </div>

          <div className="project-list">
            {projects.map((project) => (
              <article className="project-card" key={project.id}>
                <Reveal delay={0.3}>
                  <div className="project-card-top">
                    <span className="project-category">{project.category}</span>
                    <span className="project-number">
                      {String(project.id).padStart(2, "0")}
                    </span>
                  </div>

                  <h3>{project.name}</h3>
                  <p className="project-description">{project.description}</p>

                  <div className="project-tags">
                    {project.stack.map((skill) => (
                      <span className="tag" key={skill}>{skill}</span>
                    ))}
                  </div>

                  <button
                    className="project-detail-button"
                    onClick={() => setSelectedProject(project)}
                  >
                    상세 보기 <span>↗</span>
                  </button>
                </Reveal>
              </article>
            ))}
          </div>


          {selectedProject && (
            <div
              className="project-modal-overlay"
              onClick={() => setSelectedProject(null)}
            >
              <section
                className="project-modal project-modal-wide"
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-project-title"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="project-modal-close"
                  onClick={() => setSelectedProject(null)}
                  aria-label="팝업 닫기"
                >
                  ×
                </button>

                <div className="project-modal-layout">
                  <div className="project-modal-visual">
                    {selectedProject.image ? (
                      <img
                        src={selectedProject.image}
                        alt={`${selectedProject.name} 화면`}
                      />
                    ) : (
                      <div className="project-image-placeholder">
                        <span>PROJECT PREVIEW</span>
                        <p>프로젝트 이미지를 추가해 주세요.</p>
                      </div>
                    )}
                  </div>

                  <div className="project-modal-content">
                    <span className="project-category">
                      {selectedProject.category}
                    </span>

                    <h2 id="modal-project-title">
                      {selectedProject.name}
                    </h2>

                    <p className="project-modal-description">
                      {selectedProject.description}
                    </p>

                    <div className="project-tags">
                      {selectedProject.stack.map((skill) => (
                        <span className="tag" key={skill}>
                          {skill}
                        </span>
                      ))}
                    </div>

                    <div className="project-story">
                      <section>
                        <span className="story-label">01 / PROBLEM</span>
                        <h3>무엇이 문제였는가</h3>
                        <p>{selectedProject.problem || selectedProject.details}</p>
                      </section>

                      <section>
                        <span className="story-label">02 / APPROACH</span>
                        <h3>어떻게 해결했는가</h3>
                        <p>{selectedProject.approach || selectedProject.details}</p>
                      </section>

                      <section>
                        <span className="story-label">03 / RESULT</span>
                        <h3>무엇을 만들었는가</h3>
                        <p>{selectedProject.result || selectedProject.details}</p>
                      </section>
                    </div>

                    {selectedProject.link && (
                      <a
                        className="project-modal-link"
                        href={selectedProject.link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {selectedProject.linkLabel || "GitHub에서 보기"} ↗
                      </a>
                    )}
                  </div>
                </div>
              </section>
            </div>
          )}

        </section>

        <Reveal delay={0.2}>
          <section className="contact-parent-section">
            <section className="contact-section" id="contact">
              <div className="contact-content">
                <span className="eyebrow">CONTACT</span>

                <h2>
                  함께 문제를 해결할
                  <br />
                  기회를 기다립니다.
                </h2>

                <p>
                  프로젝트나 기술에 관해 이야기하고 싶다면
                  <br />
                  편하게 연락해 주세요.
                </p>

                <div className="contact-info">
                  <p>
                    TEL : 010-2583-2393 <br />
                    E-MAIL : rlaxodud6842@naver.com
                  </p>
                </div>

                <a
                  className="button-primary"
                  href="https://github.com/rlaxodud6842"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub 방문하기 ↗
                </a>
              </div>

              <div className="contact-profile">
                <div className="contact-profile-ring">
                  <img
                    src="/me.png"
                    alt="프로필 사진"
                    loading="lazy"
                  />
                </div>

                <span className="contact-profile-caption">
                  반갑습니다.
                </span>
              </div>
            </section>

          </section>
        </Reveal>

      </main >

      <footer className="footer">
        <a className="brand" href="#home">
          portfolio<span>.</span>
        </a>
        <p>배우고, 만들고, 개선합니다.</p>
        <span>© {new Date().getFullYear()} Portfolio</span>
      </footer>
    </>
  );
}

export default App;
