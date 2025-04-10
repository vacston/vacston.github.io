class BeatsLoader {
  constructor() {
    this.tracks = [
      '13971241', '22261835', '22240901', '22229896',
      '22012858', '20267693', '18868266', '22259975'
    ];
    this.loading = document.getElementById('loading');
    this.beatsGrid = document.getElementById('beats-grid');
    this.loadedTracks = 0;
  }

  init() {
    this.beatsGrid.innerHTML = ''; 
    this.createPlaceholders();
    this.observeTracks();
  }

  createPlaceholders() {
    this.tracks.forEach((id, index) => {
      const placeholder = document.createElement('div');
      placeholder.className = 'beat-placeholder bg-neutral-800/50 rounded-lg h-[140px] relative';
      placeholder.setAttribute('data-track-id', id);
      this.beatsGrid.appendChild(placeholder);
    });
  }

  loadTrack(placeholder) {
    const id = placeholder.getAttribute('data-track-id');
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.beatstars.com/embed/track/?id=${id}`;
    iframe.width = '100%';
    iframe.height = '140';
    iframe.style.border = 'none';
    iframe.allow = 'autoplay';
    iframe.loading = 'lazy';
    
    iframe.onload = () => {
      this.loadedTracks++;
      placeholder.classList.remove('bg-neutral-800/50');
    };

    placeholder.appendChild(iframe);
  }

  observeTracks() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.loadTrack(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '50px'
    });

    this.beatsGrid.querySelectorAll('.beat-placeholder').forEach(placeholder => {
      observer.observe(placeholder);
    });

    this.loading.classList.add('hidden');
    this.beatsGrid.classList.remove('hidden');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const loader = new BeatsLoader();
  loader.init();
});