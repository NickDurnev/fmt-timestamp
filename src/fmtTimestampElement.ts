import { LitElement, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { localizedFormatter } from ".";

export const enum Mode {
  Relative,
  Time,
  Date,
}

@customElement("fmt-timestamp")
export class FmtTimestamp extends LitElement {
  @property()
  public datetime?: string;

  @property()
  public locale?: string;

  @property()
  public timezone?: string;

  @property({ attribute: false })
  public mode: Mode = Mode.Relative;

  @property({ reflect: true, type: Boolean })
  public error = false;

  private _onClick(): void {
    this.mode = ++this.mode % 3;
  }

  protected render() {
    try {
      const timestamp = this.datetime ? new Date(this.datetime) : new Date();
      if (isNaN(timestamp.getTime())) {
        this.error = true;
        return this.datetime;
      }
      const format = localizedFormatter(this.mode, this.locale, this.timezone);
      this.error = false;
      return format(timestamp);
    } catch (e) {
      console.error("fmt-timestamp", e);
      this.error = true;
      return e.message;
    }
  }

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener("click", this._onClick);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener("click", this._onClick);
  }

  static styles = css`
    :host {
      cursor: pointer;
    }
    :host([error]) {
      text-decoration: underline wavy red;
    }
  `;
}
