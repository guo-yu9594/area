import express from "express";
import UnsplashRController from "../../Controllers/Reactions/unsplashRController";

const unsplashReactions = express();
const unsplashRController = new UnsplashRController()

unsplashReactions.get("/unsplash-create-collection", unsplashRController.createCollection);
unsplashReactions.get("/unsplash-update-collection", unsplashRController.updateCollection);
unsplashReactions.get("/unsplash-delete-collection", unsplashRController.deleteCollection);
unsplashReactions.get("/unsplash-like-photo", unsplashRController.likePhoto);
unsplashReactions.get("/unsplash-unlike-photo", unsplashRController.unlikePhoto);
unsplashReactions.get("/unsplash-add-photo-to-collection", unsplashRController.addPhotoToCollection);
unsplashReactions.get("/unsplash-remove-photo-from-collection", unsplashRController.removePhotoFromCollection);
unsplashReactions.get("/unsplash-update-photo", unsplashRController.updatePhoto);
unsplashReactions.get("/unsplash-update-profile", unsplashRController.updateProfile);

export default unsplashReactions;
