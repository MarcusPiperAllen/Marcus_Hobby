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
  }
];

const username = "MarcusPiperAllen"; // Your GitHub username

async function fetchCommitsForProject(project) {
  const url = `https://api.github.com/repos/${username}/${project.repo}/commits?per_page=5`;
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