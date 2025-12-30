import { Injectable, NgZone } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import { BroadcastMessageModel } from '../../../../models/BroadcastMessageModel';
import { BroadcastMessageTypes } from './message-types';
import { TestModel } from '../../../../models/SignalR/TestModel';
import { AppConst } from '../../app.const';
import { AuthApiService } from '../../auth/auth.api.service';

@Injectable({ providedIn: 'root' })
export class SignalRService {
	private hubConnection!: signalR.HubConnection;

	private readonly broadcastMethod: string = 'broadcast';

	constructor(
		private zone: NgZone,
		private apiService: AuthApiService,
	) {}

	public start(): void {
		this.hubConnection = new signalR.HubConnectionBuilder()
			.withUrl(AppConst.sinalRUrl, {
				accessTokenFactory: () => this.apiService.getToken(),
			})
			.withAutomaticReconnect()
			.build();

		this.registerHandlers();

		this.hubConnection
			.start()
			.then(() => console.warn('[SignalR] connected'))
			.catch((err) => console.error('[SignalR] error', err));
	}

	private registerHandlers(): void {
		this.hubConnection.on(this.broadcastMethod, (message: BroadcastMessageModel) => {
			this.zone.run(() => {
				this.handleMessage(message);
			});
		});
	}

	private handleMessage(message: BroadcastMessageModel): void {
		switch (message.type) {
			case BroadcastMessageTypes.TestMessage:
				console.warn('[SignalR] Received', message.type, 'with payload', message.payload as TestModel);
				break;
			default:
				console.error(message.payload);
				break;
		}
	}

	public stop(): void {
		this.hubConnection?.stop();
	}
}
