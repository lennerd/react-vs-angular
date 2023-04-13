import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import "zone.js";
import "zone.js/dist/long-stack-trace-zone.js";
import JSConfetti from "js-confetti";

import { AppModule } from "./app/app.module";

export const jsConfetti = new JSConfetti();

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
