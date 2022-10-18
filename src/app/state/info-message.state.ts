import { Injectable } from '@angular/core';
import { InfoMessageService } from '../service/info-message.service';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { InfoMessageDefault } from '../default/info-message.default';
import { tap } from 'rxjs/operators';
import { GetInfoMessage } from '../action/info-message.action';

@State<InfoMessageDefault>({
  name: 'message',
  defaults: {
    infoMessage: [],
  },
})
@Injectable()
export class InfoMessageState {
  constructor(private infoMessageService: InfoMessageService) {}

  @Selector() static getMessageList(state: InfoMessageDefault) {
    return state.infoMessage;
  }

  @Action(GetInfoMessage)
  getMessages({ getState, setState }: StateContext<InfoMessageDefault>) {
    return this.infoMessageService.getMessages().pipe(
      tap((results) => {
        const state = getState();
        setState({
          ...state,
          infoMessage: results,
        });
      }),
    );
  }
}
