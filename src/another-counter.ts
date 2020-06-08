import {
  Input,
  Component,
  ViewEncapsulation,
  ChangeDetectorRef,
} from "@angular/core";
@Component({
  selector: "another-counter",
  template: `<my-counter count="6"></my-counter>`,
})
export default class Counter {}
