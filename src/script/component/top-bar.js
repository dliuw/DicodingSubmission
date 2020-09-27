class TopBar extends HTMLElement {
  connectedCallback() {
    this._shadowRoot = this.attachShadow({
      mode: 'open',
    });
    this.render();
  }

  render() {
    this._shadowRoot.innerHTML = /*html*/ `
    <style>
      *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      :host {
        display: block;
        width: 100%;
        background-color: #FFEFA0;
        color: #FCA652;
        bottom: 0;
        position: fixed;
        text-align: center;
      }
      h2 {
        display: none;
        padding: 16px;
      }
      a {
        display: inline-block;
        text-decoration: none;
        color: #AC4B1C;
        padding: 20px;
      }
      a:hover {
        font-weight: bold;
      }
      @media screen and (min-width: 1024px){
        :host {
          position: relative;
          top: 0;
          text-align: left;
        }
        h2{
          display: inline-block;
        }
      }
    </style>
    <h2>Submission</h2>
    <a href="index.html">Home</a>
    <a href="cart.html">Cart</a>
    `;
  }
}

customElements.define('top-bar', TopBar);
