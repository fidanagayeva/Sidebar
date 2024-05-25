document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.getElementById('sidebar');
    const openSidebarBtn = document.getElementById('openSidebarBtn');
    const closeSidebarBtn = document.getElementById('closeSidebarBtn');
    const mainContent = document.getElementById('main');
  
    openSidebarBtn.addEventListener('click', function() {
        sidebar.style.width = '200px';
        document.addEventListener('click', closeNavOnClickOutside);
    });
  
    closeSidebarBtn.addEventListener('click', function() {
        closeNav();
    });
  
    function closeNav() {
        sidebar.style.width = '0';
        document.removeEventListener('click', closeNavOnClickOutside);
    }
  
    function closeNavOnClickOutside(event) {
        if (!sidebar.contains(event.target) && !openSidebarBtn.contains(event.target)) {
            closeNav();
        }
    }
  });