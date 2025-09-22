/*
// Typing Animation
var typed = new Typed(".typing", {
    strings: ["", "Web Designer", "Web Developer", "Mobile App Developer", "Graphic Designer"],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true
});

// Navigation System
const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length,
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;

for(let i = 0; i < totalNavList; i++) {
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function() {
        removeBackSection();
        for(let j = 0; j < totalNavList; j++) {
            if(navList[j].querySelector("a").classList.contains("active")) {
                addBackSection(j);
            }
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active");
        showSelection(this);
        if(window.innerWidth < 1200) {
            // Ne pas fermer le sidebar en mode horizontal
            if (!document.body.classList.contains('sidebar-horizontal')) {
                asideSelectionTogglerBtn();
            }
        }
    });
}

function removeBackSection() {
    for(let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("back-section");
    }
}

function addBackSection(j) {
    allSection[j].classList.add("back-section");
}

function showSelection(element) {
    for(let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("active");
    }
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active");
}

function updateNav(element) {
    for(let i = 0; i < totalNavList; i++) {
        navList[i].querySelector("a").classList.remove("active");
        const target = element.getAttribute("href").split("#")[1];
        if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1]) {
            navList[i].querySelector("a").classList.add("active");
        }
    }
}

// Hire me button
document.querySelector(".hire-me").addEventListener("click", function() {
    const sectionIndex = this.getAttribute("data-section-index");
    showSelection(this);
    updateNav(this);
    removeBackSection();
    addBackSection(sectionIndex);
});

// Nav Toggler (hamburger menu)
const navTogglerBtn = document.querySelector(".nav-toggler"),
    aside = document.querySelector(".aside");

navTogglerBtn.addEventListener("click", () => {
    asideSelectionTogglerBtn();
});

// Fonction modifiée pour prendre en compte le mode horizontal
function asideSelectionTogglerBtn() {
    // En mode horizontal sur desktop, ne pas utiliser le toggle mobile
    if (document.body.classList.contains('sidebar-horizontal') && window.innerWidth >= 1200) {
        return;
    }
    
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    for(let i = 0; i < totalSection; i++) {
        allSection[i].classList.toggle("open");
    }
}

// Ajustements responsive pour le mode sidebar
window.addEventListener('resize', function() {
    // Fermer le menu mobile si on passe en desktop
    if (window.innerWidth >= 1200) {
        aside.classList.remove("open");
        navTogglerBtn.classList.remove("open");
        for(let i = 0; i < totalSection; i++) {
            allSection[i].classList.remove("open");
        }
    }
    
    // Ajustements spécifiques au mode horizontal
    if (document.body.classList.contains('sidebar-horizontal')) {
        if (window.innerWidth >= 1200) {
            // Masquer le nav-toggler en mode horizontal desktop
            navTogglerBtn.style.display = 'none';
        } else {
            // Afficher le nav-toggler en mode horizontal mobile
            navTogglerBtn.style.display = 'flex';
        }
    } else {
        // Comportement normal en mode vertical
        if (window.innerWidth >= 1200) {
            navTogglerBtn.style.display = 'none';
        } else {
            navTogglerBtn.style.display = 'flex';
        }
    }
});*/

// Typing Animation
var typed = new Typed(".typing", {
    strings: ["", "Web Designer", "Web Developer", "Mobile App Developer", "Graphic Designer"],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true
});

// Navigation System
const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length,
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;

for(let i = 0; i < totalNavList; i++) {
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function() {
        removeBackSection();
        for(let j = 0; j < totalNavList; j++) {
            if(navList[j].querySelector("a").classList.contains("active")) {
                addBackSection(j);
            }
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active");
        showSelection(this);
        if(window.innerWidth < 1200) {
            if (!document.body.classList.contains('sidebar-horizontal')) {
                asideSelectionTogglerBtn();
            }
        }
    });
}

function removeBackSection() {
    for(let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("back-section");
    }
}

function addBackSection(j) {
    allSection[j].classList.add("back-section");
}

function showSelection(element) {
    for(let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("active");
    }
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active");
}

function updateNav(element) {
    for(let i = 0; i < totalNavList; i++) {
        navList[i].querySelector("a").classList.remove("active");
        const target = element.getAttribute("href").split("#")[1];
        if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1]) {
            navList[i].querySelector("a").classList.add("active");
        }
    }
}

// Hire me button
document.querySelector(".hire-me").addEventListener("click", function() {
    const sectionIndex = this.getAttribute("data-section-index");
    showSelection(this);
    updateNav(this);
    removeBackSection();
    addBackSection(sectionIndex);
});

