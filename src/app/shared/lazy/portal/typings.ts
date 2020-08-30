export enum PortalDestroyReason {
  CLICK,
  ESCAPE,
  SCROLL,
}

export interface PortalDestroyEvent {
  status: 0 | 1;
  reason?: PortalDestroyReason;
}
