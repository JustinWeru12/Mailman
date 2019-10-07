import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import { AuthService } from '../user/auth.service';
@Injectable({
providedIn: 'root',
})
export class TrackerService {
public trackerListRef: firebase.firestore.CollectionReference;
  authService: any;
constructor() {}
createTracker(
  letterName: string,
  letterDate: string,
  letterNumber: number,
  ): Promise<firebase.firestore.DocumentReference> {
  return this.trackerListRef.add({
  name: letterName,
  date: letterDate,
  cost: letterNumber,
   });
  }
  async getTrackerList(): Promise<firebase.firestore.QuerySnapshot> {
    const user: firebase.User = await this.authService.getUser();
    this.trackerListRef = firebase
    .firestore()
    .collection(`userProfile/${user.uid}/trackerList`);
    return this.trackerListRef.get();
    }
    async getTrackerDetail(letterId: string):
Promise<firebase.firestore.DocumentSnapshot> {
const user: firebase.User = await this.authService.getUser();
this.trackerListRef = firebase
.firestore()
.collection(`userProfile/${user.uid}/trackerList`);
return this.trackerListRef.doc(letterId).get();
}
}