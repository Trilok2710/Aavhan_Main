import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { distinctUntilChanged, tap } from 'rxjs/operators';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(private breakpointObserver: BreakpointObserver) { }
  ngOnInit(): void {
    this.breakpoint$.subscribe(() =>
      this.breakpointChanged()
    );
  }
  slides: any = 3;
  Breakpoints = Breakpoints;
  currentBreakpoint: string = '';

  readonly breakpoint$ = this.breakpointObserver
    .observe([Breakpoints.Large, Breakpoints.Medium, Breakpoints.Small, '(min-width: 50px)'])
    .pipe(
      tap(value => console.log(value)),
      distinctUntilChanged()
    );
  images = [
    'assets/images/Basketball.jpg',
    'assets/images/Cricket.png',
    'assets/images/Gymkhana grounds.jpg',
    'assets/images/Kho-kho.jpg',
    'assets/images/Squash.jpg',
    'assets/images/Swimming pool.jpg',
    'assets/images/Table Tennis.jpg',
    'assets/images/Tennis.JPG',
    'assets/images/Volleyball.jpg',

  ];
  breakpointChanged() {
    if (this.breakpointObserver.isMatched(Breakpoints.Large)) {
      this.currentBreakpoint = Breakpoints.Large;
      console.log("Largee")
      this.slides = 3;
    } else if (this.breakpointObserver.isMatched(Breakpoints.Medium)) {
      this.currentBreakpoint = Breakpoints.Medium;
      console.log("Medium")
      this.slides = 3
    } else if (this.breakpointObserver.isMatched(Breakpoints.Small)) {
      this.currentBreakpoint = Breakpoints.Small;
      console.log("Small")
      this.slides = 1
      console.log(this.slides)
    } else if (this.breakpointObserver.isMatched('(min-width: 50px)')) {
      this.currentBreakpoint = '(min-width: 50px)';
      this.slides = 1
    }

    console.log(this.slides)
  }
  sliderSelector = '.swiper-container';


  config_3: SwiperOptions = {
    slidesPerView: 3,
    keyboard: true,
    mousewheel: true,
    scrollbar: true,
    pagination: { el: '.swiper-pagination', clickable: true },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    loop: true,
    spaceBetween: 30
  };
  config_1: SwiperOptions = {
    slidesPerView: 1,
    keyboard: true,
    mousewheel: true,
    scrollbar: true,
    pagination: { el: '.swiper-pagination', clickable: true },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    loop: true,
    spaceBetween: 30
  };




}
