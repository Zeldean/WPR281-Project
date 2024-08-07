/**
 * Adjusts the height of an iframe to match the height of its content.
 * @param {HTMLIFrameElement} iframe The iframe element to adjust.
 */
function adjustIframeHeight(iframe) {
    if (iframe.contentWindow && iframe.contentWindow.document.body) {
      iframe.style.height = `${iframe.contentWindow.document.body.scrollHeight}px`;
    };
};
  
document.addEventListener('DOMContentLoaded', () => {
    const iframes = document.querySelectorAll('.iframeAuto');
  
    iframes.forEach((frame) => {
        const iframeId = `${frame.getAttribute('data-id')}-iframe`;
        const iframeElement = document.getElementById(iframeId);
  
        if (iframeElement) {
  
            // Adjust height on iframe load
            iframeElement.addEventListener('load', () => {
                adjustIframeHeight(iframeElement);
            });
  
            // Adjust height immediately if iframe content is already loaded
            adjustIframeHeight(iframeElement);
        };
    });
});
