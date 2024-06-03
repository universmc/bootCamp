// window.js
async function fetchScenes() {
    const response = await fetch('eventBootCamp.json');
    const data = await response.json();
    return data.scenes;
}

async function displayScene(sceneNumber) {
    const scenes = await fetchScenes();
    const scene = scenes.find(s => s.sceneNumber === sceneNumber);

    if (scene) {
        const sceneDisplay = document.getElementById('scene-display');
        sceneDisplay.innerHTML = `
            <h2>${scene.title}</h2>
            <p>${scene.description}</p>
            <img src="${scene.imagePrompt.description}" alt="${scene.title}" class="img-fluid">
            <p>${scene.narrativeVersion}</p>
        `;
    }
}

window.onload = async function() {
    const scenes = await fetchScenes();
    initializeTimeline(scenes);
    displayScene(1); // Display the first scene by default
};
