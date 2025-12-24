export class GoogleLoginRequest {
	idToken: string;

	constructor(partial?: Partial<GoogleLoginRequest>) {
		if (partial) {
			Object.assign(this, partial);
		}
	}
}
