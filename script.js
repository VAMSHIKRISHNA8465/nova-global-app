const homeView = document.getElementById('homeView');
const servicesView = document.getElementById('servicesView');

// Ensure home is shown and services is hidden initially
homeView.style.display = 'block';
servicesView.style.display = 'none';

document.getElementById('exploreBtn').addEventListener('click', () => {
    homeView.style.display = 'none';
    servicesView.style.display = 'block';
});

document.getElementById('backBtn').addEventListener('click', () => {
    servicesView.style.display = 'none';
    homeView.style.display = 'block';
});

// Register Service Worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js').catch(err => console.log('SW registration failed: ', err));
    });
}