// Nav Toggler
const navTogglerBtn = document.querySelector(".nav-toggler"),
    aside = document.querySelector(".aside");

navTogglerBtn.addEventListener("click", () => {
    asideSelectionTogglerBtn();
});

function asideSelectionTogglerBtn() {
    if (document.body.classList.contains('sidebar-horizontal') && window.innerWidth >= 1200) {
        return;
    }
    
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    for(let i = 0; i < totalSection; i++) {
        allSection[i].classList.toggle("open");
    }
}

// Responsive adjustments
window.addEventListener('resize', function() {
    if (window.innerWidth >= 1200) {
        aside.classList.remove("open");
        navTogglerBtn.classList.remove("open");
        for(let i = 0; i < totalSection; i++) {
            allSection[i].classList.remove("open");
        }
    }
    
    if (document.body.classList.contains('sidebar-horizontal')) {
        if (window.innerWidth >= 1200) {
            navTogglerBtn.style.display = 'none';
        } else {
            navTogglerBtn.style.display = 'flex';
        }
    } else {
        if (window.innerWidth >= 1200) {
            navTogglerBtn.style.display = 'none';
        } else {
            navTogglerBtn.style.display = 'flex';
        }
    }
});

// ===== PORTFOLIO MANAGER AVEC SYNCHRONISATION CLOUD =====

class PortfolioManager {
    constructor() {
        this.dbName = 'PortfolioDB';
        this.version = 2;
        this.db = null;
        this.deleteMode = false;
        this.projectToDelete = null;
        this.currentLightboxProjectId = null;
        this.currentImageIndex = 0;
        this.userRole = 'visitor';
        this.ADMIN_CODE = '1111';
        this.pendingAction = null;
        this.nextProjectId = 1;
        
        // Configuration pour la synchronisation cloud (Firebase/Supabase alternative)
       this.cloudSync = {
        enabled: true,
        endpoint: 'https://api.jsonbin.io/v3/b',
        apiKey: '$2a$10$SU7iAixM4EaEfcpTq/bwSuyDBeLYjSOwlPkUoKekj8eSuEAYnmOb2', // Votre clé
        binId: '68d1a64d43b1c97be94be22c' // Le BIN_ID que vous venez d'obtenir
       };
    }

    // Initialiser avec synchronisation cloud
    async init() {
        try {
            await this.openDB();
            
            // Tenter de synchroniser depuis le cloud d'abord
            const cloudData = await this.loadFromCloud();
            if (cloudData && cloudData.length > 0) {
                await this.saveCloudDataToLocal(cloudData);
                this.renderProjects(cloudData);
                this.showStatus('Projets synchronisés depuis le cloud', 'success');
            } else {
                // Fallback vers les données locales
                await this.loadProjects();
            }
            
            this.setupEventListeners();
        } catch (error) {
            console.error('Erreur initialisation:', error);
            // Fallback vers le fonctionnement local
            await this.loadProjects();
            this.setupEventListeners();
            this.showStatus('Mode local activé', 'success');
        }
    }

    // Charger depuis le cloud
    async loadFromCloud() {
        if (!this.cloudSync.enabled) return null;
        
        try {
            // Utilisation de JSONBin.io comme alternative simple
            const response = await fetch(`${this.cloudSync.endpoint}/${this.cloudSync.binId}/latest`, {
                headers: {
                    'X-Master-Key': this.cloudSync.apiKey
                }
            });
            
            if (response.ok) {
                const data = await response.json();
                return data.record.projects || [];
            }
        } catch (error) {
            console.log('Synchronisation cloud non disponible, utilisation des données locales');
        }
        
        return null;
    }

