import { Directive, HostBinding, HostListener, Input } from '@angular/core';


@Directive({
  selector: '[appInputcolor]'
})
export class InputcolorDirective {
  @Input() color: string = ''

  @HostBinding('style.color') bcolor: string = this.color;
  constructor() { }

}

// host element (宿主元素)
// 指令可以用在组件和标签中，他们都可以是指令的宿主元素

// HostListener 是属性装饰器，用来为宿主元素添加事件监听。
// HostListenerDecorator 装饰器定义
// export interface HostListenerDecorator {
//   (eventName: string, args?: string[]): any;
//   new(eventName: string, args?: string[]): any;
// }

// https://www.cnblogs.com/oxspirt/p/13517081.html