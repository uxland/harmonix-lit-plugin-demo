import { LitElement, css, html } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import type { PrimariaApi } from "@uxland/primary-shell";
import {
  addItem,
  deleteItem,
  updateItem,
} from "../../activity-history-plugin-integration/activity-history-actions";

@customElement("plugin-main-view")
export class MainView extends LitElement {
  @property({ attribute: false }) api!: PrimariaApi;

  @state() private missatge: string | null = null;

  private subscription: any = null;

  private async addHistoryItem() {
    try {
      await addItem(this.api);
      this.api.notificationService.success("Element afegit correctament");
      this.deactivate();
    } catch (error) {
      this.api.notificationService.error("Error afegint l'element");
    }
  }

  private async modifyHistoryItem() {
    try {
      await updateItem(this.api);
      this.api.notificationService.success("Element modificat correctament");
      this.deactivate();
    } catch (error) {
      this.api.notificationService.error("Error modificant l'element");
    }
  }

  private async removeHistoryItem() {
    try {
      await deleteItem(this.api);
      this.api.notificationService.success("Element eliminat correctament");
      this.deactivate();
    } catch (error) {
      this.api.notificationService.error("Error eliminant l'element");
    }
  }

  private deactivate() {
    this.api.regionManager.deactivateView(
      this.api.regionManager.regions.shell.main,
      "plugin-main-view",
    );
  }

  private publicarEvent() {
    this.api.broker.publish("event_lit_demo", {
      missatge: "Event rebut correctament!",
    });
  }

  private escoltarEvent() {
    if (this.subscription) return;
    this.subscription = this.api.broker.subscribe(
      "event_lit_demo",
      (payload: any) => {
        this.missatge = payload?.missatge || "Missatge buit";
      },
    );
  }

  render() {
    return html`
      <h1>Lit Harmonix plugin</h1>
      <div class="actions">
        <dss-button
          @click=${() => this.addHistoryItem()}
          label="Afegir Element"
          size="md"
          variant="primary"
        ></dss-button>
        <dss-button
          @click=${() => this.modifyHistoryItem()}
          label="Modificar Element"
          size="md"
          variant="secondary"
        ></dss-button>
        <dss-button
          @click=${() => this.removeHistoryItem()}
          label="Eliminar Element"
          size="md"
          variant="error"
        ></dss-button>
      </div>
      <p>Afegeix, modifica o elimina elements al seguiment clinic.</p>
      <div class="actions">
        <dss-button
          @click=${() => this.publicarEvent()}
          label="Publicar event"
          size="md"
          variant="primary"
        ></dss-button>
        <dss-button
          @click=${() => this.escoltarEvent()}
          label="Escoltar event"
          size="md"
          variant="secondary"
        ></dss-button>
      </div>
      ${this.missatge
        ? html`<div class="missatge">
            <strong>Missatge rebut:</strong> ${this.missatge}
          </div>`
        : null}
      <p>
        Clicka primer en "Escoltar event" i després en "Publicar event" per veure
        com funciona la comunicació mitjançant l'API.
      </p>
    `;
  }

  static styles = css`
    :host {
      display: block;
      padding: 20px;
    }
    .actions {
      display: flex;
      gap: 10px;
    }
    .missatge {
      margin-top: 20px;
      color: green;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "plugin-main-view": MainView;
  }
}
