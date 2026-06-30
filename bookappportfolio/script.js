// Simple tab switching logic
const navBtns = document.querySelectorAll('.nav-btn');

navBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        navBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    });
});

// Mock Interaction for Update Button
document.querySelector('.btn-update').addEventListener('click', () => {
    alert("Opening Progress Modal...");
});