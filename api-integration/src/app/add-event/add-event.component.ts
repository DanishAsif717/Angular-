import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-event',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-event.component.html',
  styleUrl: './add-event.component.css'
})
export class AddEventComponent {
  eventTypes: any = [];
  event = {
    id: 0,
    customerName: "",
    noOfGuests: 1,
    eventTypeId: 0,
    date: new Date(),

  }

  constructor(private http: HttpClient) {
    this.getEventTypes();

  }

  getEventTypes() {
    this.http.get("http://localhost:5162/api/EventOrganizer/EventTypes").subscribe((res: any) => {
      this.eventTypes = res;
      console.log(res);

    })
  }

  AddEvent() {
    this.http.post("http://localhost:5162/api/EventOrganizer", this.event).subscribe((res: any) => {
      if (res != null) {
        alert("Event added successfully..!")
        location.href = "/";
      } else {
        alert("Denied")
      }

    })
  }



}
