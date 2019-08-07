import { Component, OnInit } from '@angular/core';
import { BootcampersService } from '../../bootcampers.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  bootcampers;

  constructor(private bootcampersService: BootcampersService) { }

  ngOnInit() {
    this.bootcampers = this.bootcampersService.getUsers();
  }

}
