import React from 'react'

const Projects = () => {
  return (
    <section class="project-section" id="projects">
      <h2 class="project-heading">Projects</h2>

     
      <div class="project-card">
        <div class="project-card-content">
          <h3>Guess My Number App</h3>
          <a target="_blank" href="https://venzula.github.io/Guess-my-Number-App/">

            <button>Demo</button>
          </a>
          <button>Github</button>
          <p>
            This is an app created with Vanilla JavaScript. It allows users to
            guess the correct number!
          </p>
          <button>HTML5</button>
          <button>CSS3</button>
          <button>Vanilla JavaScript</button>
        </div>
        <div>
          <img src="./Guess-my-number.png" alt="" class="project-img" />
        </div>
      </div>

     
      <div class="project-card">
        <div class="project-card-content">
          <h3>Quote of the Day</h3>
          <a target="_blank" href=" https://venzula.github.io/Quote-of-the-Day/"><button>Demo</button></a>
          <button>Github</button>
          <p>
            This is an app created with Vanilla JavaScript. It displays a random quote and author!
          </p>
          <button>HTML5</button>
          <button>CSS3</button>
          <button>Vanilla JavaScript</button>
        </div>
        <div>
          <img src="./Quote.png" alt="" class="project-img" />
        </div>
      </div>

   
      <div class="project-card">
        <div class="project-card-content">
          <h3>Currency Converter</h3>
          <a target="_blank" href="https://venzula.github.io/Currency-Converter/"><button>Demo</button></a>
          <button>Github</button>
          <p>
            This is an app created with Vanilla JavaScript. It allows users to
            convert their currencies!
          </p>
          <button>HTML5</button>
          <button>CSS3</button>
          <button>Vanilla JavaScript</button>
        </div>
        <div>
          <img src="./Guess-my-number.png" alt="" class="project-img" />
        </div>
      </div>
    </section>
  )
}

export default Projects