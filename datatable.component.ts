import { Component, Input } from '@angular/core'

export interface Data {
    id: number,
    name: string,
    age: number
}

@Component({
    selector: 'app-datatable',
    templateUrl: './datatable.component.html'
})

export class DatatableComponent {
    @Input()
    data: Data[] = [];
    
    clickDelete(id: number, index: number){
        this.data.splice(index, 1)
    }
}