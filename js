document.getElementById('tree-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const simName = document.getElementById('sim-name').value;
    const simPhoto = document.getElementById('sim-photo').files[0];
    const simRelationship = document.getElementById('sim-relationship').value;
    const simBio = document.getElementById('sim-bio').value;
    
    if (simPhoto) {
        const reader = new FileReader();
        reader.onloadend = function() {
            const treePreview = document.getElementById('tree-preview');
            const simElement = document.createElement('div');
            simElement.classList.add('sim');
            
            const imgElement = document.createElement('img');
            imgElement.src = reader.result;
            imgElement.alt = simName;
            
            const nameElement = document.createElement('p');
            nameElement.textContent = `${simName} (${simRelationship})`;
            
            const bioElement = document.createElement('p');
            bioElement.classList.add('sim-bio');
            bioElement.textContent = simBio;
            
            simElement.appendChild(imgElement);
            simElement.appendChild(nameElement);
            simElement.appendChild(bioElement);
            treePreview.appendChild(simElement);
        }
        reader.readAsDataURL(simPhoto);
    }
});

// Dummy data for gallery and community sections
const galleryContent = document.getElementById('gallery-content');
const communityContent = document.getElementById('community-content');

const samplePhotos = [
    { name: 'Sim 1', src: 'path/to/photo1.jpg' },
    { name: 'Sim 2', src: 'path/to/photo2.jpg' },
    { name: 'Sim 3', src: 'path/to/photo3.jpg' },
];

samplePhotos.forEach(photo => {
    const imgElement = document.createElement('img');
    imgElement.src = photo.src;
    imgElement.alt = photo.name;
    imgElement.style.width = '100px';
    imgElement.style.margin = '10px';
    
    const nameElement = document.createElement('p');
    nameElement.textContent = photo.name;
    
    const photoContainer = document.createElement('div');
    photoContainer.appendChild(imgElement);
    photoContainer.appendChild(nameElement);
    
    galleryContent.appendChild(photoContainer);
    communityContent.appendChild(photoContainer.cloneNode(true));
});
