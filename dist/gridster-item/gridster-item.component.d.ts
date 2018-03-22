import { OnInit, ElementRef, EventEmitter, SimpleChanges, OnChanges, OnDestroy, AfterViewInit, NgZone } from '@angular/core';
import { GridsterService } from '../gridster.service';
import { GridListItem } from '../gridList/GridListItem';
export declare class GridsterItemComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {
    private zone;
    x: number;
    xChange: EventEmitter<number>;
    y: number;
    yChange: EventEmitter<number>;
    xSm: number;
    xSmChange: EventEmitter<number>;
    ySm: number;
    ySmChange: EventEmitter<number>;
    xMd: number;
    xMdChange: EventEmitter<number>;
    yMd: number;
    yMdChange: EventEmitter<number>;
    xLg: number;
    xLgChange: EventEmitter<number>;
    yLg: number;
    yLgChange: EventEmitter<number>;
    xXl: number;
    xXlChange: EventEmitter<number>;
    yXl: number;
    yXlChange: EventEmitter<number>;
    xHD: number;
    xHDChange: EventEmitter<number>;
    yHD: number;
    yHDChange: EventEmitter<number>;
    w: number;
    wChange: EventEmitter<number>;
    h: number;
    hChange: EventEmitter<number>;
    change: EventEmitter<any>;
    start: EventEmitter<any>;
    end: EventEmitter<any>;
    dragAndDrop: boolean;
    resizable: boolean;
    options: any;
    autoSize: boolean;
    isDragging: boolean;
    isResizing: boolean;
    $element: HTMLElement;
    elementRef: ElementRef;
    gridster: GridsterService;
    item: GridListItem;
    positionX: number;
    positionY: number;
    private _positionX;
    private _positionY;
    private defaultOptions;
    private subscriptions;
    private dragSubscriptions;
    private resizeSubscriptions;
    constructor(zone: NgZone, elementRef: ElementRef, gridster: GridsterService);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    updateElemenetPosition(): void;
    setPositionsOnItem(): void;
    enableResizable(): void;
    disableResizable(): void;
    enableDragDrop(): void;
    disableDraggable(): void;
    private getDraggableOptions();
    private getResizableOptions();
    private hasResizableHandle(direction);
    private setPositionsForGrid(options);
    private findPosition(options);
    private createResizeStartObject(direction);
    private onEnd(actionType);
    private onStart(actionType);
    private preventAnimation();
    private getResizeDirection(handler);
    private resizeElement(config);
    private resizeToNorth(config);
    private resizeToWest(config);
    private resizeToEast(config);
    private resizeToSouth(config);
    private setMinHeight(direction, config);
    private setMinWidth(direction, config);
    private setMaxHeight(direction, config);
    private setMaxWidth(direction, config);
}
