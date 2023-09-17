import * as SQL from "expo-sqlite";
import { Place } from "../models/place";

const database = SQL.openDatabase("places.dp");

export const init = () => {
	const promise = new Promise((resolve, reject) => {
		database.transaction((tx) => {
			tx.executeSql(
				`CREATE TABLE IF NOT EXISTS places (
                    id INTEGER PRIMARY KEY NOT NULL,
                    title TEXT NOT NULL,
                    imageUri TEXT NOT NULL,
                    address TEXT NOT NULL, 
                    lat REAL NOT NULL, 
                    lng REAL NOT NULL
                )`,
				[],
				() => {
					resolve();
				},
				(_, error) => {
					reject(error);
				}
			);
		});
	});

	return promise;
};

export const inserPlace = (place) => {
	const promise = new Promise((resolve, reject) => {
		database.transaction((tx) => {
			tx.executeSql(
				`
                INSERT INTO places (
                    title, imageUri, address, lat, lng
                ) VALUES (
                    ?,?,?,?,?
                )`,
				[
					place.title,
					place.imageUri,
					place.address,
					place.location.lat,
					place.location.lng
				],
				(_, result) => {
					console.log(result);
					resolve(result);
				},
				(_, error) => {
					reject(error);
				}
			);
		});
	});
};

export const fetchPlaces = () => {
	const promise = new Promise((resolve, reject) => {
		database.transaction((tx) => {
			tx.executeSql(
				`SELECT * FROM places`,
				[],
				(_, result) => {
					const places = [];
					for (const dp of result.rows._array) {
						places.push(
							new Place(
								dp.title,
								dp.imageUri,
								{ addres: dp.addres, lat: dp.lat, lng: dp.lng },
								dp.id
							)
						);
					}
					console.log(result.rows._array);
					resolve(places);
				},
				(_, error) => {
					reject(error);
				}
			);
		});
	});

	return promise;
};
