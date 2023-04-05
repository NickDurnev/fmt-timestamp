import { html, css, LitElement } from "lit";
import {
  customElement,
  property,
  state,
  queryAssignedNodes,
} from "lit/decorators.js";
import { formatRelativeTime, formatToShort, formatToTime } from "./formatData";
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
  private _showedTooltip: boolean = false;
  private _showedBtn: boolean = true;

  private _changeFormat(e: Event) {
    console.log(1);
    this._functionIndex === 2
      ? (this._functionIndex = 0)
      : this._functionIndex++;
    this._formattedData = formatFuncs[this._functionIndex](
      this._slottedContent,
      this.locale,
      this.timeZone
    );
    this.requestUpdate();
  }

  // constructor() {
  //   super();
  //   this._formattedData = formatRelativeTime(this._slottedContent, this.locale);
  // }

  static styles = css`
    button {
      min-width: 120px;
      padding: 5px 10px;
      background-color: #bb9dcd;
      color: #ece9ee;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      font-size: 20px;
      transition: background-color 500ms linear;
    }

    button:hover,
    button:focus {
      background-color: #73498c;
    }
  `;

  protected render() {
    return html`<div>
      <p>
        <slot @slotchange="${this._handleSlotChange}"></slot>
      </p>
      <button @click="${this._changeFormat}">
        <p>${this._formattedData}</p>
      </button>
    </div>`;
  }

  private _handleSlotChange() {
    this._slottedContent = this._slottedNodes[0]?.textContent?.trim();
    this._formattedData = formatFuncs[this._functionIndex](
      this._slottedContent,
      this.locale
    );
  }
}
