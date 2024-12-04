import { Routes } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { AddEventComponent } from './add-event/add-event.component';
import { EditEeventComponent } from './edit-eevent/edit-eevent.component';
import { EventDeleteComponent } from './event-delete/event-delete.component';

export const routes: Routes = [

    {
        path:"",
        component:EventsComponent
        
    },
    {
        path:"addEvent",
        component:AddEventComponent,
        
    }
    ,
    {
        path:"editEvent/:id",
        component:EditEeventComponent,
    }
    ,
    {
        path:"deleteEvent/:id",
        component:EventDeleteComponent,
    }
];
