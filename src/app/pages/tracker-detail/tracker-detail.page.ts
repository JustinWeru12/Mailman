import { Component, OnInit } from '@angular/core';
import { TrackerService } from '../../services/tracker/tracker.service';
import { ActivatedRoute } from '@angular/router';
@Component({
selector: 'app-tracker-detail',
templateUrl: './tracker-detail.page.html',
styleUrls: ['./tracker-detail.page.scss'],
})
export class TrackerDetailPage implements OnInit {
public currentTracker: any = {};
constructor(
private trackerService: TrackerService,
private route: ActivatedRoute,
) {}
ngOnInit() {
  const trackerId: string = this.route.snapshot.paramMap.get('id');
this.trackerService.getTrackerDetail(trackerId).then(trackerSnapshot => {
this.currentTracker = trackerSnapshot.data();
this.currentTracker.id = trackerSnapshot.id;
});
}
}