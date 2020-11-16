import { Component, OnInit } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"],
})
export class SearchComponent implements OnInit {
  public tagList: string[] = ["cup", "can", "food"];
  constructor(private snackBar: MatSnackBar) {}
  public showgraph: boolean = false;

  ngOnInit(): void {}

  public addTag(tag: string) {
    if (tag != "") {
      this.tagList.includes(tag.toLowerCase())
        ? this.snackBar.open("Tag already in tags list !", "Ok", {
            duration: 2000,
          })
        : this.tagList.push(tag.toLowerCase());
      this.showgraph = false;
    }
  }
  public removeTag(tag: string) {
    if (this.tagList.includes(tag)) {
      this.tagList.splice(this.tagList.indexOf(tag), 1);
      this.snackBar.open(`${tag} removed`, "Ok", {
        duration: 1500,
      });
    }
  }
  public showGraphs() {
    this.showgraph = !this.showgraph;
  }
}
