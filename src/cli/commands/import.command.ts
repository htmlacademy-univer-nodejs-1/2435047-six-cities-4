import { getErrorMessage } from '../../shared/helpers/common.js';
import { createOffer } from '../../shared/helpers/offer.js';
import { TSVFileReader } from '../../shared/libs/file-reader/tsv-file-reader.js';
import { Command } from './command.interface.js';

export class ImportCommand implements Command {
  public getName(): string {
    return '--import';
  }

  private onImportedLine(line: string) {
    const offer = createOffer(line);
    console.info(offer);
  }

  private onCompleteImport(count: number) {
    console.info(`${count} rows imported.`);
  }

  public async execute(...parameters: string[]): Promise<void> {
    const [fileName] = parameters;
    const fileReader = new TSVFileReader(fileName.trim());

    fileReader.on('line', this.onImportedLine);
    fileReader.on('end', this.onCompleteImport);
    fileReader.on('error', (err) => {
      console.error(`Ошибка при чтении файла ${fileName}:`, err);
      process.exit(1);
    });

    try {
      await fileReader.read();
    } catch (err) {
      console.error(`Can't import data from file: ${fileName}`);
      console.error(getErrorMessage(err));
    }
  }
}
