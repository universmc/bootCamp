// timeline.js
function initializeTimeline(scenes) {
    const timeline = document.getElementById('timeline');
    timeline.innerHTML = scenes.map(scene => `
        <div class="timeline-item" onclick="displayScene(${scene.sceneNumber})">
            <h3>Scène ${scene.sceneNumber}</h3>
            <p>${scene.title}</p>
        </div>
    `).join('');
}
