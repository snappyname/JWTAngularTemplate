export class TestModel {
    orderId: number;

	constructor(partial?: Partial<TestModel>) {
		if (partial) {
			Object.assign(this, partial);
		}
	}
}
