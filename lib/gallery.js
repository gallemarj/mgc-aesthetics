import data from "../content/gallery.json";

export const galleryImages = data.photos.map((p) => p.src);
