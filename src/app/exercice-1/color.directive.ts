import {
  Directive,
  Input,
  OnInit,
  ElementRef,
  HostListener,
} from "@angular/core";

@Directive({
  selector: "[appColor]",
})
export class ColorDirective implements OnInit {
  @HostListener("document:keydown", ["$event"]) private reactToPress(
    $event: KeyboardEvent
  ) {
    // console.log($event);

    switch ($event.key) {
      case "ArrowDown": {
        this.el.nativeElement.style.color = "rgb(255, 0, 255)";
        break;
      }
      case "ArrowUp": {
        this.el.nativeElement.style.color = "rgb(0, 255, 0)";
        break;
      }
      case "ArrowLeft": {
        this.el.nativeElement.style.color = "rgb(255, 0, 0)";
        break;
      }
      case "ArrowRight": {
        this.el.nativeElement.style.color = "rgb(0, 0, 255)";
        break;
      }
      default: {
        // reset colour if not an arrow key
        this.el.nativeElement.style.color = "";
        break;
      }
    }
  }

  constructor(private el: ElementRef<any>) {}

  ngOnInit(): void {}
}
