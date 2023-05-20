//import { Author } from "../author/author";
//import { Editorial } from "../editrial/editorial";

import { Equipo } from "./equipo";
export class EquipoDetail extends Equipo {

 constructor (
 country: string,
 draws: number,
 games_played: number,
 goal_differential: number,
 goals_against: number,
 goals_for: number,
 group_letter: string,
 group_points: number,
 losses: number,
 name: string,
 wins: number,


 )

 {
  super(country, draws, games_played, goal_differential, goals_against, goals_for, group_letter, group_points, losses, name, wins)
 /**  this.authors = authors;
  this.reviews = reviews; */

}

}
