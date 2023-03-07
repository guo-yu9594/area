import express, { Response } from "express";
import MiroController from "../../Controllers/Actions/miroAController";

const app = express();
const miroController = new MiroController();

app.get("/get-board", miroController.getBoard);
app.get("/get-itemsboard", miroController.getItemsBoard);
app.get("/get-specificitemsboard", miroController.getSpecificItemsBoard);
app.get("/get-appcarditem", miroController.getAppCardItem);
app.get("/get-carditem", miroController.getCardItem);
app.get("/get-connectors", miroController.getConnectors);
app.get("/get-specificconnector", miroController.getSpecificConnector);
app.get("/get-documentitem", miroController.getDocumentItem);
app.get("/get-embeditem", miroController.getEmbedItem);
app.get("/get-imageitem", miroController.getImageItem);
app.get("/get-shapeitem", miroController.getShapeItem);
app.get("/get-stickynoteitem", miroController.getStickyNoteItem);
app.get("/get-textitem", miroController.getTextItem);




export default app;
