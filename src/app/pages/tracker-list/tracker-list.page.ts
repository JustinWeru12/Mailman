import { Component, OnInit } from '@angular/core';
import { TrackerService } from '../../services/tracker/tracker.service';
@Component({
selector: 'app-tracker-list',
templateUrl: './tracker-list.page.html',
styleUrls: ['./tracker-list.page.scss'],
})
export class TrackerListPage implements OnInit {
public trackerList: Array<any>;
constructor(private trackerService: TrackerService) {}
ngOnInit() {
  this.trackerService.getTrackerList().then(trackerListSnapshot => {
    this.trackerList = [];
    trackerListSnapshot.forEach(snap => {
    this.trackerList.push({
    id: snap.id,
    name: snap.data().name,
    price: snap.data().price,
    date: snap.data().date
    });
    return false;
    });
    });
}
}