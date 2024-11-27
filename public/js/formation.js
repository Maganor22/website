console.log("formation.js");
document.querySelectorAll('.toggle-formation').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        const formationId = this.dataset.formationId;
        const actif = this.checked ? 1 : 0;
        const icon = this.nextElementSibling.querySelector('.toggle-icon');

        // Mettre à jour l'icône
        if (this.checked) {
            icon.classList.remove('fa-eye-slash');
            icon.classList.add('fa-eye');
        } else {
            icon.classList.remove('fa-eye');
            icon.classList.add('fa-eye-slash');
        }

        fetch('/formation/toggle-visibility', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                formation_id: formationId,
                actif: actif
            })
        })
        .then(response => response.json())
        .then(data => {
            if (!data.success) {
                // En cas d'erreur, rétablir l'état précédent
                this.checked = !this.checked;
                if (this.checked) {
                    icon.classList.remove('fa-eye-slash');
                    icon.classList.add('fa-eye');
                } else {
                    icon.classList.remove('fa-eye');
                    icon.classList.add('fa-eye-slash');
                }
                alert('Erreur lors de la mise à jour');
            }
        })
        .catch(error => {
            console.error('Erreur:', error);
            // En cas d'erreur, rétablir l'état précédent
            this.checked = !this.checked;
            if (this.checked) {
                icon.classList.remove('fa-eye-slash');
                icon.classList.add('fa-eye');
            } else {
                icon.classList.remove('fa-eye');
                icon.classList.add('fa-eye-slash');
            }
            alert('Erreur lors de la mise à jour');
        });
    });
});