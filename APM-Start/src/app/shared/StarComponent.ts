import { Component, OnChanges, Input, EventEmitter, Output } from "@angular/core";
@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
    @Input() rating: number;
    starWidth: number;

    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges(): void {
        this.starWidth = this.rating * 75 / 5;
    }
//on click event to handle  when user click on star div
//it fire the ratingClicked event
//this event is output to the main container
    OnClick(): void {
        this.ratingClicked.emit(`The rating ${this.rating} was clicked`)
    }
}