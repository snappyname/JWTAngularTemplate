import { Component, signal } from '@angular/core';
import { Store } from '@ngxs/store';
import { LoginAction } from '../../store/auth.actions';
import { Navigate } from '@ngxs/router-plugin';
import { appRoutes } from '../../../app-routes.const';
import { authRoutes } from '../../auth-routes.const';
import { take } from 'rxjs';

@Component({
	selector: 'app-login',
	imports: [],
	templateUrl: './login.html',
	styleUrl: './login.css',
})
export class Login {
	email = signal('');

	password = signal('');

	constructor(public store: Store) {}

	login() {
		this.store
			.dispatch(new LoginAction(this.email(), this.password()))
			.pipe(take(1))
			.subscribe(() => this.store.dispatch(new Navigate([`/${appRoutes.user}`])));
	}

	protected navigateToRegister() {
		this.store.dispatch(new Navigate([`/${appRoutes.auth}/${authRoutes.register}`]));
	}
}
