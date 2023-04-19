import { LitElement } from "lit";
export declare class FmtTimestamp extends LitElement {
    private _slottedNodes;
    locale: string;
    timezone: string;
    private _slottedContent;
    private _formattedData;
    private formatMode;
    willUpdate(changedProperties: Map<string, any>): void;
    connectedCallback(): void;
    private _changeFormat;
    private _handleSlotChange;
    protected render(): import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
//# sourceMappingURL=fmtTimestamp.d.ts.map