import { GOOGLE_API } from "@env";

export const getMapPreview = (lat, long) => {
	return (imgPreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${long}&zoom=14&size=400x200&maptype=roadmap&markers=color:blue%7Clabel:S%7C${lat},${long}&key=${GOOGLE_API}`);
};
