import { GOOGLE_API } from "@env";

export const getMapPreview = (lat, long) => {
	return (imgPreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${long}&zoom=14&size=400x200&maptype=roadmap&markers=color:blue%7Clabel:S%7C${lat},${long}&key=${GOOGLE_API}`);
};

export const getAdress = async (lat, long) => {
	const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=${GOOGLE_API}`;
	const response = await fetch(url);

	if (!response.ok) {
		throw new Error("Failed to fetch Address!!!");
	}

	const data = await response.json();
	const address = data.results[0].formatted_address;
	return address;
};
