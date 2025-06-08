const projects = [
  {
    repo: "js-quiz-app",
    elementId: "commit-feed-js-quiz-app",
    displayName: "JavaScript Quiz App"
  },
  {
    repo: "marcus-piper-site",
    elementId: "commit-feed-marcus-piper-site",
    displayName: "Marcus Piper Site"
  },
  {
    repo: "curve-sms-safety-project",
    elementId: "commit-feed-curve-sms-safety-project",
    displayName: "Curve SMS Safety App"
  },
  {
  repo: "rev-dr-doshie-piper-site",
  elementId: "commit-feed-rev-dr-doshie-piper-site",
  displayName: "Rev. Dr. Doshie Piper Site"
}

];

const username = "MarcusPiperAllen"; // Your GitHub username

async function fetchCommitsForProject(project) {
  const url = `https://api.github.com/repos/${username}/${project.repo}/commits?per_page=2`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Network response was not ok");
    const data = await response.json();

    let commitHTML = "<ul>";
    data.forEach(commit => {
      commitHTML += `
        <li>
          <strong>${commit.commit.message}</strong><br>
          <small>${new Date(commit.commit.author.date).toLocaleString()} by ${commit.commit.author.name}</small>
          <br>
          <a href="${commit.html_url}" target="_blank">View Commit</a>
        </li>
      `;
    });
    commitHTML += "</ul>";

    const container = document.getElementById(project.elementId);
    if (container) {
      container.innerHTML = commitHTML;
    }
  } catch (error) {
    const container = document.getElementById(project.elementId);
    if (container) {
      container.innerHTML = "<p>Could not load commits.</p>";
    }
    console.error(`Error fetching commits for ${project.repo}:`, error);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  projects.forEach(fetchCommitsForProject);
});
// === IMAGE ROTATION: JavaScript Quiz App ===

const jsQuizData = {
  beforeImages: [
    { src: "images/js-quiz-before1.png", alt: "JS Quiz Before - v1", commitMessage: "Initial layout & DOM setup" },
    { src: "images/js-quiz-before2.png", alt: "JS Quiz Before - v2", commitMessage: "Added questions array + render logic" }
  ],
  afterImages: [
    { src: "images/js-quiz-after1.png", alt: "JS Quiz After - v1", commitMessage: "Refactored styles, added score display" },
    { src: "images/js-quiz-after2.png", alt: "JS Quiz After - v2", commitMessage: "Final polish with animations" }
  ]
};

let jsQuizIndex = {
  current: 0,
  mode: "before"
};

function showNextImage(mode) {
  const container = document.getElementById("js-quiz");
  const imageSet = jsQuizData[mode];
  if (!container || !imageSet || imageSet.length === 0) return;

  jsQuizIndex.mode = mode;
  jsQuizIndex.current = (jsQuizIndex.current + 1) % imageSet.length;

  const { src, alt, commitMessage } = imageSet[jsQuizIndex.current];

  container.innerHTML = `
    <img src="${src}" alt="${alt}">
    <p class="commit-caption">${commitMessage}</p>
  `;
}
