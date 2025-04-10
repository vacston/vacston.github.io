document.addEventListener('DOMContentLoaded', function() {
    let bmcLoaded = false;
    
    const loadBMC = () => {
        if (bmcLoaded) return;
        bmcLoaded = true;
        
        const bmcScript = document.createElement('script');
        bmcScript.src = 'https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js';
        bmcScript.setAttribute('data-name', 'BMC-Widget');
        bmcScript.setAttribute('data-cfasync', 'false');
        bmcScript.setAttribute('data-id', 'vacston');
        bmcScript.setAttribute('data-description', 'Support me on Buy me a coffee!');
        bmcScript.setAttribute('data-message', 'Like the beats? Consider supporting me.');
        bmcScript.setAttribute('data-color', '#4338CA');
        bmcScript.setAttribute('data-position', 'Right');
        bmcScript.setAttribute('data-x_margin', '18');
        bmcScript.setAttribute('data-y_margin', '40');
        bmcScript.setAttribute('async', 'true');
        bmcScript.setAttribute('defer', 'true');
        document.body.appendChild(bmcScript);
    };

    // Load BMC widget only when user scrolls
    window.addEventListener('scroll', () => {
        requestIdleCallback(() => loadBMC());
    }, { once: true });
});