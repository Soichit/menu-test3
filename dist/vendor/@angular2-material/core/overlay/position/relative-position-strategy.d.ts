import { PositionStrategy } from './position-strategy';
import { ElementRef } from '@angular/core';
export declare class RelativePositionStrategy implements PositionStrategy {
    private _relativeTo;
    constructor(_relativeTo: ElementRef);
    apply(element: Element): Promise<void>;
}
