import "core-js/proposals/reflect-metadata";
import { BrowserModule } from "@angular/platform-browser";
import { createCustomElement } from "@angular/elements";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { NgModule, Injector, Inject } from "@angular/core";
import MyCounter from "./my-counter.js";
import Counter from "./another-counter.js";

@NgModule({
  imports: [BrowserModule],
  declarations: [MyCounter, Counter],
  providers: [],
  entryComponents: [MyCounter, Counter],
})
class AppModule {
  constructor(@Inject(Injector) private injector: Injector) {}
  ngDoBootstrap() {
    customElements.define(
      "another-counter",
      createCustomElement(Counter, {
        injector: this.injector,
      })
    );
  }
}
platformBrowserDynamic().bootstrapModule(AppModule, { ngZone: "noop" });
