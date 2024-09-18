document.addEventListener('DOMContentLoaded', function () {
  // Récupérer tous les sliders
  const sliders = document.querySelectorAll('.slider');
  
  // Ajouter un événement pour chaque slider
  sliders.forEach(slider => {
      slider.addEventListener('input', function () {
          const valueId = this.id + 'Value'; // ex: pitchValue, loudnessValue
          const valueElement = document.getElementById(valueId);
          valueElement.textContent = this.value;
      });
  });
});
