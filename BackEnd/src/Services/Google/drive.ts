import { google } from "googleapis";
import { addElementPrevious, getElementPrevious } from "../../Utils/previousElement";
import console from "console";
import stringify from "fast-json-stable-stringify"


export class Drive {
  private drive;

  constructor(oAuth2Client: any) {
    this.drive = google.drive({ version: "v3", auth: oAuth2Client });
  }

  async deleteFile(fileId: string) {
    this.drive.files.delete({ fileId }, (err, res) => {
      if (err) return console.log(`Erreur lors de la suppression : ${err}`);
      console.log("Fichier supprimé !");
    });
  }

  async checkDriveChange(idArea: number): Promise<boolean> {
    const files = await this.drive.files.list();

    const previousAction = await getElementPrevious(idArea)

    if(previousAction == null) {
      addElementPrevious(idArea, JSON.parse(JSON.stringify(files.data.files)))
    } else {
      const json1String = stringify(previousAction)
      const json2String = stringify(files.data.files)
      if (json1String === json2String) {
        console.log("les deux json sont identiques");
        return false;
      } else {
        console.log("les deux json sont différents");
        addElementPrevious(idArea, JSON.parse(JSON.stringify(files.data.files)))
        return true;
      }
    }
    return false;
  }
}
