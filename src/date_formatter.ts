import { html, css, LitElement } from "lit";
import {
  customElement,
  property,
  state,
  queryAssignedNodes,
} from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";

import { formatToShort, formatRelativeTime, formatToTime } from "./formatData";
import funcType from "./formatData/funcType";

const formatFuncs: funcType[] = [
  formatRelativeTime,
  formatToShort,
  formatToTime,
];

@customElement("date-formatter")
export class DateFormatter extends LitElement {
  @queryAssignedNodes()
  private _slottedNodes!: NodeListOf<HTMLElement>;

  @property({ attribute: "locale", reflect: true })
  locale: string = "";

  @property({ attribute: "timeZone", reflect: true })
  timeZone: string = "";

  @state()
  private _slottedContent: string = "";
  private _formattedData: string = "";
  private _functionIndex: number = 0;
  //additional animation state
  private _showedTooltip: boolean = false;

  private _changeFormat(e: Event): void {
    this._functionIndex === formatFuncs.length - 1
      ? (this._functionIndex = 0)
      : this._functionIndex++;
    this._formattedData = formatFuncs[this._functionIndex](
      this._slottedContent,
      this.locale,
      this.timeZone
    );
    this.requestUpdate();
  }

  private _handleSlotChange(): void {
    this._slottedContent = this._slottedNodes[0]?.textContent?.trim();
    this._formattedData = formatFuncs[this._functionIndex](
      this._slottedContent,
      this.locale
    );
  }

  //additional animation method
  private _toggleShowed(): void {
    this._showedTooltip = !this._showedTooltip;
    this.requestUpdate();
  }

  static styles = css`
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
      display:none;
      /* opacity: 0;
      transform: scale(0.5); */
    }
    /* .showed {
      opacity: 1;
      transform: scale(1);
    } */
    .invalid {
      text-decoration-line: underline;
      text-decoration-style: wavy;
      text-decoration-color: #d73774;
    }
  `;

  protected render() {
    // additional animation classes
    const tooltipClasses = {
      hidden: this._showedTooltip === false,
      showed: this._showedTooltip,
    };
    const textClasses = {
      invalid: !this._formattedData,
    };
    return html`<div>
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
}
