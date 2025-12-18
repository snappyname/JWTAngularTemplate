import { authRoutes } from './auth/auth-routes.const';

export enum AppConst {
	baseUrl = 'http://localhost:5069',
}

export class AppConsts {
	public static readonly anonymousRequests: string[] = [authRoutes.register, authRoutes.login, '/refreshToken'];
}
