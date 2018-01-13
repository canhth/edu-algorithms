import test from "ava";
import solution from "./index.js";

const network = {
	'Min'     : ['William', 'Jayden', 'Omar'],
	'William' : ['Min', 'Noam'],
	'Jayden'  : ['Min', 'Amelia', 'Ren', 'Noam'],
	'Ren'     : ['Jayden', 'Omar'],
	'Amelia'  : ['Jayden', 'Adam', 'Miguel'],
	'Adam'    : ['Amelia', 'Miguel', 'Sofia', 'Lucas'],
	'Miguel'  : ['Amelia', 'Adam', 'Liam', 'Nathan'],
	'Noam'    : ['Nathan', 'Jayden', 'William'],
	'Omar'    : ['Ren', 'Min', 'Scott']
};

[
	["Min", "William", [["Min", "William"]]],
	["Min", "Noam", [["Min", "William", "Noam"], ["Min", "Jayden", "Noam"]]],
	["Min", "Amelia", [["Min", "Jayden", "Amelia"]]],
	["Min", "Min", [["Min"]]],
	["Min", "Miguel", [["Min", "Jayden", "Amelia", "Miguel"]]],
	["Noam", "Lucas", [["Noam", "Jayden", "Amelia", "Adam", "Lucas"]]],
	["Noam", "Omar", [
		["Noam","Jayden","Min","Omar"],
		["Noam","William","Min","Omar"],
		["Noam","Jayden","Ren","Omar"]
	]],
	["Lucas", "Omar", []],
	["Lucas", "Omar", []],
	["Nathan", "Noam", []],
	["Duck", "Chicken", []],
	["Duck", "Noam", []],
	["Noam", "Duck", []]
].forEach(([a, b, ps]) => test(`Shortest path from "${ a }" to "${ b }" must be valid`, (t) => {

	return t.deepEqual(solution(network, a, b), ps);

}));
