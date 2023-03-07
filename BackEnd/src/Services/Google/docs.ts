import { google } from "googleapis";
import {
  addElementPrevious,
  getElementPrevious,
} from "../../Utils/previousElement";
import stringify from "fast-json-stable-stringify";

export class Docs {
  private docs;

  constructor(oAuth2Client: any) {
    this.docs = google.docs({ version: "v1", auth: oAuth2Client });
  }

  async checkDocsChange(idArea: number, idDocument: string) {

    const response = await this.docs.documents.get({
      spreadsheetId: idDocument
    });

    const previousAction = await getElementPrevious(idArea);

    if (previousAction == null) {
      addElementPrevious(
        idArea,
        JSON.parse(JSON.stringify(response.data))
      );
    } else {
      const json1String = stringify(previousAction);
      const json2String = stringify(response.data);
      if (json1String === json2String) {
        return false;
      } else {
        addElementPrevious(
          idArea,
          JSON.parse(JSON.stringify(response.data))
        );
        return true;
      }
    }
    return false;
  }
}
