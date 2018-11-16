import ImageService from "./image-service.js";

//Your ImageService is a global class what can you do here to instantiate it?


let _imageService = new ImageService

function draw(image) {
  document.getElementById("bg").style.backgroundImage = `url(${image.large_url})`
}

export default class ImageController {
  constructor() {
    _imageService.getImage(draw)
  }

}

