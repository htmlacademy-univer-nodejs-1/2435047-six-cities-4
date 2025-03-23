import { readFileSync } from "fs";
import { FileReader } from "./file-reader/file-reader.interface.js";
import { RentalCity } from "../types/RentalCityType.js";
import { RentalOffer } from "../types/RentalOfferType.js";
import { Housing } from "../types/HousingType.js";

export class TSVFileReader implements FileReader {
  private rawData = '';

  constructor(
    private readonly fileName: string
  ) {};

  public read(): void {
    this.rawData = readFileSync(this.fileName, { encoding: 'utf-8'});
  }

  public toArray(): RentalOffer[] {
    if (!this.rawData) {
      throw Error('File was not read');
    }

    return this.rawData
    .split('\n')
    .filter((row) => row.trim().length > 0)
    .map((line) => line.split('\t'))
      .map(([
        name,
        description,
        publishedData,
        city,
        previewUrl,
        offerImages,
        isPremium,
        isFavorite,
        rating,
        housingType,
        roomCount,
        guestCount,
        price,
        amenities,
        author,
        commentCount,
        coordinates,
      ]) => ({
        name,
        description,
        publishedData: new Date(publishedData),
        city: city as RentalCity,
        previewUrl,
        offerImages: JSON.parse(offerImages),
        isPremium: JSON.parse(isPremium),
        isFavorite: JSON.parse(isFavorite),
        rating: Number(rating),
        housingType: housingType as Housing,
        roomCount: Number(roomCount),
        guestCount: Number(guestCount),
        price: Number(price),
        amenities: JSON.parse(amenities),
        author: JSON.parse(author),
        commentCount: Number(commentCount),
        coordinates: JSON.parse(coordinates),
      })
    );
  }
}
