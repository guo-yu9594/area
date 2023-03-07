import express from "express";
import MiroRController from "../../Controllers/Reactions/miroRController";

const miroReactions = express();
const miroRController = new MiroRController();

miroReactions.get("/miro-createBoard", miroRController.createBoardControl);
miroReactions.get("/miro-deleteItem", miroRController.deleteItemControl);
miroReactions.get("/miro-createAppCardItem", miroRController.createAppCardItemControl);
miroReactions.get("/miro-deleteAppCardItem", miroRController.deleteAppCardItemControl);
miroReactions.get("/miro-createCardItem", miroRController.createCardItemControl);
miroReactions.get("/miro-deleteCardItem", miroRController.deleteCardItemControl);
miroReactions.get("/miro-deleteConnector", miroRController.deleteConnectorControl);
miroReactions.get("/miro-createShapeItem", miroRController.createShapeItemControl)
miroReactions.get("/miro-deleteDocumentItem", miroRController.deleteDocumentItemControl);
miroReactions.get("/miro-deleteEmbedItem", miroRController.deleteEmbedItemControl);
miroReactions.get("/miro-deleteImageItem", miroRController.deleteDeleteImageItemControl);
miroReactions.get("/miro-deleteShapeItem", miroRController.deleteShapeItemControl);
miroReactions.get("/miro-createStickyNoteItem", miroRController.createStickyNoteItemControl);
miroReactions.get("/miro-deleteStickyNoteItem", miroRController.deleteStickyNoteItemControl);
miroReactions.get("/miro-createTextItem", miroRController.createTextItemControl);
miroReactions.get("/miro-deleteTextItem", miroRController.deleteTextItemControl);


export default miroReactions;
