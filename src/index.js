import { LitElement, html, css } from 'lit-element';

class CoreAppFirst extends LitElement {
  static styles = css`
    p {
      color: blue;
    }
  `;

  render() {
    return html`
      <p>Core App First.</p>
    `;
  }
}

customElements.define('core-app-first', CoreAppFirst);
