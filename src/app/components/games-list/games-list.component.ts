import { Component, ViewChild, OnInit } from "@angular/core";
import { Game } from "./../../shared/game";
import { ApiService } from "./../../shared/api.service";
import { MatPaginator, MatTableDataSource } from "@angular/material";

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.css']
})
export class GamesListComponent implements OnInit {
  GameData: any = [];
  dataSource: MatTableDataSource<Game>;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  displayedColumns: string[] = [
    "game_name",
    "game_rating",
    "plaftorm",
    "publisher",
    "release",
    "game_status",
    "action"
  ];

  constructor(private gameApi: ApiService) {
    this.gameApi.GetPlayers().subscribe(data => {
      this.GameData = data;
      console.log(data);
      this.dataSource = new MatTableDataSource<Game>(this.GameData);
      setTimeout(() => {
        this.dataSource.paginator = this.paginator;
      }, 0);
    });
  }

  ngOnInit() {
  }

}
