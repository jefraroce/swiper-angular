import { Component } from '@angular/core';

// import 'node_modules/swiper/swiper.scss';
// import 'node_modules/swiper/modules/navigation/navigation.scss';
// import 'node_modules/swiper/modules/pagination/pagination.scss';
// import 'swiper/scss/pagination.scss';

// import Swiper core and required modules
import SwiperCore, { SwiperOptions, Navigation, Pagination, Scrollbar, Swiper, Virtual } from 'swiper';
import { SwiperComponent } from 'swiper/angular';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, Virtual]);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  swiper: Swiper = { slideNext: () => {}, slidePrev: () => {} } as Swiper;
  // @ViewChild('swiper', { static: false }) swiper?: SwiperComponent;
  slideNext() {
    this.swiper.slideNext();
  }

  slidePrev() {
    if (this.swiper && this.swiper.slidePrev) {
      this.swiper.slidePrev();
    }
  }

  config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 50,
    navigation: true,
    loop: true,
    scrollbar: { draggable: true },
    breakpoints: {
      // when window width is >= 320px
      // 320: {
      //   slidesPerView: 2,
      //   spaceBetween: 20
      // },
      // when window width is >= 576px
      576: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      // when window width is >= 992px
      992: {
        slidesPerView: 3,
        spaceBetween: 40
      },
      // when window width is >= 1200px
      1200: {
        slidesPerView: 4,
        spaceBetween: 40
      }
    }
  };

  data = [
    {
      "id": "200b1dc8-3118-4a88-8d88-c1847b42c362",
      "title": "Flash 1",
      "subtitle": "Flash Serie",
      "banner1": "https://storage.googleapis.com/download/storage/v1/b/kuaacontentstreaming/o/kuaacontentstreaming%2Fcontent%2Fq8pj8x4tcgrb1%2Fq8pj8x4tcgrb1.jpg?generation=1641830278347873&alt=media",
    },
    {
      "id": "200b1dc8-3118-4a88-8d88-c1847b42c362",
      "title": "Flash 2",
      "subtitle": "Flash Serie",
      "banner1": "https://i5.walmartimages.com/asr/0b2ad7fe-bd45-4251-a7de-c48d069a5f10.98111ea92d05fb84de277294a4bf2078.jpeg",
    },
    {
      "id": "200b1dc8-3118-4a88-8d88-c1847b42c362",
      "title": "Flash 3",
      "subtitle": "Flash Serie",
      "banner1": "https://m.media-amazon.com/images/I/71pAQsmvQyL._AC_SL1000_.jpg",
    }
  ];

  onSwiper(swiper: any) {
    console.log('onSwiper ', swiper);
    this.swiper = swiper;
  }

  onSlideChange() {
    console.log('slide change');
  }
}
