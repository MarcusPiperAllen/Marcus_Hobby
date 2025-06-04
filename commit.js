async function fetchCommits() {
  try {
    const response = await fetch("https://api.github.com/repos/YOUR_USERNAME/YOUR_REPO/commits");
    const data = await response.json();

    let commitHTML = "";
    data.slice(0, 5).forEach(commit => {
      commitHTML += `<li><strong>${commit.commit.author.date}</strong>: ${commit.commit.message}</li>`;
    });

    document.getElementById("commit-list").innerHTML = commitHTML;
  } catch (error) {
    console.error("Error fetching commits:", error);
  }
}

document.addEventListener("DOMContentLoaded", fetchCommits);