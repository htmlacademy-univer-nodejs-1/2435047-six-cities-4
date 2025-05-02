export function createOffer(offerData: string) {
  const [
    title,
    description,
    publishedDate,
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
    coordinates
  ] = offerData.replace('\n', '').split('\t');

  return {
    title,
    description,
    publishedDate: new Date(publishedDate),
    city,
    previewUrl,
    offerImages: JSON.parse(offerImages),
    isPremium: JSON.parse(isPremium),
    isFavorite: JSON.parse(isFavorite),
    rating: Number(rating),
    housingType,
    roomCount: Number(roomCount),
    guestCount: Number(guestCount),
    price: Number(price),
    amenities: JSON.parse(amenities),
    author: JSON.parse(author),
    commentCount: Number(commentCount),
    coordinates: JSON.parse(coordinates),
  };
}
