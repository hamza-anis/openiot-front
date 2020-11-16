import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatInputModule } from "@angular/material/input";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { SearchComponent } from "./search/search.component";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { GraphsComponent } from "./graphs/graphs.component";
import { HttpClientModule } from "@angular/common/http";
import { MatChipsModule } from "@angular/material/chips";
import * as PlotlyJS from "plotly.js/dist/plotly.js";
import { PlotlyModule } from "angular-plotly.js";

PlotlyModule.plotlyjs = PlotlyJS;
@NgModule({
  declarations: [AppComponent, SearchComponent, GraphsComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule,
    MatSnackBarModule,
    MatChipsModule,
    HttpClientModule,
    PlotlyModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
