import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appBordercolor]'
})
export class BordercolorDirective {
  // 定义我们需要展示的所有可能的颜色
  possibleColors = [
    'darksalmon', 'hotpink', 'lightskyblue', 'goldenrod', 'peachpuff',
    'mediumspringgreen', 'cornflowerblue', 'blanchedalmond', 'lightslategrey'
  ];
  // 定义并用@HostBinding()装饰color和borderColor，用于设置样式
  @HostBinding('style.color') color: string = '';
  @HostBinding('style.borderColor') borderColor: string = '';
  // 用@HostListener()监听宿主元素的keydown事件，为color和borderColor随机分配颜色
  @HostListener('keydown') onKeydown() {
    const colorPick = Math.floor(Math.random() * this.possibleColors.length);
    this.color = this.borderColor = this.possibleColors[colorPick];
  }
  constructor() { }

}


// @HostBinding() 和@HostListener() 在自定义指令时非常有用。
// @HostBinding() 可以为指令的宿主元素添加类、样式、属性等.
// @HostListener() 可以监听宿主元素上的事件。