    // Sauvegarder vers le cloud
    async saveToCloud(projects) {
        if (!this.cloudSync.enabled) return false;
        
        try {
            const response = await fetch(`${this.cloudSync.endpoint}/${this.cloudSync.binId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Master-Key': this.cloudSync.apiKey
                },
                body: JSON.stringify({
                    projects: projects,
                    lastUpdated: new Date().toISOString()
                })
            });
            
            return response.ok;
        } catch (error) {
            console.error('Erreur sauvegarde cloud:', error);
            return false;
        }
    }

    // Sauvegarder les données cloud localement
    async saveCloudDataToLocal(projects) {
        if (!this.db) return;
        
        try {
            // Vider les données existantes
            await this.clearLocalData();
            
            // Sauvegarder les nouveaux projets
            for (const project of projects) {
                await this.saveProjectToLocalDB(project);
            }
        } catch (error) {
            console.error('Erreur sauvegarde locale:', error);
        }
    }

    // Vider les données locales
    async clearLocalData() {
        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction(['projects', 'images'], 'readwrite');
            const projectStore = transaction.objectStore('projects');
            const imageStore = transaction.objectStore('images');
            
            projectStore.clear();
            imageStore.clear();
            
            transaction.oncomplete = () => resolve();
            transaction.onerror = () => reject(transaction.error);
        });
    }

    // Sauvegarder un projet spécifique en local
    async saveProjectToLocalDB(projectData) {
        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction(['projects', 'images'], 'readwrite');
            const projectStore = transaction.objectStore('projects');
            const imageStore = transaction.objectStore('images');

            const project = {
                id: projectData.id,
                title: projectData.title,
                createdAt: projectData.createdAt,
                updatedAt: projectData.updatedAt || new Date().toISOString()
            };

            // Forcer l'ID spécifique
            const projectRequest = projectStore.put(project);

            projectRequest.onsuccess = () => {
                // Sauvegarder les images
                if (projectData.images) {
                    if (projectData.images.main) {
                        imageStore.put({
                            id: `${projectData.id}_main`,
                            projectId: projectData.id,
                            type: 'main',
                            data: projectData.images.main,
                            createdAt: projectData.createdAt
                        });
                    }
                    
                    projectData.images.others?.forEach((imageData, index) => {
                        imageStore.put({
                            id: `${projectData.id}_other_${index}`,
                            projectId: projectData.id,
                            type: 'other',
                            data: imageData,
                            createdAt: projectData.createdAt
                        });
                    });
                }
                resolve(projectData.id);
            };

            projectRequest.onerror = () => reject(projectRequest.error);
        });
    }

    // Ouvrir la base de données
    async openDB() {
        return new Promise((resolve, reject) => {
            const request = indexedDB.open(this.dbName, this.version);

            request.onerror = () => reject(request.error);
            request.onsuccess = (event) => {
                this.db = event.target.result;
                resolve(this.db);
            };

            request.onupgradeneeded = (event) => {
                const db = event.target.result;
                
                if (db.objectStoreNames.contains('projects')) {
                    db.deleteObjectStore('projects');
                }
                if (db.objectStoreNames.contains('images')) {
                    db.deleteObjectStore('images');
                }

                const projectStore = db.createObjectStore('projects', { 
                    keyPath: 'id'
                });
                projectStore.createIndex('title', 'title', { unique: false });
                projectStore.createIndex('createdAt', 'createdAt', { unique: false });

                const imageStore = db.createObjectStore('images', { 
                    keyPath: 'id'
                });
                imageStore.createIndex('projectId', 'projectId', { unique: false });
                imageStore.createIndex('type', 'type', { unique: false });
            };
        });
    }

    // Charger les projets locaux
    async loadProjects() {
        try {
            const projects = await this.getAllProjects();
            this.renderProjects(projects);
        } catch (error) {
            console.error('Erreur chargement projets:', error);
            this.loadDefaultProjects();
        }
    }

    // Projets par défaut
    async loadDefaultProjects() {
        const defaultProjects = [
            {
                id: 1,
                title: "E-commerce Website",
                createdAt: new Date().toISOString(),
                images: {
                    main: "images/img9.png",
                    others: ["images/img11.png", "images/img10.png", "images/img2.png"]
                }
            },
            {
                id: 2,
                title: "Local Brand Hub", 
                createdAt: new Date().toISOString(),
                images: {
                    main: "images/img1.png",
                    others: ["images/img13.png", "images/img12.png", "images/img3.png", "images/img8.png"]
                }
            }
        ];
        
        this.renderProjects(defaultProjects);
        this.nextProjectId = 3;
    }

    // Récupérer tous les projets locaux
    async getAllProjects() {
        return new Promise((resolve, reject) => {
            if (!this.db) {
                reject(new Error('Database not initialized'));
                return;
            }

            const transaction = this.db.transaction(['projects'], 'readonly');
            const store = transaction.objectStore('projects');
            const request = store.getAll();

            request.onsuccess = async () => {
                const projects = request.result;
                
                for (let project of projects) {
                    project.images = await this.getProjectImages(project.id);
                }
                
                projects.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
                resolve(projects);
            };

            request.onerror = () => reject(request.error);
        });
    }

    // Récupérer les images d'un projet
    async getProjectImages(projectId) {
        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction(['images'], 'readonly');
            const store = transaction.objectStore('images');
            const index = store.index('projectId');
            const request = index.getAll(projectId);

            request.onsuccess = () => {
                const images = request.result;
                const mainImage = images.find(img => img.type === 'main');
                const otherImages = images.filter(img => img.type === 'other');
                
                resolve({
                    main: mainImage ? mainImage.data : null,
                    others: otherImages.map(img => img.data)
                });
            };

            request.onerror = () => reject(request.error);
        });
    }

    // Ajouter un projet avec synchronisation
    async addProject(projectData) {
        return new Promise(async (resolve, reject) => {
            try {
                const mainImageData = await this.fileToDataURL(projectData.mainImage);
                const otherImagesData = [];
                
                for (let file of projectData.otherImages) {
                    const dataUrl = await this.fileToDataURL(file);
                    otherImagesData.push(dataUrl);
                }

                // Créer l'objet projet complet
                const newProject = {
                    id: Date.now(), // ID unique basé sur timestamp
                    title: projectData.title,
                    createdAt: new Date().toISOString(),
                    updatedAt: new Date().toISOString(),
                    images: {
                        main: mainImageData,
                        others: otherImagesData
                    }
                };

                // Sauvegarder localement
                await this.saveProjectToLocalDB(newProject);
                
                // Synchroniser avec le cloud
                const allProjects = await this.getAllProjects();
                await this.saveToCloud(allProjects);
                
                await this.loadProjects();
                resolve(newProject.id);
            } catch (error) {
                reject(error);
            }
        });
    }

    // Supprimer un projet avec synchronisation
    async deleteProject(projectId) {
        return new Promise(async (resolve, reject) => {
            try {
                // Supprimer localement
                const transaction = this.db.transaction(['projects', 'images'], 'readwrite');
                const projectStore = transaction.objectStore('projects');
                const imageStore = transaction.objectStore('images');

                const imageIndex = imageStore.index('projectId');
                const imageRequest = imageIndex.openCursor(projectId);

                imageRequest.onsuccess = () => {
                    const cursor = imageRequest.result;
                    if (cursor) {
                        imageStore.delete(cursor.primaryKey);
                        cursor.continue();
                    }
                };

                projectStore.delete(projectId);

                transaction.oncomplete = async () => {
                    // Synchroniser avec le cloud après suppression
                    const remainingProjects = await this.getAllProjects();
                    await this.saveToCloud(remainingProjects);
                    resolve();
                };
                
                transaction.onerror = () => reject(transaction.error);
            } catch (error) {
                reject(error);
            }
        });
    }

    // Convertir fichier en DataURL
    fileToDataURL(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result);
            reader.onerror = () => reject(reader.error);
            reader.readAsDataURL(file);
        });
    }

    // Afficher les projets
    renderProjects(projects) {
        const container = document.getElementById('portfolioItemsContainer');
        
        if (!projects || projects.length === 0) {
            container.innerHTML = `
                <div class="no-projects" style="text-align: center; padding: 40px; color: var(--text-black-700); width: 100%;">
                    <i class="fas fa-folder-open" style="font-size: 48px; margin-bottom: 20px;"></i>
                    <h3>Aucun projet pour le moment</h3>
                    <p>Ajoutez votre premier projet en cliquant sur le bouton "+"</p>
                </div>
            `;
            return;
        }

        container.innerHTML = projects.map(project => `
            <div class="portfolio-item padd-15" data-project-id="${project.id}">
                <div class="portfolio-item-inner shadow-dark">
                    <div class="portfolio-img">
                        <img src="${project.images.main || 'images/placeholder.jpg'}" 
                             alt="${project.title}" 
                             loading="lazy">
                        <div class="portfolio-title">${project.title}</div>
                        <div class="project-date">${new Date(project.createdAt).toLocaleDateString('fr-FR')}</div>
                    </div>
                </div>
            </div>
        `).join('');

        this.attachProjectEvents();
    }

    // Attacher les événements aux projets
    attachProjectEvents() {
        document.querySelectorAll('.portfolio-item').forEach(item => {
            item.addEventListener('click', () => {
                const projectId = item.getAttribute('data-project-id');
                
                if (this.deleteMode) {
                    this.projectToDelete = projectId;
                    this.showDeleteConfirmation();
                } else {
                    this.openLightbox(projectId);
                }
            });
        });
    }

    // Ouvrir la lightbox
    async openLightbox(projectId) {
        try {
            const projects = await this.getAllProjects();
            const project = projects.find(p => p.id == projectId);
            
            if (!project) return;

            this.currentLightboxProjectId = projectId;
            this.currentImageIndex = 0;

            const lightbox = document.getElementById('lightbox');
            const lightboxImg = document.getElementById('lightbox-img');
            const thumbsContainer = document.querySelector('.lightbox-thumbs');

            lightboxImg.src = project.images.main;

            thumbsContainer.innerHTML = '';
            
            const allImages = [project.images.main, ...(project.images.others || [])];
            
            allImages.forEach((imageSrc, index) => {
                const thumb = document.createElement('img');
                thumb.src = imageSrc;
                thumb.className = 'lightbox-thumb' + (index === 0 ? ' active' : '');
                thumb.addEventListener('click', () => {
                    lightboxImg.src = imageSrc;
                    this.updateActiveThumb(thumb);
                    this.currentImageIndex = index;
                });
                thumbsContainer.appendChild(thumb);
            });

            lightbox.style.display = 'flex';
        } catch (error) {
            console.error('Erreur lightbox:', error);
        }
    }

    // Mettre à jour la miniature active
    updateActiveThumb(activeThumb) {
        document.querySelectorAll('.lightbox-thumb').forEach(thumb => {
            thumb.classList.remove('active');
        });
        activeThumb.classList.add('active');
    }

    // Navigation dans la lightbox
    navigateImage(direction) {
        if (!this.currentLightboxProjectId) return;

        const allImages = document.querySelectorAll('.lightbox-thumb');
        if (allImages.length === 0) return;

        this.currentImageIndex += direction;
        
        if (this.currentImageIndex < 0) {
            this.currentImageIndex = allImages.length - 1;
        } else if (this.currentImageIndex >= allImages.length) {
            this.currentImageIndex = 0;
        }

        const lightboxImg = document.getElementById('lightbox-img');
        lightboxImg.src = allImages[this.currentImageIndex].src;
        this.updateActiveThumb(allImages[this.currentImageIndex]);
    }

    // Confirmation de suppression
    showDeleteConfirmation() {
        document.getElementById('confirmationModal').style.display = 'flex';
    }

    hideDeleteConfirmation() {
        document.getElementById('confirmationModal').style.display = 'none';
        this.projectToDelete = null;
    }

    // Mode suppression
    enableDeleteMode() {
        this.deleteMode = true;
        document.getElementById('deleteProjectBtn').classList.add('active');
        document.getElementById('portfolioItemsContainer').classList.add('delete-mode');
        this.showStatus('Mode suppression activé - Cliquez sur un projet pour le supprimer', 'success');
    }

    disableDeleteMode() {
        this.deleteMode = false;
        document.getElementById('deleteProjectBtn').classList.remove('active');
        document.getElementById('portfolioItemsContainer').classList.remove('delete-mode');
    }

    // Messages de statut
    showStatus(message, type) {
        const oldMessages = document.querySelectorAll('.status-message');
        oldMessages.forEach(msg => msg.remove());

        const statusEl = document.createElement('div');
        statusEl.className = `status-message ${type}`;
        statusEl.textContent = message;
        document.body.appendChild(statusEl);

        setTimeout(() => statusEl.remove(), 3000);
    }

    // Authentification
    showAuthModal() {
        const authModal = document.getElementById('authModal');
        const authOptions = document.querySelectorAll('.auth-option');
        const adminForm = document.getElementById('adminForm');
        const adminCodeInput = document.getElementById('adminCode');
        const authError = document.getElementById('authError');

        authOptions.forEach(option => option.classList.remove('active'));
        adminForm.style.display = 'none';
        adminCodeInput.value = '';
        authError.style.display = 'none';

        authModal.style.display = 'flex';

        authOptions.forEach(option => {
            option.addEventListener('click', function() {
                authOptions.forEach(opt => opt.classList.remove('active'));
                this.classList.add('active');
                
                const role = this.getAttribute('data-role');
                if (role === 'admin') {
                    adminForm.style.display = 'block';
                } else {
                    adminForm.style.display = 'none';
                }
            });
        });

        const confirmHandler = () => {
            const selectedOption = document.querySelector('.auth-option.active');
            
            if (!selectedOption) {
                authError.textContent = 'Veuillez sélectionner un mode d\'accès';
                authError.style.display = 'block';
                return;
            }
            
            const role = selectedOption.getAttribute('data-role');
            
            if (role === 'admin') {
                const enteredCode = adminCodeInput.value;
                
                if (enteredCode === this.ADMIN_CODE) {
                    this.userRole = 'admin';
                    authModal.style.display = 'none';
                    this.showStatus('Mode administrateur activé', 'success');
                    
                    if (this.pendingAction === 'add') {
                        document.getElementById('addProjectModal').style.display = 'flex';
                    } else if (this.pendingAction === 'delete') {
                        this.enableDeleteMode();
                    }
                } else {
                    authError.textContent = 'Code incorrect. Veuillez réessayer.';
                    authError.style.display = 'block';
                }
            } else {
                this.userRole = 'visitor';
                authModal.style.display = 'none';
                this.showStatus('Mode visiteur activé', 'success');
            }
            
            this.pendingAction = null;
        };

        const cancelHandler = () => {
            authModal.style.display = 'none';
            this.pendingAction = null;
        };

        document.getElementById('confirmAuth').onclick = confirmHandler.bind(this);
        document.getElementById('cancelAuth').onclick = cancelHandler.bind(this);
    }

    // Configuration des écouteurs d'événements
    setupEventListeners() {
        document.getElementById('addProjectBtn').addEventListener('click', () => this.handleAddProject());
        document.getElementById('deleteProjectBtn').addEventListener('click', () => this.toggleDeleteMode());
        
        document.getElementById('projectForm').addEventListener('submit', (e) => this.handleFormSubmit(e));
        
        document.querySelector('.modal .close').addEventListener('click', () => this.closeModal());
        document.getElementById('cancelProject').addEventListener('click', () => this.closeModal());
        
        document.getElementById('confirmDelete').addEventListener('click', () => this.confirmDelete());
        document.getElementById('cancelDelete').addEventListener('click', () => this.hideDeleteConfirmation());
        
        document.getElementById('prevImage').addEventListener('click', () => this.navigateImage(-1));
        document.getElementById('nextImage').addEventListener('click', () => this.navigateImage(1));
        document.querySelector('.close-lightbox').addEventListener('click', () => this.closeLightbox());
        
        // Clic en dehors des modals
        window.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal')) {
                if (e.target.id === 'addProjectModal') {
                    this.closeModal();
                } else if (e.target.id === 'authModal') {
                    e.target.style.display = 'none';
                    this.pendingAction = null;
                } else if (e.target.id === 'confirmationModal') {
                    this.hideDeleteConfirmation();
                }
            }
            if (e.target.id === 'lightbox') {
                this.closeLightbox();
            }
        });

        this.setupImagePreviews();
    }

    // Gérer l'ajout de projet
    handleAddProject() {
        if (this.userRole !== 'admin') {
            this.pendingAction = 'add';
            this.showAuthModal();
        } else {
            document.getElementById('addProjectModal').style.display = 'flex';
        }
    }

    // Basculer le mode suppression
    toggleDeleteMode() {
        if (this.userRole !== 'admin') {
            this.pendingAction = 'delete';
            this.showAuthModal();
            return;
        }

        if (this.deleteMode) {
            this.disableDeleteMode();
        } else {
            this.enableDeleteMode();
        }
    }

    // Gérer la soumission du formulaire
    async handleFormSubmit(e) {
        e.preventDefault();
        
        const title = document.getElementById('projectTitle').value;
        const mainImageFile = document.getElementById('mainImage').files[0];
        const otherImageFiles = document.getElementById('otherImages').files;

        if (!title || !mainImageFile) {
            this.showStatus('Veuillez ajouter un titre et une image principale', 'error');
            return;
        }

        try {
            this.showStatus('Ajout du projet en cours...', 'success');
            await this.addProject({
                title: title,
                mainImage: mainImageFile,
                otherImages: Array.from(otherImageFiles)
            });
            this.closeModal();
            this.showStatus('Projet ajouté et synchronisé avec succès', 'success');
        } catch (error) {
            console.error('Erreur:', error);
            this.showStatus('Erreur lors de l\'ajout du projet', 'error');
        }
    }

    // Confirmer la suppression
    async confirmDelete() {
        if (!this.projectToDelete) return;

        try {
            await this.deleteProject(parseInt(this.projectToDelete));
            this.hideDeleteConfirmation();
            this.disableDeleteMode();
            await this.loadProjects();
            this.showStatus('Projet supprimé et synchronisé avec succès', 'success');
        } catch (error) {
            console.error('Erreur suppression:', error);
            this.showStatus('Erreur lors de la suppression', 'error');
        }
    }

    // Fermer le modal
    closeModal() {
        document.getElementById('addProjectModal').style.display = 'none';
        document.getElementById('projectForm').reset();
        document.getElementById('mainImagePreview').innerHTML = '';
        document.getElementById('otherImagesPreview').innerHTML = '';
    }

    // Fermer la lightbox
    closeLightbox() {
        document.getElementById('lightbox').style.display = 'none';
        this.currentLightboxProjectId = null;
    }

    // CORRECTION : Configuration des aperçus d'images - VERSION CORRIGÉE
    setupImagePreviews() {
        // Image principale (une seule)
        this.setupSingleImagePreview(
            document.getElementById('mainImage'), 
            document.getElementById('mainImagePreview')
        );
        
        // Autres images (multiples) - CORRIGÉ
        this.setupMultipleImagePreview(
            document.getElementById('otherImages'), 
            document.getElementById('otherImagesPreview')
        );
    }

    // Aperçu pour une seule image
    setupSingleImagePreview(inputElement, previewContainer) {
        inputElement.addEventListener('change', function() {
            previewContainer.innerHTML = '';
            
            if (this.files && this.files.length > 0) {
                const file = this.files[0];
                const reader = new FileReader();
                
                reader.onload = function(e) {
                    const previewDiv = document.createElement('div');
                    previewDiv.className = 'image-preview';
                    
                    previewDiv.innerHTML = `
                        <img src="${e.target.result}" alt="Preview">
                        <span class="remove-image">&times;</span>
                    `;
                    
                    previewDiv.querySelector('.remove-image').addEventListener('click', function() {
                        previewDiv.remove();
                        inputElement.value = '';
                    });
                    
                    previewContainer.appendChild(previewDiv);
                };
                
                reader.onerror = function(error) {
                    console.error('Erreur lecture fichier:', error);
                };
                
                reader.readAsDataURL(file);
            }
        });
    }

    // CORRECTION : Aperçu pour plusieurs images - VERSION CORRIGÉE
    setupMultipleImagePreview(inputElement, previewContainer) {
        inputElement.addEventListener('change', function() {
            // Ne pas vider le conteneur, ajouter aux images existantes
            
            if (this.files && this.files.length > 0) {
                const files = Array.from(this.files);
                
                files.forEach((file, index) => {
                    const reader = new FileReader();
                    
                    reader.onload = function(e) {
                        const previewDiv = document.createElement('div');
                        previewDiv.className = 'image-preview';
                        previewDiv.setAttribute('data-file-index', index);
                        
                        previewDiv.innerHTML = `
                            <img src="${e.target.result}" alt="Preview">
                            <span class="remove-image">&times;</span>
                        `;
                        
                        previewDiv.querySelector('.remove-image').addEventListener('click', function() {
                            previewDiv.remove();
                            // Mettre à jour la liste des fichiers
                            portfolioManager.updateMultipleFileList(inputElement, previewContainer);
                        });
                        
                        previewContainer.appendChild(previewDiv);
                    };
                    
                    reader.onerror = function(error) {
                        console.error('Erreur lecture fichier:', error);
                    };
                    
                    reader.readAsDataURL(file);
                });
            }
        });
    }

    // NOUVELLE FONCTION : Mettre à jour la liste des fichiers multiples
    updateMultipleFileList(inputElement, previewContainer) {
        const remainingPreviews = previewContainer.querySelectorAll('.image-preview');
        
        // Créer un nouveau DataTransfer pour mettre à jour les fichiers
        const dataTransfer = new DataTransfer();
        
        // Réindexer les aperçus restants
        remainingPreviews.forEach((preview, index) => {
            const fileIndex = parseInt(preview.getAttribute('data-file-index'));
            if (!isNaN(fileIndex) && inputElement.files[fileIndex]) {
                dataTransfer.items.add(inputElement.files[fileIndex]);
                preview.setAttribute('data-file-index', index);
            }
        });
        
        // Mettre à jour l'input files
        inputElement.files = dataTransfer.files;
        
        if (remainingPreviews.length === 0) {
            inputElement.value = '';
        }
    }

    // NOUVELLE FONCTION : Gestion améliorée de la synchronisation multi-appareils
    async syncAcrossDevices() {
        try {
            // Vérifier si nous sommes en ligne
            if (!navigator.onLine) {
                console.log('Hors ligne - utilisation des données locales');
                return;
            }
            
            // Tenter de synchroniser avec le cloud
            const cloudData = await this.loadFromCloud();
            const localData = await this.getAllProjects();
            
            // Déterminer quelle source de données est la plus récente
            if (cloudData && cloudData.length > 0) {
                const cloudLastUpdated = this.getLastUpdated(cloudData);
                const localLastUpdated = this.getLastUpdated(localData);
                
                if (cloudLastUpdated > localLastUpdated) {
                    // Les données cloud sont plus récentes
                    await this.saveCloudDataToLocal(cloudData);
                    this.renderProjects(cloudData);
                    this.showStatus('Synchronisation cloud réussie', 'success');
                } else if (localLastUpdated > cloudLastUpdated) {
                    // Les données locales sont plus récentes
                    await this.saveToCloud(localData);
                    this.showStatus('Données synchronisées vers le cloud', 'success');
                }
            } else if (localData.length > 0) {
                // Pas de données cloud, sauvegarder les données locales
                await this.saveToCloud(localData);
            }
        } catch (error) {
            console.error('Erreur synchronisation multi-appareils:', error);
            this.showStatus('Erreur de synchronisation', 'error');
        }
    }

    // Obtenir la date de dernière mise à jour
    getLastUpdated(projects) {
        if (!projects || projects.length === 0) return 0;
        return Math.max(...projects.map(p => new Date(p.updatedAt || p.createdAt).getTime()));
    }
}

// Initialiser le portfolio au chargement de la page
document.addEventListener('DOMContentLoaded', async () => {
    const portfolioManager = new PortfolioManager();
    await portfolioManager.init();
    
    // Synchroniser automatiquement toutes les 30 secondes
    setInterval(() => {
        portfolioManager.syncAcrossDevices();
    }, 30000);
    
    // Synchroniser quand on revient en ligne
    window.addEventListener('online', () => {
        portfolioManager.syncAcrossDevices();
    });
    
    // Exposer pour le débogage
    window.portfolioManager = portfolioManager;
});

// Fermer les modals avec Échap
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const lightbox = document.getElementById('lightbox');
        if (lightbox.style.display === 'flex') {
            lightbox.style.display = 'none';
        }
        
        const modal = document.getElementById('addProjectModal');
        if (modal.style.display === 'flex') {
            modal.style.display = 'none';
        }
        
        const authModal = document.getElementById('authModal');
        if (authModal.style.display === 'flex') {
            authModal.style.display = 'none';
            if (window.portfolioManager) {
                window.portfolioManager.pendingAction = null;
            }
        }
        
        const confirmation = document.getElementById('confirmationModal');
        if (confirmation.style.display === 'flex') {
            confirmation.style.display = 'none';
        }
    }
});

// Fonction globale pour fermer la lightbox
function closeLightbox() {
    const portfolioManager = window.portfolioManager;
    if (portfolioManager) {
        portfolioManager.closeLightbox();
    }
}

// ===== STYLE SWITCHER FUNCTIONALITY =====
document.addEventListener('DOMContentLoaded', function() {
    const sidebarToggle = document.getElementById('sidebarToggle');
    const verticalToggle = document.getElementById('verticalToggle');
    const body = document.body;
    const sidebar = document.getElementById('sidebar');
    
    const savedMode = localStorage.getItem('sidebarMode');
    if (savedMode === 'horizontal') {
        enableHorizontalMode();
    } else {
        disableHorizontalMode();
    }
    
    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', function() {
            if (body.classList.contains('sidebar-horizontal')) {
                disableHorizontalMode();
                localStorage.setItem('sidebarMode', 'vertical');
            } else {
                enableHorizontalMode();
                localStorage.setItem('sidebarMode', 'horizontal');
            }
        });
    }
    
    if (verticalToggle) {
        verticalToggle.addEventListener('click', function() {
            disableHorizontalMode();
            localStorage.setItem('sidebarMode', 'vertical');
        });
    }
    
    function enableHorizontalMode() {
        body.classList.add('sidebar-horizontal');
        updateSidebarToggleIcon('horizontal');
        
        if (window.innerWidth < 1200) {
            closeMobileSidebar();
        }
    }
    
    function disableHorizontalMode() {
        body.classList.remove('sidebar-horizontal');
        updateSidebarToggleIcon('vertical');
    }
    
    function updateSidebarToggleIcon(mode) {
        if (sidebarToggle) {
            if (mode === 'horizontal') {
                sidebarToggle.querySelector('i').className = 'fas fa-grip-lines-vertical';
                sidebarToggle.setAttribute('title', 'Switch to Vertical Layout');
            } else {
                sidebarToggle.querySelector('i').className = 'fas fa-bars';
                sidebarToggle.setAttribute('title', 'Switch to Horizontal Layout');
            }
        }
    }
    
    function closeMobileSidebar() {
        sidebar.classList.remove('open');
        const navToggler = document.querySelector('.nav-toggler');
        if (navToggler) {
            navToggler.classList.remove('open');
        }
        document.querySelectorAll('.section').forEach(section => {
            section.classList.remove('open');
        });
    }
    
    function addSmoothTransition() {
        if (sidebar) {
            sidebar.style.transition = 'all 0.3s ease';
        }
        const mainContent = document.querySelector('.main-content');
        if (mainContent) {
            mainContent.style.transition = 'all 0.3s ease';
        }
    }
    
    addSmoothTransition();
});