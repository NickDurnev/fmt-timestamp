import { html, css, LitElement } from "lit";
import {
  customElement,
  property,
  state,
  queryAssignedNodes,
} from "lit/decorators.js";

import { MemoizedDateTimeFormat } from "./cache/memoizeFormatConstructor";
import { formatToShort, formatRelativeTime, formatToTime } from "./formatData";
import { localeChecking, timeZoneChecking } from "./attrsChecking";
import funcType from "./formatData/funcType";

enum MyEnum {
  formatRelativeTime,
  formatToShort,
  formatToTime,
}
const formatFuncs: funcType[] = [formatRelativeTime];

const currentYear = new Date().getFullYear();

@customElement("fmt-timestamp")
export class FmtTimestamp extends LitElement {
  @queryAssignedNodes({ flatten: true })
  private _slottedNodes!: NodeList;

  @property({
    attribute: "locale",
    reflect: true,
  })
  locale: string = "";

  @property({ attribute: "timezone" })
  timezone: string = MemoizedDateTimeFormat(undefined, {},'defaultTimeZone').resolvedOptions().timeZone;

  @state()
  private _slottedContent: string = "";
  private _formattedData: string = "";
  private formatMode: MyEnum = MyEnum.formatRelativeTime;

  willUpdate(changedProperties: Map<string, any>) {
    if (changedProperties.has("locale")) {
      const newValue = localeChecking(this.locale); // Check property value
      this.locale = newValue; // Set modified value
    }
    if (changedProperties.has("timezone")) {
      const newValue = timeZoneChecking(this.timezone); // Check property value
      this.timezone = newValue; // Set modified value
    }
    this._formattedData = formatFuncs[this.formatMode](
      this._slottedContent,
      this.locale,
      this.timezone,
      currentYear
    );
    if (this._slottedNodes[0]) {
      this._slottedNodes[0].textContent = `${
        this._formattedData ?? this._slottedContent
      }`;
    }
    !this._formattedData
      ? this.classList.add("invalid")
      : this.classList.remove("invalid");
  }

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener("click", this._changeFormat);
  }

  private _changeFormat(e: Event): void {
    this.formatMode = (this.formatMode + 1) % (Object.keys(MyEnum).length - 3);
    if (formatFuncs.length < 3) {
      this.formatMode === 2
        ? formatFuncs.push(formatToShort)
        : formatFuncs.push(formatToTime);
    }
    this.requestUpdate();
  }

  private _handleSlotChange(): void {
    this._slottedContent = this._slottedNodes[0]?.textContent?.trim();
  }

  protected render() {
    return html`
      <slot
        title=${this._slottedContent}
        @slotchange="${this._handleSlotChange}"
      ></slot>
    `;
  }

  static styles = css`
    :host {
      cursor: pointer;
    }
    :host(.invalid) {
      text-decoration-line: underline;
      text-decoration-style: wavy;
      text-decoration-color: #d73774;
    }
  `;
}
