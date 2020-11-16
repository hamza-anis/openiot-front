import { Component, OnInit, Input } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Dish } from "../models/dish";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-graphs",
  templateUrl: "./graphs.component.html",
  styleUrls: ["./graphs.component.scss"],
})
export class GraphsComponent implements OnInit {
  constructor(private httpClient: HttpClient, private snackBar: MatSnackBar) {}
  private url: string = "http://localhost:3000/get?";
  public rep: any;
  @Input() public tagList: String[];
  private dishesList: Dish[];
  public showGraph: boolean = false;
  public data = [
    {
      values: [],
      labels: [],
      type: "pie",
    },
  ];

  public layout = {
    height: 400,
    width: 500,
    automargin: true,
  };

  ngOnInit(): void {
    this.tagList.map((element) => {
      this.url += `type=${element}&`;
    });
    this.showResponse();
  }

  private async getReponse(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.httpClient.get<Dish[]>(this.url).subscribe(
        (response) => {
          this.dishesList = response;
          resolve(true);
        },
        (error) => {
          resolve(false);
          this.snackBar.open("No data found", "Ok", {
            duration: 3000,
          });
        }
      );
    });
  }
  private async showResponse() {
    const graphdata = this.data[0];
    if (await this.getReponse()) {
      if (this.dishesList.length > 0) {
        this.showGraph = true;
        this.dishesList.forEach((elem) => {
          graphdata.values.push(elem.count);
          graphdata.labels.push(elem.type);
        });
      }
    }
  }
}
