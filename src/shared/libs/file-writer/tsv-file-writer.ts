import { createWriteStream, WriteStream } from 'node:fs';
import { FileWriter } from './file-writer.interface.js';

export class TSVFileWriter implements FileWriter {
  static close() {
    throw new Error('Method not implemented.');
  }
  private stream: WriteStream;

  constructor(filename: string) {
    this.stream = createWriteStream(filename, {
      flags: 'w',
      encoding: 'utf-8',
      autoClose: true,
    });
  }

  public close(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.stream.once('error', reject);
      this.stream.end(resolve);
    });
  }

  public async write(row: string) {
    const writeSuccess = this.stream.write(`${row}\n`);
    if (!writeSuccess) {
      return new Promise((resolve) => {
        this.stream.once('drain', () => resolve(true));
      });
    }

    return Promise.resolve();
  }
}
