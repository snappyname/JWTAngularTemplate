import { authRoutes } from './auth/auth-routes.const';

export enum AppConst {
	baseUrl = 'http://localhost:5069',
}

export class AppConsts {
	// Google Auth Routes
	public static readonly googleAuthRoute: string = '/auth/google';
	public static readonly googleCallbackRoute: string = 'google/callback';
	public static readonly googleAuthWindow: string = 'https://accounts.google.com/o/oauth2/v2/auth?';

	//Github auth routes
	public static readonly githubAuthRoute: string = '/auth/github';
	public static readonly githubCallbackRoute: string = 'github/callback';
	public static readonly githubAuthWindow: string = 'https://github.com/login/oauth/authorize?';

	public static readonly googleAuthSettings = {
		client_id: '', //from https://console.cloud.google.com/auth/clients
		redirect_uri: 'http://localhost:4200/auth/google/callback', //from app settings on google app page
		response_type: 'code',
		scope: 'openid email profile',
		access_type: 'offline',
		prompt: 'consent',
	};

	public static readonly githubAuthSettings = {
		client_id: '', //from https://github.com/settings/developers
		redirect_uri: 'http://localhost:4200/auth/github/callback',
		scope: 'user:email',
	};

	public static readonly anonymousRequests: string[] = [
		authRoutes.register,
		authRoutes.login,
		AppConsts.googleAuthRoute,
		AppConsts.githubAuthRoute,
		'/refreshToken',
	];
}
