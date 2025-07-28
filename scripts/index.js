var galleryImageIndex = 0;
const numImages = 0;

function goToGallery() {
    window.location.href = '/gallery.html';
    galleryImageIndex = 0;
}

function goToDocumentation() {
    window.location.href = 'https://github.com/calimiro-ai';
}

function goToNextImage() {
    galleryImageIndex++;

    if(galleryImageIndex > numImages) {
        galleryImageIndex = 0;
    }

    document.getElementById("gallery-image-displayed").src = "images/gallery/gallery_" + galleryImageIndex + ".jpg";
}