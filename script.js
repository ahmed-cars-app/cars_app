// Global Functions
function toggleModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.toggle('active');
    }
}

// Close modal when clicking outside
window.onclick = function(event) {
    if (event.target.classList.contains('modal-overlay')) {
        event.target.classList.remove('active');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('Car Showroom System Initialized');

    // Handle Add Car Form Submission
    const carForm = document.getElementById('carForm');
    if (carForm) {
        carForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get Form Data
            const brand = document.getElementById('carBrand').value;
            const model = document.getElementById('carModel').value;
            const year = document.getElementById('carYear').value;
            const price = document.getElementById('carPrice').value;
            const status = document.getElementById('carStatus').value;
            
            // Status Mapping for UI
            const statusText = {
                'available': 'متاحة',
                'reserved': 'محجوزة',
                'sold': 'مباعة'
            };

            // Create New Table Row
            const tableBody = document.querySelector('.custom-table tbody');
            const newRow = document.createElement('tr');
            
            newRow.innerHTML = `
                <td>
                    <div class="car-info-cell">
                        <img src="https://via.placeholder.com/50" alt="Car">
                        <span>${brand} ${model} ${year}</span>
                    </div>
                </td>
                <td>${Number(price).toLocaleString()} ر.س</td>
                <td><span class="status-tag ${status}">${statusText[status]}</span></td>
                <td>${new Date().toLocaleDateString('en-CA')}</td>
                <td class="actions">
                    <button class="btn-icon edit" title="تعديل"><i class="fas fa-edit"></i></button>
                    <button class="btn-icon delete" title="حذف"><i class="fas fa-trash"></i></button>
                    <select class="status-select">
                        <option value="available" ${status === 'available' ? 'selected' : ''}>متاحة</option>
                        <option value="reserved" ${status === 'reserved' ? 'selected' : ''}>محجوزة</option>
                        <option value="sold" ${status === 'sold' ? 'selected' : ''}>مباعة</option>
                    </select>
                </td>
            `;

            // Append Row
            tableBody.prepend(newRow);

            // Success Message & Close Modal
            alert('تمت إضافة السيارة بنجاح!');
            carForm.reset();
            toggleModal('addCarModal');
        });
    }

    // Sidebar Active State
    const menuItems = document.querySelectorAll('.sidebar-menu li');
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            menuItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
        });
    });
});
// Sidebar Active State Toggle
const menuItems = document.querySelectorAll('.sidebar-menu li');
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        menuItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
    });
});

// Tab Switching Logic (if any)
const tabs = document.querySelectorAll('.tab');
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
    });
});

// Add to favorites toggle logic
document.querySelectorAll('.btn-outline').forEach(btn => {
    if (btn.innerHTML.includes('المفضلة')) {
        btn.addEventListener('click', function() {
            const icon = this.querySelector('i');
            if (icon.classList.contains('far')) {
                icon.classList.replace('far', 'fas');
                icon.style.color = 'red';
                this.style.borderColor = 'red';
                this.style.color = 'red';
            } else {
                icon.classList.replace('fas', 'far');
                icon.style.color = 'var(--primary-color)';
                this.style.borderColor = 'var(--primary-color)';
                this.style.color = 'var(--primary-color)';
            }
        });
    }
});


// Dashboard Functions
function toggleModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal.style.display === "block") {
        modal.style.display = "none";
    } else {
        modal.style.display = "block";
    }
}

// Close modal when clicking outside
window.onclick = function(event) {
    if (event.target.className === 'modal') {
        event.target.style.display = "none";
    }
}

});


document.addEventListener('DOMContentLoaded', () => {
    console.log('Car App Prototype Loaded');

    // Filter Buttons Toggle
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });

    // Favorite Button Toggle
    const favBtn = document.querySelector('.btn-outline i');
    if (favBtn) {
        favBtn.parentElement.addEventListener('click', function() {
            this.classList.toggle('active');
            if (favBtn.classList.contains('far')) {
                favBtn.classList.replace('far', 'fas');
                favBtn.style.color = 'red';
            } else {
                favBtn.classList.replace('fas', 'far');
                favBtn.style.color = 'var(--primary-color)';
            }
        });
    }
});

    console.log('Cars Platform Loaded');
    
    // Add active state to bottom nav
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
        });
    });

    // Simple search interaction
    const searchBtn = document.querySelector('.btn-search');
    if (searchBtn) {
        searchBtn.addEventListener('click', () => {
            alert('جاري البحث عن السيارات المناسبة...');
        });
    }

    // Favorite toggle
    const favBtn = document.querySelector('.btn-fav');
    if (favBtn) {
        favBtn.addEventListener('click', function() {
            const icon = this.querySelector('i');
            if (icon.classList.contains('fa-regular')) {
                icon.classList.replace('fa-regular', 'fa-solid');
                this.style.backgroundColor = '#ef4444';
                this.style.color = '#fff';
            } else {
                icon.classList.replace('fa-solid', 'fa-regular');
                this.style.backgroundColor = '#fee2e2';
                this.style.color = '#ef4444';
            }
        });
    }
});

    console.log('سياراتي - جاهز للعمل');
    
    // Simple interactions can be added here
    // Like filtering or handling favorite clicks
    
    const favoriteBtns = document.querySelectorAll('.favorite-btn');
    favoriteBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            btn.classList.toggle('active');
            // Logic to save to local storage
        });
    });
});
