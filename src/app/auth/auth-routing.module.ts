import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Register } from './components/register/register';
import { authRoutes } from './auth-routes.const';

const routes: Routes = [
	{
		path: `${authRoutes.login}`,
		component: Login,
	},
	{
		path: `${authRoutes.register}`,
		component: Register,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class AuthRoutingModule {}
