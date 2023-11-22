document.addEventListener('DOMContentLoaded', () => {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Agrega el evento click al enlace con id informacion-link
    const informacionLink = document.getElementById('informacion-link');
    if (informacionLink) {
        informacionLink.addEventListener('click', () => {
            showContent('informacion');
        });
    }

    // Funcionalidad de tabs
    $navbarBurgers.forEach(el => {
        el.addEventListener('click', () => {
            const target = el.dataset.target;
            const $target = document.getElementById(target);
            el.classList.toggle('is-active');
            $target.classList.toggle('is-active');
        });
    });
    const tabSystem = {
        init(){
            document.querySelectorAll('.tabs-menu').forEach(tabMenu => {
                Array.from(tabMenu.children).forEach((child, ind) => {
                    child.addEventListener('click', () => {
                        tabSystem.toggle(child.dataset.target);
                    });
                    if(child.className.includes('is-active')){
                        tabSystem.toggle(child.dataset.target);
                    }
                });
            });
        },
        toggle(targetId){
            document.querySelectorAll('.tab-content').forEach(contentElement=>{
                contentElement.style.display = contentElement.id === targetId ? 'block' : 'none';
                document.querySelector(`[data-target="${contentElement.id}"]`).classList[contentElement.id === targetId ? 'add' : 'remove']('is-active');
            })
        },
    };
    tabSystem.init()

    (document.querySelectorAll('.notification .delete') || []).forEach(($delete) => {
        const $notification = $delete.parentNode;
    
        $delete.addEventListener('click', () => {
          $notification.parentNode.removeChild($notification);
        });
      });
  });

  