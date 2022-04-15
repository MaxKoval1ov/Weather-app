import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent implements OnInit {
  resultString: string | number = new Date(2022, 4, 13).getFullYear();

  ngOnInit(): void {
    const currentYear = new Date().getFullYear();
    if (this.resultString < currentYear)
      this.resultString = `${this.resultString}-${currentYear}`;
    else if (this.resultString < currentYear)
      this.resultString = 'Time format error';
  }
}
