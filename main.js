const panoramaImage = new PANOLENS.ImagePanorama("images/pan.png");
const imageContainer = document.querySelector(".image-container");

const viewer = new PANOLENS.Viewer({
  container: imageContainer,
  controlBar: false,
});

viewer.add(panoramaImage);
