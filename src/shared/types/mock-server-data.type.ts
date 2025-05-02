import { Amenity } from "./AmenityType.js";
import { Coordinates } from "./CoordinatesType.js";
import { Housing } from "./HousingType.js";
import { RentalCity } from "./RentalCityType.js";
import { User } from "./UserType.js";

export type MockServerData = {
  titles: string[];
  descriptions: string[];
  dates: Date[];
  cities: RentalCity[];
  images: string[];
  galleries: Array<string[]>;
  isPremium: boolean[];
  isFavorite: boolean[];
  ratings: number[];
  housingTypes: Housing[];
  roomCounts: number[];
  guestCounts: number[];
  costs: number[];
  amenities: Array<Amenity[]>;
  authors: User[];
  commentCounts: number[];
  coordinates: Coordinates[];
};
