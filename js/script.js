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

// ===== FIXED PORTFOLIO MANAGER =====
class PortfolioManager {
    constructor() {
        this.projects = [];
        this.deleteMode = false;
        this.projectToDelete = null;
        this.currentLightboxProjectId = null;
        this.currentImageIndex = 0;
        this.userRole = 'visitor';
        this.ADMIN_CODE = '1111';
        this.pendingAction = null;
        this.nextProjectId = 1;
    }

    // Initialize with default projects
    init() {
        this.loadDefaultProjects();
        this.setupEventListeners();
        this.renderProjects();
    }

    // Load default projects
    loadDefaultProjects() {
        this.projects = [
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
        this.nextProjectId = 3;
    }

    // Add new project
    async addProject(projectData) {
        const mainImageData = await this.fileToDataURL(projectData.mainImage);
        const otherImagesData = [];
        
        for (let file of projectData.otherImages) {
            const dataUrl = await this.fileToDataURL(file);
            otherImagesData.push(dataUrl);
        }

        const newProject = {
            id: this.nextProjectId++,
            title: projectData.title,
            createdAt: new Date().toISOString(),
            images: {
                main: mainImageData,
                others: otherImagesData
            }
        };

        this.projects.unshift(newProject); // Add to beginning
        this.renderProjects();
        return newProject.id;
    }

    // Delete project
    deleteProject(projectId) {
        this.projects = this.projects.filter(p => p.id != projectId);
        this.renderProjects();
    }

    // Convert file to DataURL
    fileToDataURL(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result);
            reader.onerror = () => reject(reader.error);
            reader.readAsDataURL(file);
        });
    }

    // Render projects
    renderProjects() {
        const container = document.getElementById('portfolioItemsContainer');
        
        if (!this.projects || this.projects.length === 0) {
            container.innerHTML = `
                <div class="no-projects" style="text-align: center; padding: 40px; color: var(--text-black-700); width: 100%;">
                    <i class="fas fa-folder-open" style="font-size: 48px; margin-bottom: 20px;"></i>
                    <h3>No projects yet</h3>
                    <p>Add your first project by clicking the "+" button</p>
                </div>
            `;
            return;
        }

        container.innerHTML = this.projects.map(project => `
            <div class="portfolio-item padd-15" data-project-id="${project.id}">
                <div class="portfolio-item-inner shadow-dark">
                    <div class="portfolio-img">
                        <img src="${project.images.main || 'images/placeholder.jpg'}" 
                             alt="${project.title}" 
                             loading="lazy"
                             onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiIGZpbGw9IiNmNGY0ZjQiLz48dGV4dCB4PSIxMDAiIHk9IjEwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iIGZvbnQtZmFtaWx5PSJzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTRweCIgZmlsbD0iIzk5OTk5OSI+SW1hZ2U8L3RleHQ+PC9zdmc+'">
                        <div class="portfolio-title">${project.title}</div>
                    </div>
                </div>
            </div>
        `).join('');

        this.attachProjectEvents();
    }

    // Attach events to projects
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

    // Open lightbox
    openLightbox(projectId) {
        const project = this.projects.find(p => p.id == projectId);
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
    }

    // Update active thumbnail
    updateActiveThumb(activeThumb) {
        document.querySelectorAll('.lightbox-thumb').forEach(thumb => {
            thumb.classList.remove('active');
        });
        activeThumb.classList.add('active');
    }

    // Navigate images in lightbox
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

    // Show delete confirmation
    showDeleteConfirmation() {
        document.getElementById('confirmationModal').style.display = 'flex';
    }

    hideDeleteConfirmation() {
        document.getElementById('confirmationModal').style.display = 'none';
        this.projectToDelete = null;
    }

    // Enable/disable delete mode
    enableDeleteMode() {
        this.deleteMode = true;
        document.getElementById('deleteProjectBtn').classList.add('active');
        document.getElementById('portfolioItemsContainer').classList.add('delete-mode');
        this.showStatus('Delete mode enabled - Click on a project to delete it', 'success');
    }

    disableDeleteMode() {
        this.deleteMode = false;
        document.getElementById('deleteProjectBtn').classList.remove('active');
        document.getElementById('portfolioItemsContainer').classList.remove('delete-mode');
    }

    // Show status messages
    showStatus(message, type) {
        const oldMessages = document.querySelectorAll('.status-message');
        oldMessages.forEach(msg => msg.remove());

        const statusEl = document.createElement('div');
        statusEl.className = `status-message ${type}`;
        statusEl.textContent = message;
        document.body.appendChild(statusEl);

        setTimeout(() => statusEl.remove(), 3000);
    }

    // Show authentication modal
    showAuthModal() {
        const authModal = document.getElementById('authModal');
        const authOptions = document.querySelectorAll('.auth-option');
        const adminForm = document.getElementById('adminForm');
        const adminCodeInput = document.getElementById('adminCode');
        const authError = document.getElementById('authError');

        // Reset modal state
        authOptions.forEach(option => option.classList.remove('active'));
        adminForm.style.display = 'none';
        adminCodeInput.value = '';
        authError.style.display = 'none';

        authModal.style.display = 'flex';

        // Setup option selection
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
    }

    // Handle add project
    handleAddProject() {
        if (this.userRole !== 'admin') {
            this.pendingAction = 'add';
            this.showAuthModal();
        } else {
            document.getElementById('addProjectModal').style.display = 'flex';
        }
    }

    // Toggle delete mode
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

    // Handle form submission
    async handleFormSubmit(e) {
        e.preventDefault();
        
        const title = document.getElementById('projectTitle').value.trim();
        const mainImageFile = document.getElementById('mainImage').files[0];
        const otherImageFiles = document.getElementById('otherImages').files;

        if (!title || !mainImageFile) {
            this.showStatus('Please add a title and main image', 'error');
            return;
        }

        try {
            this.showStatus('Adding project...', 'success');
            await this.addProject({
                title: title,
                mainImage: mainImageFile,
                otherImages: Array.from(otherImageFiles)
            });
            this.closeModal();
            this.showStatus('Project added successfully', 'success');
        } catch (error) {
            console.error('Error:', error);
            this.showStatus('Error adding project', 'error');
        }
    }

    // Confirm delete
    confirmDelete() {
        if (!this.projectToDelete) return;

        this.deleteProject(parseInt(this.projectToDelete));
        this.hideDeleteConfirmation();
        this.disableDeleteMode();
        this.showStatus('Project deleted successfully', 'success');
    }

    // Close modal
    closeModal() {
        document.getElementById('addProjectModal').style.display = 'none';
        document.getElementById('projectForm').reset();
        document.getElementById('mainImagePreview').innerHTML = '';
        document.getElementById('otherImagesPreview').innerHTML = '';
    }

    // Close lightbox
    closeLightbox() {
        document.getElementById('lightbox').style.display = 'none';
        this.currentLightboxProjectId = null;
    }

    // Setup event listeners
    setupEventListeners() {
        // Add/Delete buttons
        document.getElementById('addProjectBtn').addEventListener('click', () => this.handleAddProject());
        document.getElementById('deleteProjectBtn').addEventListener('click', () => this.toggleDeleteMode());
        
        // Form submission
        document.getElementById('projectForm').addEventListener('submit', (e) => this.handleFormSubmit(e));
        
        // Modal controls
        document.querySelector('.modal .close').addEventListener('click', () => this.closeModal());
        document.getElementById('cancelProject').addEventListener('click', () => this.closeModal());
        
        // Delete confirmation
        document.getElementById('confirmDelete').addEventListener('click', () => this.confirmDelete());
        document.getElementById('cancelDelete').addEventListener('click', () => this.hideDeleteConfirmation());
        
        // Lightbox navigation
        document.getElementById('prevImage').addEventListener('click', () => this.navigateImage(-1));
        document.getElementById('nextImage').addEventListener('click', () => this.navigateImage(1));
        document.querySelector('.close-lightbox').addEventListener('click', () => this.closeLightbox());
        
        // Authentication
        document.getElementById('confirmAuth').addEventListener('click', () => this.handleAuthConfirm());
        document.getElementById('cancelAuth').addEventListener('click', () => this.handleAuthCancel());
        
        // Modal backdrop clicks
        window.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal')) {
                if (e.target.id === 'addProjectModal') {
                    this.closeModal();
                } else if (e.target.id === 'authModal') {
                    this.handleAuthCancel();
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

    // Handle authentication confirmation
    handleAuthConfirm() {
        const selectedOption = document.querySelector('.auth-option.active');
        const authError = document.getElementById('authError');
        
        if (!selectedOption) {
            authError.textContent = 'Please select an access mode';
            authError.style.display = 'block';
            return;
        }
        
        const role = selectedOption.getAttribute('data-role');
        
        if (role === 'admin') {
            const enteredCode = document.getElementById('adminCode').value;
            
            if (enteredCode === this.ADMIN_CODE) {
                this.userRole = 'admin';
                document.getElementById('authModal').style.display = 'none';
                this.showStatus('Admin mode enabled', 'success');
                
                if (this.pendingAction === 'add') {
                    document.getElementById('addProjectModal').style.display = 'flex';
                } else if (this.pendingAction === 'delete') {
                    this.enableDeleteMode();
                }
            } else {
                authError.textContent = 'Incorrect code. Please try again.';
                authError.style.display = 'block';
                return;
            }
        } else {
            this.userRole = 'visitor';
            document.getElementById('authModal').style.display = 'none';
            this.showStatus('Visitor mode enabled', 'success');
        }
        
        this.pendingAction = null;
    }

    // Handle authentication cancel
    handleAuthCancel() {
        document.getElementById('authModal').style.display = 'none';
        this.pendingAction = null;
    }

    // Setup image previews
    setupImagePreviews() {
        this.setupSingleImagePreview(
            document.getElementById('mainImage'), 
            document.getElementById('mainImagePreview')
        );
        
        this.setupMultipleImagePreview(
            document.getElementById('otherImages'), 
            document.getElementById('otherImagesPreview')
        );
    }

    // Setup single image preview
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
                
                reader.readAsDataURL(file);
            }
        });
    }

    // Setup multiple image preview
    setupMultipleImagePreview(inputElement, previewContainer) {
        inputElement.addEventListener('change', function() {
            previewContainer.innerHTML = '';
            
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
                        });
                        
                        previewContainer.appendChild(previewDiv);
                    };
                    
                    reader.readAsDataURL(file);
                });
            }
        });
    }
}

