import { RequestHandler } from '../core/api/request-handler';
import { Observable } from 'rxjs';
import { LoginModel } from '../../../models/LoginModel';
import { TokensModel } from '../../../models/TokensModel';
import { Injectable } from '@angular/core';
import { RefreshTokenModel } from '../../../models/RefreshTokenModel';
import { GoogleLoginRequest } from '../../../models/GoogleLoginRequest';

@Injectable({ providedIn: 'root' })
export class AuthApiService extends RequestHandler {
	public setTokens(jwt: string, refreshToken: string) {
		super.setToken(jwt, refreshToken);
	}

	public override logout() {
		super.logout();
	}

	public getToken(): string {
		return super.getJWT();
	}

	public getTokes(email: string, password: string): Observable<TokensModel> {
		return this.httpPost<TokensModel, LoginModel>(
			'/users/login',
			new LoginModel({ email: email, password: password }),
		);
	}

	public register(email: string, password: string): Observable<TokensModel> {
		return this.httpPost<TokensModel, LoginModel>(
			'/users/register',
			new LoginModel({ email: email, password: password }),
		);
	}

	public refreshToken(): Observable<TokensModel> {
		return this.httpPost<TokensModel, RefreshTokenModel>(
			'/users/refreshToken',
			new RefreshTokenModel({ refreshToken: this.getRefreshToken() }),
		);
	}

	public loginWithGoogle(token: string): Observable<TokensModel> {
		return this.httpPost<TokensModel, GoogleLoginRequest>(
			'/users/auth/google',
			new GoogleLoginRequest({ idToken: token }),
		);
	}
}
