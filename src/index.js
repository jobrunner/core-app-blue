import { LitElement, html, css } from 'lit-element';
import '@jobrunner/job-header';

import styles from './index.css';

class CoreAppFirst extends LitElement {
  static get styles() {
    return css([styles])
  }

  render() {
    return html`
      <job-header>
        <img slot="image" src="https://via.placeholder.com/100" alt="Placeholder Image">
        Welcome Colors!
      </job-header>
      <p>Core App First.</p>
    `;
  }
}

customElements.define('core-app-first', CoreAppFirst);
