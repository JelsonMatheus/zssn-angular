import {
  AfterViewInit, 
  Component, 
  ElementRef, 
  OnInit, 
  Renderer2, 
  ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit{

  sideBar!: HTMLElement|null;
  @ViewChild('btnToggle', {read:ElementRef}) btnToggle!: ElementRef;

  isOpen = false;

  constructor(private render: Renderer2) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    const toggleTarget = this.btnToggle.nativeElement.dataset.target;
    this.sideBar = document.getElementById(toggleTarget);
  }

  toggle(): void {
    console.log('aaa');
    const action = !this.isOpen ? 'addClass' : 'removeClass';
    this.render[action](this.sideBar, 'close');
    this.isOpen = !this.isOpen;
  }

}
