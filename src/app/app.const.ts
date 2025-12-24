import { authRoutes } from './auth/auth-routes.const';

export enum AppConst {
	baseUrl = 'http://localhost:5069',
}

export class AppConsts {
	// Google Auth Routes
	public static readonly googleAuthRoute: string = '/users/auth/google';
	public static readonly googleCallbackRoute: string = 'google/callback';
	public static readonly googleAuthWindow: string = 'https://accounts.google.com/o/oauth2/v2/auth?';

	public static googleAuthSettings = {
		client_id: '', //from https://console.cloud.google.com/auth/clients
		redirect_uri: 'http://localhost:4200/auth/google/callback', //from app settings on google app page
		response_type: 'code',
		scope: 'openid email profile',
		access_type: 'offline',
		prompt: 'consent',
	};

	public static readonly anonymousRequests: string[] = [
		authRoutes.register,
		authRoutes.login,
		AppConsts.googleAuthRoute,
		'/refreshToken',
	];
}
