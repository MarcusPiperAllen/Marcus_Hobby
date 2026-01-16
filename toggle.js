function toggleBeforeAfter(id) {
  const container = document.getElementById(id);
  const currentImg = container.querySelector('img');
  const isBefore = currentImg.src.includes('before');
  currentImg.src = isBefore
    ? currentImg.src.replace('before', 'after')
    : currentImg.src.replace('after', 'before');
}

// === IMAGE ROTATION DATA ===
const imageData = {
  'sister-site': {
    beforeImages: [
      { src: "screenshots/sister-before-home.png", alt: "Home Page Before", caption: "Original home page layout" },
      { src: "screenshots/sister-before-about.png", alt: "About Page Before", caption: "Original about page" },
      { src: "screenshots/sister-before-contact.png", alt: "Contact Page Before", caption: "Original contact page" },
      { src: "screenshots/sister-before-media.png", alt: "Media Page Before", caption: "Original media page" },
      { src: "screenshots/sister-before-projects.png", alt: "Projects Page Before", caption: "Original projects page" }
    ],
    afterImages: [
      { src: "screenshots/home.png", alt: "Home Page After", caption: "Redesigned home page with clear navigation" },
      { src: "screenshots/resources.png", alt: "Resources Page After", caption: "New resources section" },
      { src: "screenshots/multimedia.png", alt: "Multimedia Page After", caption: "Enhanced multimedia gallery" }
    ]
  },
  'bonnet-site': {
    beforeImages: [
      { src: "images/hero-banner.jpg", alt: "Bonnet Site - Initial Concept", caption: "Initial design concept" }
    ],
    afterImages: [
      { src: "images/hero-banner.jpg", alt: "Bonnet Site - Live Version", caption: "Professional e-commerce solution" }
    ]
  }
};

// Track current index for each project
const imageIndexes = {
  'sister-site': { current: 0, mode: 'before' },
  'bonnet-site': { current: 0, mode: 'before' }
};

function showNextImage(mode) {
  // Extract project ID from mode (e.g., 'before-sister' -> 'sister-site')
  let projectId;
  if (mode.includes('sister')) {
    projectId = 'sister-site';
  } else if (mode.includes('bonnet')) {
    projectId = 'bonnet-site';
  } else {
    return; // Unknown project
  }

  const container = document.getElementById(projectId);
  const modeType = mode.startsWith('before') ? 'beforeImages' : 'afterImages';
  const imageSet = imageData[projectId][modeType];

  if (!container || !imageSet || imageSet.length === 0) return;

  // If switching modes, reset to first image; otherwise cycle through current mode
  if (imageIndexes[projectId].mode !== modeType) {
    imageIndexes[projectId].mode = modeType;
    imageIndexes[projectId].current = 0;
  } else {
    imageIndexes[projectId].current = (imageIndexes[projectId].current + 1) % imageSet.length;
  }

  const { src, alt, caption } = imageSet[imageIndexes[projectId].current];

  container.innerHTML = `
    <img src="${src}" alt="${alt}">
    <p class="commit-caption">${caption}</p>
  `;
}
