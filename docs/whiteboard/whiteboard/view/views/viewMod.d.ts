import { WhiteboardView } from './base';
import { WhiteboardServiceBase } from '../services/base';
import { WhiteboardStore } from '../entities/store';
import { ProtoGraphic, ViewTool, ScrollMode } from '../entities/viewEntity';
export declare class WhiteboardViewMod extends WhiteboardView {
    private parentDom;
    private whiteboardID;
    private _enable;
    private _activited;
    private viewInfo;
    private whiteboardStore;
    private serviceHandle;
    private viewEvent;
    private whiteboardNode;
    private svgNode;
    private graphicsBoxConNode;
    private graphicsConNode;
    private graphicsBgContainerNode;
    private protoGraphic;
    private graphicList;
    private mousePointList;
    private flowData;
    constructor(whiteboardID: string, whiteboardStore: WhiteboardStore, serviceHandle: WhiteboardServiceBase);
    private scrollHandle;
    private mouseleaveHandle;
    private mousemoveHandle;
    private mousedownHandle;
    private eraserMousemoveHandle;
    private checkMultipoint;
    private bindEvents;
    destroy(): void;
    private updateBindEvents;
    init(parent: string): void;
    private calculateHandle;
    private isScrollMode;
    private hasFileInfo;
    private createModule;
    setActivited(val: boolean): void;
    isActivited(): boolean;
    private activited;
    private initDraw;
    private updateMousePointList;
    private updateFlowData;
    private updateProtoGraphic;
    private updateViewInfo;
    private getMouseChangedPoint;
    private getMouseStartPoint;
    private updateGraphicsData;
    private moveGraphics;
    private updateBoxBorderOnSelector;
    private getMouseCoverGraphics;
    private addTextareaDom;
    private addPreDom;
    private addTextareaConDom;
    private bindTextareaInputEvent;
    private bindTextareaFocusEvent;
    private bindTextareaBlurEvents;
    private addTextareaGraphic;
    private updateTextareaGraphic;
    private foucsTextarea;
    private moveByOffset;
    private drawGraphicsLine;
    private drawGraphicsRect;
    private drawGraphicsPath;
    private drawGraphicsEllipse;
    private drawGraphicsHandle;
    private updateGraphicsBox;
    private getBoxByGraphicId;
    private getInstanceByGraphicId;
    private getInstanceSelectorByGraphicId;
    private getBoxSelectorByGraphicId;
    private updateGraphicListOnMoving;
    private transLocation;
    private getScrollData;
    private getOffsetData;
    private getDataFromGraphicList;
    private setDataToGraphicList;
    private removeGraphic;
    private updatePointerEvents;
    private getBoxInfoByGraphicInfo;
    private drawSvgMouseupHandle;
    private selectMouseupHandle;
    private textMouseupHandle;
    private eraserMouseupPcHandle;
    private eraserMouseupMbHandle;
    private removeElement;
    private getElementChild;
    private removeElementChild;
    private removeGraphicList;
    private clearSelected;
    scrollToHandle(horizontalPercent: number, verticalPercent: number, notify: boolean): void;
    private emitScroll;
    private jumpPage;
    private handlePageChangeListener;
    private backAddHandle;
    private backRemoveHandle;
    private backMoveHandle;
    private backUpdateHandle;
    private undoAndRedoHandle;
    clearLocalHandle(): void;
    updateRemoteToLocal(graphicList: ProtoGraphic[], delGraphicIdList?: string[]): void;
    private updateToRemote;
    enable(enable: boolean): boolean;
    isEnable(): boolean;
    clear(): void;
    scroll(horizontalPercent: number, verticalPercent: number): boolean;
    getCurrentScrollPercent(): {
        horizontalPercent: number;
        verticalPercent: number;
    };
    undo(): void;
    redo(): void;
    getAspectRatio(): string;
    getFileInfo(): {
        fileID: string;
        fileName: string;
        authKey: string;
        fileType: number;
    } | undefined;
    getID(): string;
    getName(): string;
    getCreateTime(): number;
    getRoomID(): string;
    getPageCount(): number;
    setBackgroundColor(color: string): boolean;
    getBackgroundColor(): string;
    setToolType(type: ViewTool): boolean;
    getToolType(): ViewTool;
    setBrushColor(color: string): boolean;
    getBrushColor(): string;
    setBrushSize(thin: number): boolean;
    getBrushSize(): number;
    setTextSize(thin: number): boolean;
    getTextSize(): number;
    getPage(): number;
    setScrollMode(mode: ScrollMode): void;
    previousPage(): void;
    nextPage(): void;
}
