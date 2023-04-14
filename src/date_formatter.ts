import { html, css, LitElement } from "lit";
import {
  customElement,
  property,
  state,
  queryAssignedNodes,
} from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";

import { formatToShort, formatRelativeTime, formatToTime } from "./formatData";
import { localeChecking, timeZoneChecking } from "./attrsChecking";
import funcType from "./formatData/funcType";

const formatFuncs: funcType[] = [
  formatRelativeTime,
  formatToShort,
  formatToTime,
];

enum MyEnum {
  formatRelativeTime,
  formatToShort,
  formatToTime,
}

@customElement("date-formatter")
export class DateFormatter extends LitElement {
  @queryAssignedNodes()
  private _slottedNodes!: NodeList;

  @property({
    attribute: "locale",
    reflect: true,
  })
  locale: string = "";

  @property({ attribute: "timezone" })
  timezone: string = Intl.DateTimeFormat().resolvedOptions().timeZone;

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
      this.timezone
    );
  }

  private _changeFormat(e: Event): void {
    this.formatMode =
      (this.formatMode + 1) % (Object.keys(MyEnum).length - 3);
    this.requestUpdate();
  }

  private _handleSlotChange(): void {
    this._slottedContent = this._slottedNodes[0]?.textContent?.trim();
  }

  protected render() {
    const textClasses = {
      invalid: !this._formattedData,
    };
    return html`
      <slot class="hidden-slot" @slotchange="${this._handleSlotChange}"></slot>
      <button @click="${this._changeFormat}">
        <p class=${classMap(textClasses)} title=${this._slottedContent}>
          ${this._formattedData ?? this._slottedContent}
        </p>
      </button>
    `;
  }

  static styles = css`
    .invalid {
      text-decoration-line: underline;
      text-decoration-style: wavy;
      text-decoration-color: #d73774;
    }
    .hidden-slot {
      display: none;
    }
    button {
      cursor: pointer;
      padding: var(--btn-padding);
      background-color: var(--btn-background);
      color: var(--btn-color);
      border: var(--btn-border);
      font-size: var(--btn-fontSize);
      border-radius: var(--btn-borderRadius);
      transition: var(--btn-transition);
    }

    button:hover,
    button:focus {
      background-color: var(--btn-hoverBackground);
      color: var(--btn-hoverColor);
    }
  `;
}
