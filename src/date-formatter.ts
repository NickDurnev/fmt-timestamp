import { html, css, LitElement } from "lit";
import { customElement, property, queryAssignedNodes } from "lit/decorators.js";

@customElement("date-formatter")
export class DateFormatter extends LitElement {
  @property({ attribute: "locale", reflect: true })
  locale = Intl.DateTimeFormat().resolvedOptions().locale;
    
  @property({ attribute: "zone", reflect: true })
  zone = Intl.DateTimeFormat().resolvedOptions().timeZone;


  static styles = css`
    p {
      color: green;
    }
  `;

  @queryAssignedNodes()
  private _slottedNodes!: NodeListOf<HTMLElement>;

  protected render() {
    return html`<div>
      <p>
        <slot @slotchange="${this._handleSlotChange}"></slot>
      </p>
      <p>${this.locale}, world!</p>
      <p>Timezone: ${this.zone}</p>
    </div>`;
  }

  private _handleSlotChange() {
    console.log(this._slottedNodes[0]?.textContent?.trim()); // log the slotted content to the console
  }
}
