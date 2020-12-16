import {
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import videojs from 'video.js';
@Component({
  selector: 'app-video-js-player',
  template: `
    <video
      #target
      class="video-js"
      controls
      muted
      playsinline
      preload="none"
    ></video>
  `,
  host: {
    class: 'block'
  }
})
export class VideoJsPlayerComponent implements OnInit, OnDestroy {
  @ViewChild('target', { static: true }) target!: ElementRef;
  // see options: https://github.com/videojs/video.js/blob/mastertutorial-options.html
  @Input() options!: videojs.PlayerOptions;
  player!: videojs.Player;

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    // instantiate Video.js
    this.player = videojs(this.target.nativeElement, this.options);
  }

  ngOnDestroy() {
    // destroy player
    if (this.player) {
      this.player.dispose();
    }
  }
}