// Initialize portfolio manager
let portfolioManager;

document.addEventListener('DOMContentLoaded', () => {
    portfolioManager = new PortfolioManager();
    portfolioManager.init();
    
    // Make it globally accessible
    window.portfolioManager = portfolioManager;
});

// Global function for closing lightbox
function closeLightbox() {
    if (window.portfolioManager) {
        window.portfolioManager.closeLightbox();
    }
}

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const lightbox = document.getElementById('lightbox');
        if (lightbox && lightbox.style.display === 'flex') {
            closeLightbox();
        }
        
        const modal = document.getElementById('addProjectModal');
        if (modal && modal.style.display === 'flex') {
            portfolioManager.closeModal();
        }
        
        const authModal = document.getElementById('authModal');
        if (authModal && authModal.style.display === 'flex') {
            portfolioManager.handleAuthCancel();
        }
        
        const confirmation = document.getElementById('confirmationModal');
        if (confirmation && confirmation.style.display === 'flex') {
            portfolioManager.hideDeleteConfirmation();
        }
    }
    
    // Lightbox navigation
    if (document.getElementById('lightbox').style.display === 'flex') {
        if (e.key === 'ArrowLeft') {
            portfolioManager.navigateImage(-1);
        } else if (e.key === 'ArrowRight') {
            portfolioManager.navigateImage(1);
        }
    }
});

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
        if (sidebar) {
            sidebar.classList.remove('open');
        }
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