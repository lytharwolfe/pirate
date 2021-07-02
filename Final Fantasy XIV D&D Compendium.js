/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.

	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*  -INFORMATION-
	Subject:    3rd-party compendium
	Effect:     This script adds some player options from the book "Final Fantasy XIV D&D Compendium"
				This is based on the current build - Shadowbringers.
				All content is inspired by the Final Fantasy XIV game by Square Enix
				Content made for 5e by Sorensen Asgard on the Gilgamesh Server

	Content:	9 Races
				13 Classes
				4 subclasses
				15 Spells
				
	Code by:	Lythar
	Date:		2021-07-02 (sheet v13.0.0.beta29)
*/

var iFileName = "Final Fantasy XIV D&D Compendium.js";
RequiredSheetVersion(13);

// Define the source
SourceList.FFXIV = {
	name: "Final Fantasy XIV D&D Compendium",
	abbreviation: "FFXIV",
	group: "Third Party Compendium",
	url: "https://drive.google.com/open?id=1fqmOE-s5AYOCfi_J4URKAAnfK79os5MM",
	date: "2021/07/02"
};

// Au'Ra
RaceList["Xaela Au'Ra"] = {
	regExpSearch : /Xaela Au'Ra/i,
	name : "Xaela Au'Ra",
	source : [["FFXIV", 5]],
	plural : "Au'Ra",
	sortname : "Au'ra, Xaela",
	size : 3,
	speed : {
			walk : { spd : 30, enc : 20 }
	},
	skills : ["Perception", "Survival"],
	languageProfs : ["Common", "Auri"],
	age : " live about as long as any of the other races of Eorzea, reaching physical maturity around the age of 16, and living to be around 80 years old.",
	height : " males range from 6'6\" to 7', while females rarely grow higher than 5' in height.",
	heightMetric : " males range from 1,9 to 2,1 metres tall, while females rarely grow higher than 1,52 meters tall.",
	scorestxt : "+2 Wisdom, +1 Strength",
	scores : [1, 0, 0, 0, 2, 0],	
	trait : "Savage Attacks. When I score a critical hit with a melee weapon attack, I can roll one of the weapon’s damage dice one additional time and add it to the extra damage of the critical hit.",
};

RaceList["Raen, Au'Ra"] = {
	regExpSearch : /Raen Au'Ra/i,
	name : "Raen Au'Ra",
	source : [["FFXIV", 5]],
	plural : "Au'Ra",
	sortname : "Au'ra, Raen",
	size : 3,
	speed : {
			walk : { spd : 30, enc : 20 }
	},
	skills : ["Perception", "Persuasion"],
	languageProfs : ["Common", "Auri"],
	savetxt : {
		adv_vs : ["charmed"]
	},
	age : " live about as long as any of the other races of Eorzea, reaching physical maturity around the age of 16, and living to be around 80 years old.",
	height : " males range from 6'6\" to 7', while females rarely grow higher than 5' in height.",
	heightMetric : " males range from 1,9 to 2,1 metres tall, while females rarely grow higher than 1,52 meters tall.",
	scorestxt : "+2 Wisdom, +1 Charisma",
	scores : [0, 0, 0, 0, 2, 1],	
};
