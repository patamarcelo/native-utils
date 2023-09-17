import { useIsFocused } from "@react-navigation/native";
import PlaceList from "../components/Places/PlaceList";
import { useEffect, useState } from "react";
import { fetchPlaces } from "../utils/database";

const AllPlaces = ({ route }) => {
	const [loadedPlaces, setLoadedPlaces] = useState([]);
	const isFocused = useIsFocused();

	useEffect(() => {
		const loadPlaces = async () => {
			const places = await fetchPlaces();
			setLoadedPlaces(places);
		};

		if (isFocused) {
			loadPlaces();
			// setLoadedPlaces((currentPlaces) => [
			// 	...currentPlaces,
			// 	route.params.place
			// ]);
		}
	}, [isFocused]);

	return <PlaceList items={loadedPlaces} />;
};

export default AllPlaces;
