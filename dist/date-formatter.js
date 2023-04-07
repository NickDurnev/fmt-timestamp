var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, css, LitElement } from "lit";
import { customElement, property, state, queryAssignedNodes, } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { formatRelativeTime, formatToShort, formatToTime } from "./formatData";
const formatFuncs = [
    formatRelativeTime,
    formatToShort,
    formatToTime,
];
let DateFormatter = class DateFormatter extends LitElement {
    constructor() {
        super(...arguments);
        this.locale = "";
        this.timeZone = "";
        this._slottedContent = "";
        this._formattedData = "";
        this._functionIndex = 0;
        //additional animation state
        this._showedTooltip = false;
    }
    _changeFormat(e) {
        this._functionIndex === formatFuncs.length - 1
            ? (this._functionIndex = 0)
            : this._functionIndex++;
        this._formattedData = formatFuncs[this._functionIndex](this._slottedContent, this.locale, this.timeZone);
        this.requestUpdate();
    }
    _handleSlotChange() {
        var _a, _b;
        this._slottedContent = (_b = (_a = this._slottedNodes[0]) === null || _a === void 0 ? void 0 : _a.textContent) === null || _b === void 0 ? void 0 : _b.trim();
        this._formattedData = formatFuncs[this._functionIndex](this._slottedContent, this.locale);
    }
    //additional animation method
    _toggleShowed() {
        this._showedTooltip = !this._showedTooltip;
        this.requestUpdate();
    }
    render() {
        // additional animation classes
        const tooltipClasses = {
            hidden: this._showedTooltip === false,
            showed: this._showedTooltip,
        };
        const textClasses = {
            invalid: !this._formattedData,
        };
        return html `<div>
      <p class=${classMap(tooltipClasses)}>
        <slot @slotchange="${this._handleSlotChange}"></slot>
      </p>
      <button
        @click="${this._changeFormat}"
      >
        <p class=${classMap(textClasses)} title=${this._slottedContent}>
          ${this._formattedData ? this._formattedData : this._slottedContent}
        </p>
      </button>
       <!-- <button
        @mouseenter="${this._toggleShowed}"
        @mouseleave="${this._toggleShowed}"
      >
        Toggle Tooltip
      </button> -->
    </div>`;
    }
};
DateFormatter.styles = css `
    * {
      box-sizing: border-box;
    }
    p {
      margin: 0;
    }
    div {
      width: 300px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      margin: 0 auto;
    }
    div > p {
      margin-bottom: 10px;
      padding: 10px;
      background-color: #cc7cd5;
      color: #ece9ee;
      transition: all 300ms linear;
      border-radius: 10px;
    }
    button {
      min-width: 120px;
      padding: 20px;
      background-color: #bb9dcd;
      color: #ece9ee;
      border: none;
      border-radius: 10px;
      cursor: pointer;
      font-size: 20px;
      transition: background-color 300ms linear;
    }

    button:hover,
    button:focus {
      background-color: #73498c;
    }

    .hidden {
      opacity: 0;
      transform: scale(0.5);
    }
    .showed {
      opacity: 1;
      transform: scale(1);
    }
    .invalid {
      text-decoration-line: underline;
      text-decoration-style: wavy;
      text-decoration-color: #d73774;
    }
  `;
__decorate([
    queryAssignedNodes()
], DateFormatter.prototype, "_slottedNodes", void 0);
__decorate([
    property({ attribute: "locale", reflect: true })
], DateFormatter.prototype, "locale", void 0);
__decorate([
    property({ attribute: "timeZone", reflect: true })
], DateFormatter.prototype, "timeZone", void 0);
__decorate([
    state()
], DateFormatter.prototype, "_slottedContent", void 0);
DateFormatter = __decorate([
    customElement("date-formatter")
], DateFormatter);
export { DateFormatter };
