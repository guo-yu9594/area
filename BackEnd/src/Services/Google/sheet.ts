import { google } from "googleapis";
import {
  addElementPrevious,
  getElementPrevious,
} from "../../Utils/previousElement";
import stringify from "fast-json-stable-stringify";

export class Sheet {
  private sheets;

  constructor(oAuth2Client: any) {
    this.sheets = google.sheets({ version: "v4", auth: oAuth2Client });
  }

  async checkSheetChange(idArea: number, idSheet: string) {

    const res = await this.sheets.spreadsheets.get({
      spreadsheetId: idSheet
    });

    const sheet = res.data.sheets[0];
    const range = `${sheet.properties.title}!A1:Z${sheet.properties.gridProperties.rowCount}`;

    const response = await this.sheets.spreadsheets.values.get({
      spreadsheetId: idSheet,
      range: range
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
