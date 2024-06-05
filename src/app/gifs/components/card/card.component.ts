import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interface';

@Component({
  selector: 'gifs-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent implements OnInit {
  ngOnInit(): void {
    if (!this.gif) throw new Error('Gif property is requied');
  }

  @Input()
  public gif!: Gif;
}
