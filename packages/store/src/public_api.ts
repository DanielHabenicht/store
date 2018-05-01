export { NgxsModule } from './module';
export { Action } from './action';
export { Store } from './store';
export { State } from './state';
export { Select } from './select';
export { Actions } from './actions-stream';
export { ofAction, ofActionCompleted, ofActionDispatched, ofActionErrored } from './of-action';
export { NgxsPlugin, NgxsPluginFn, StateContext, NgxsOnInit, META_KEY } from './symbols';
export { Selector } from './selector';
export { getActionTypeFromInstance, actionMatcher } from './utils';

export * from './entity-base';
