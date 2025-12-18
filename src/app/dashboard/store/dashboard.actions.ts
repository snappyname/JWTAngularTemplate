import { UserModel } from '../../../../models/UserModel';

export class LoadUserDetails {
	static readonly type = '[Dashboard] LoadUserDetails';
}

export class SetUserDetails {
	static readonly type = '[Dashboard] SetUserDetails';
	constructor(public user: UserModel) {}
}
