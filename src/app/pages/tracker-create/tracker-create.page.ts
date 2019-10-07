import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TrackerService } from '../../services/tracker/tracker.service';
@Component({
  selector: 'app-tracker-create',
  templateUrl: './tracker-create.page.html',
  styleUrls: ['./tracker-create.page.scss'],
})

export class TrackerCreatePage implements OnInit {
constructor(private router: Router, private trackerService: TrackerService) {}

  ngOnInit() {}
  createTracker(
    letterName: string,
    letterDate: string,
    letterNumber: number
    ): void {
    if (
    letterName === undefined ||
    letterDate === undefined ||
    letterNumber === undefined
    ) {
    return;
    }
    this.trackerService
    .createTracker(letterName, letterDate, letterNumber )
    .then(() => {
    this.router.navigateByUrl('');
    });
    }
}