import { Component, OnInit } from "@angular/core";
import { GraphService } from "../graph.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  constructor(private graph: GraphService) {}

  ngOnInit() {}

  addNode() {
    this.graph.addNode();
    console.log("Nav bar adding node");
  }

  addLink() {
    this.graph.addLink1();
    console.log("Nav bar adding link");
  }
}
