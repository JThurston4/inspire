import Image from "../../models/image-model.js";

let url = '//bcw-getter.herokuapp.com/?url=';
let url2 = 'http://www.splashbase.co/api/v1/images/search?query=forest'
let apiUrl = url + encodeURIComponent(url2);


let imgApi = axios.create({
	baseURL: apiUrl,
	timeout: 3000
});

let _images = []
// let _image = {}


export default class ImageService {
	getImage(draw) {
		// ^^^^^^^ How do you call this function?
		// console.log("Looking for a good pic")
		imgApi().then(res => {
			// console.log('Image Data:', res.data)
			_images = []
			for (let i = 0; i < res.data.images.length; i++) {
				let image = res.data.images[i]
				image = new Image(image)
				_images.push(image)
			}
			let _randomImage = _images[Math.floor(Math.random() * _images.length)]
			draw(_randomImage)
		})
	}
}
