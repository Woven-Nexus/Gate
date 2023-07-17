import { faker } from '@faker-js/faker';
import { range } from '@roenlie/mimic-core/array';

import { TreeItem } from '../components/item-tree-element.js';


export const createTreeItem = (iterations: number): TreeItem<'id', 'children'> => {
	return {
		id:         faker.database.mongodbObjectId(),
		children:   range(iterations).map(() => createTreeItem(iterations - 1)),
		extraData1: faker.airline.aircraftType(),
		extraData2: faker.animal.type(),
	};
};
